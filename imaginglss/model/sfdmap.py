"""
Accesing SFD98 maps.

Most code taken from 
https://raw.githubusercontent.com/dstndstn/tractor/master/projects/desi/common.py
, 
replaced the transformation with ours.
"""
import fitsio
import os
from ..utils import wcs_simplezea
from ..utils.euler import euler
import numpy as np

# to run need to 
# export DUST_DIR=/project/projectdirs/desi/software/edison/dust/v0_0/
__all__ = ['SFDMap']

class anwcs_t(object):
    def __init__(self, filename, hduid):
        header = dict(fitsio.read_header(filename, hduid))
        self.scale, self.crpix, self.nsgp = wcs_simplezea.parse_header(header, zero_offset=False)
    def radec2pixelxy(self, ra, dec):
        input = np.array([ra, dec])
        x,y = wcs_simplezea.ang2pix(input, SCALE=self.scale, CRPIX=self.crpix, NSGP=self.nsgp)
        return np.zeros_like(x), x, y
def radectolb(ra, dec):
    l, b = euler(ra, dec, 1)
    return l, b 
class SFDMap(object):
    """
    SFDMap accesses the SFD98 Map. The map file shall be given in the constructor.

    Attributes
    ----------
    extinctions : dict
        These values are not useful for us, but we keep them for reference.

        These come from Schlafly & Finkbeiner, arxiv 1012.4804v2, Table 6, Rv=3.1
        but updated (and adding DES u) via email from Schlafly,
        decam-data thread from 11/13/2014, "New recommended SFD coefficients for DECam."
       
        The coefficients for the four WISE filters are derived from Fitzpatrick 1999,
        as recommended by Schafly & Finkbeiner, considered better than either the
        Cardelli et al 1989 curves or the newer Fitzpatrick & Massa 2009 NIR curve
        not vetted beyond 2 micron).
        These coefficients are A / E(B-V) = 0.184, 0.113, 0.0241, 0.00910. 

    Notes
    -----
    Use :py:meth:`ebv` to query the E(B-V) values. 

    """
    extinctions = {
        'SDSS u': 4.239,
        'DES u': 3.995,
        'DES g': 3.214,
        'DES r': 2.165,
        'DES i': 1.592,
        'DES z': 1.211,
        'DES Y': 1.064,
        'WISE W1': 0.184,
        'WISE W2': 0.113,
        'WISE W3': 0.0241,
        'WISE W4': 0.00910,
        }

    def __init__(self, ngp_filename=None, sgp_filename=None, dustdir=None):
        """
        Parameters
        ----------
        ngp_filename : string
            filename of the north plane data
        sgp_filename : string
            filename of the sourth plane data
        dustdir      : string
            directory to look for data files, overrides ngp_filename and sgp_filename,
            Will use `DUST_DIR` environment variable if not supplied.
    
        """
        if dustdir is None:
            dustdir = os.environ.get('DUST_DIR', None)
        if dustdir is not None:
            dustdir = os.path.join(dustdir, 'maps')
        else:
            dustdir = '.'
            print('Warning: $DUST_DIR not set; looking for SFD maps in current directory.')
        if ngp_filename is None:
            ngp_filename = os.path.join(dustdir, 'SFD_dust_4096_ngp.fits')
        if sgp_filename is None:
            sgp_filename = os.path.join(dustdir, 'SFD_dust_4096_sgp.fits')
        if not os.path.exists(ngp_filename):
            raise RuntimeError('Error: SFD map does not exist: %s' % ngp_filename)
        if not os.path.exists(sgp_filename):
            raise RuntimeError('Error: SFD map does not exist: %s' % sgp_filename)
        self.north = fitsio.read(ngp_filename)
        self.south = fitsio.read(sgp_filename)
        self.northwcs = anwcs_t(ngp_filename, 0)
        self.southwcs = anwcs_t(sgp_filename, 0)

    @staticmethod
    def bilinear_interp_nonzero(image, x, y):
        H,W = image.shape
        x0 = np.floor(x).astype(int)
        y0 = np.floor(y).astype(int)
        # Bilinear interpolate, but not outside the bounds (where ebv=0)
        fx = np.clip(x - x0, 0., 1.)
        ebvA = image[y0,x0]
        ebvB = image[y0, np.clip(x0+1, 0, W-1)]
        ebv1 = (1.-fx) * ebvA + fx * ebvB
        ebv1[ebvA == 0] = ebvB[ebvA == 0]
        ebv1[ebvB == 0] = ebvA[ebvB == 0]

        ebvA = image[np.clip(y0+1, 0, H-1), x0]
        ebvB = image[np.clip(y0+1, 0, H-1), np.clip(x0+1, 0, W-1)]
        ebv2 = (1.-fx) * ebvA + fx * ebvB
        ebv2[ebvA == 0] = ebvB[ebvA == 0]
        ebv2[ebvB == 0] = ebvA[ebvB == 0]

        fy = np.clip(y - y0, 0., 1.)
        ebv = (1.-fy) * ebv1 + fy * ebv2
        ebv[ebv1 == 0] = ebv2[ebv1 == 0]
        ebv[ebv2 == 0] = ebv1[ebv2 == 0]
        return ebv

    def ebv(self, ra, dec):
        """
        Directly query the SFD map and returns E(B-V).
        
        Parameters
        ----------
        ra   : array_like
            RA in degrees.
        dec  : array_like
            DEC in degrees.

        Returns
        -------
        ebv  : array_like
            E(B-V)
        """
        l,b = radectolb(ra, dec)
        ebv = np.zeros_like(l)
        N = (b >= 0)
        for wcs,image,cut in [(self.northwcs, self.north, N),
                              (self.southwcs, self.south, np.logical_not(N))]:
            # Our WCS routines are mis-named... the SFD WCSes convert 
            #   X,Y <-> L,B.
            if cut.sum() == 0:
                continue
            ok,x,y = wcs.radec2pixelxy(l[cut], b[cut])
            assert(np.all(ok == 0))
            H,W = image.shape
            assert(np.all(x >= 0.5))
            assert(np.all(x <= (W+0.5)))
            assert(np.all(y >= 0.5))
            assert(np.all(y <= (H+0.5)))
            ebv[cut] = SFDMap.bilinear_interp_nonzero(image, x-1., y-1.)
        return ebv

    def extinction(self, filts, ra, dec, get_ebv=False):
        """
        Returns the extinction for different filters.

        Do not use this function; copied from old code. 
        Use :py:meth:`ebv` instead. 
        """
        ebv = self.ebv(ra, dec)
        if filts is not None:
            factors = np.array([SFDMap.extinctions[f] for f in filts])
            rtn = factors[np.newaxis,:] * ebv[:,np.newaxis]
        if get_ebv and filts is not None:
            return ebv,rtn
        elif filts is None:
            return ebv
        return rtn

if __name__ == '__main__':
    from datarelease import DataRelease
    dr = DataRelease()
    RA = dr.catalogue['RA']
    DEC = dr.catalogue['DEC']
    EXT = dr.catalogue['DECAM_EXTINCTION']
    m = SFDMap()
    EXT2 = m.extinction(['DES %s' % i for i in 'ugrizY'],
            RA, DEC)
    print(EXT - EXT2)
