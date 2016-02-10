"""
    Target Selection

    https://desi.lbl.gov/trac/wiki/TargetSelection

    A collection of helpful (static) methods to check whether an object's
    flux passes a given selection criterion (e.g. LRG, ELG or QSO).

    These cuts assume we are passed the extinction-corrected fluxes
    (flux/mw_transmission) and are taken from:

      https://desi.lbl.gov/trac/wiki/TargetSelection

"""

__author__ = "Yu Feng and Martin White"
__version__ = "1.0"
__email__  = "yfeng1@berkeley.edu or mjwhite@lbl.gov"

from imaginglss.model.catalogue import C
from imaginglss.utils.npyquery import Max, Min

DECAM_FLUX = C('DECAM_FLUX')
DECAM_MW_TRANSMISSION = C('DECAM_MW_TRANSMISSION')
WISE_FLUX = C('WISE_FLUX')
WISE_MW_TRANSMISSION = C('WISE_MW_TRANSMISSION')
BRICK_PRIMARY = C('BRICK_PRIMARY')
TYPE = C('TYPE')

SHAPEDEV_R = C('SHAPEDEV_R')
SHAPEEXP_R = C('SHAPEEXP_R')

GFLUX = DECAM_FLUX[1] / DECAM_MW_TRANSMISSION[1]
RFLUX = DECAM_FLUX[2] / DECAM_MW_TRANSMISSION[2]
ZFLUX = DECAM_FLUX[4] / DECAM_MW_TRANSMISSION[4]
W1FLUX = WISE_FLUX[0] / WISE_MW_TRANSMISSION[0] 
WFLUX = 0.75 * WISE_FLUX[0] / WISE_MW_TRANSMISSION[0] \
      + 0.25 * WISE_FLUX[1] / WISE_MW_TRANSMISSION[1] 

LRG =  BRICK_PRIMARY != 0
""" LRG Cut """

LRG &= RFLUX > 10**((22.5-23.0)/2.5)
LRG &= ZFLUX > 10**((22.5-20.56)/2.5)
LRG &= W1FLUX > 10**((22.5-19.35)/2.5)
LRG &= ZFLUX > RFLUX * 10**(1.6/2.5)
LRG &= W1FLUX * RFLUX ** (1.33-1) > ZFLUX**1.33 * 10**(-0.33/2.5)

ELG =  BRICK_PRIMARY != 0
""" ELG Cut """

ELG &= RFLUX > 10**((22.5-23.4)/2.5)
ELG &= ZFLUX > 10**(0.3/2.5) * RFLUX
ELG &= ZFLUX < 10**(1.5/2.5) * RFLUX
ELG &= RFLUX**2 < GFLUX * ZFLUX * 10**(-0.2/2.5)
ELG &= ZFLUX < GFLUX * 10**(1.2/2.5) 
ELG &= Max(SHAPEDEV_R, SHAPEEXP_R) < 1.5

QSO =  BRICK_PRIMARY != 0
""" QSO Cut """

QSO &= TYPE == 'PSF '
QSO &= RFLUX > 10**((22.5-23.0)/2.5)
QSO &= RFLUX < 10**(1.0/2.5) * GFLUX
QSO &= ZFLUX > 10**(-0.3/2.5) * RFLUX
QSO &= ZFLUX < 10**(1.1/2.5) * RFLUX
QSO &= WFLUX * GFLUX**1.2 > 10**(-0.4/2.5) * RFLUX**(1+1.2)

BGS =  BRICK_PRIMARY != 0
""" BGS Cut """

BGS &= TYPE != 'PSF'
BGS &=  RFLUX > 10**((22.5-19.35)/2.5)

__all__ = ['LRG', 'ELG', 'QSO', 'BGS']
