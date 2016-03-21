
from __future__ import print_function
import numpy as np

from imaginglss             import DECALS
from imaginglss.analysis    import targetselection
from imaginglss.utils       import output
from kdcount import KDTree

from argparse import ArgumentParser

ap = ArgumentParser("query_completeness.py")
ap.add_argument("ObjectType", choices=[i for i in targetselection.__all__])
ap.add_argument("output", type=output.writer)
ap.add_argument("objects", type=output.writer)
ap.add_argument("noises", type=output.writer)
ap.add_argument("--sigma-z", type=float, default=3.0)
ap.add_argument("--sigma-g", type=float, default=5.0)
ap.add_argument("--sigma-r", type=float, default=5.0)
ap.add_argument("--conf", default=None,
        help="Path to the imaginglss config file, default is from DECALS_PY_CONFIG")

ns = ap.parse_args()
ns.conf = DECALS(ns.conf)

np.seterr(divide='ignore', invalid='ignore')

def build_model(ns, fluxes, noises, sigmas={'r': ns.sigma-r,'g': ns.sigma-g, 'z': ns.sigma-z}):
    fluxcut = getattr(targetselection, ns.ObjectType)

    fluxes = np.array([
        fluxes['DECAM_INTRINSIC_FLUX'][:, ns.conf.datarelease.bands[band]]
        for band in fluxcut.bands]).T

    noises = np.array([
        sigmas[band] * noises['DECAM_INTRINSIC_NOISE_LEVEL'][:, ns.conf.datarelease.bands[band]]
        for band in fluxcut.bands]).T

    lim = fluxes.min(axis=0)
    mask = (noises <= lim).all(axis=-1)
    model = fluxes[mask]
    tree = KDTree(model)
    root = tree.root 

    def modelfunc(noises):
        noises = np.array([
            sigmas[band] * noises['DECAM_INTRINSIC_NOISE_LEVEL'][:, ns.conf.datarelease.bands[band]]
            for band in fluxcut.bands]).T
        seen = root.integrate(noises, np.inf)

        return 1.0 * seen / len(model)

    return modelfunc

def query_completeness(ns):
    object_fluxes = ns.objects.read('FLUXES')
    object_noises = ns.objects.read('NOISES')
    sigmas = {
        'z': ns.sigma_z,
        'r': ns.sigma_r,
        'g': ns.sigma_g,
        }
    model = build_model(ns, object_fluxes, object_noises, sigmas)

    noises = ns.noises.read('NOISES')

    dtype = [('FRACTION_COMPLETENESS', 'f8')]
    FC = np.empty(len(noises), dtype=dtype)
    FC['FRACTION_COMPLETENESS'][:] = model(noises) 
    return FC

if __name__=="__main__":

    FC = query_completeness(ns)

    ns.output.write(FC, ns.__dict__, 'FC')
