from imaginglss.model.catalogue import C
from imaginglss.utils.npyquery import Min, Max

RA = C('RA')
DEC = C('DEC')

BRICK_PRIMARY = C('BRICK_PRIMARY')
TYPE = C('TYPE')

#DECAM_PSFSIZE = C('DECAM_PSFSIZE')
#DECAM_ANYMASK = C('DECAM_ANYMASK')

SHAPEDEV_R = C('SHAPEDEV_R')
SHAPEEXP_R = C('SHAPEEXP_R')

GFLUX = C('FLUX_G') / C('MW_TRANSMISSION_G')
GFLUX_IVAR = C('FLUX_IVAR_G') * C('MW_TRANSMISSION_G') ** 2
GFLUX.band = 'g'
RFLUX = C('FLUX_R') / C('MW_TRANSMISSION_R')
RFLUX_IVAR = C('FLUX_IVAR_R') * C('MW_TRANSMISSION_R') ** 2
RFLUX.band = 'r'
ZFLUX = C('FLUX_Z') / C('MW_TRANSMISSION_Z')
ZFLUX_IVAR = C('FLUX_IVAR_Z') * C('MW_TRANSMISSION_Z') ** 2
ZFLUX.band = 'z'

W1FLUX = C('FLUX_W1') / C('MW_TRANSMISSION_W1')
W1FLUX_IVAR = C('FLUX_IVAR_W1') * C('MW_TRANSMISSION_W1') ** 2
# Do not use WISE bands in completeness modeling
# W1FLUX.band = 'w1'
W2FLUX = C('FLUX_W2') / C('MW_TRANSMISSION_W2')
W2FLUX_IVAR = C('FLUX_IVAR_W2') * C('MW_TRANSMISSION_W2') ** 2
# Do not use WISE bands in completeness modeling
# W2FLUX.band = 'w2'
