

"""
A collection of helpful (static) methods to check whether a given
position has imaging deep enough to be 100% complete to a certain
selection (e.g. LRG, ELG or QSO).
We should probably modify this later to easily allow querying of
brighter limits.
The methods assume they are passed N-sigma limits, corrected for
MW transmission.
Note: for a region to pass the N-sigma "noise" must be LESS THAN the
required depth.
The requirements on colors are tricky to implement here. We currently
require a 100% completeness.

"""
from imaginglss.utils.npyquery import Column as C

DECAM_FLUX_IVAR = C('DECAM_FLUX_IVAR').T
DECAM_MW_TRANSMISSION = C('DECAM_MW_TRANSMISSION').T

# 1-sigma limits
G_LIMIT = DECAM_FLUX_IVAR[1] ** -0.5 / DECAM_MW_TRANSMISSION[1]
Z_LIMIT = DECAM_FLUX_IVAR[4] ** -0.5 / DECAM_MW_TRANSMISSION[4]
R_LIMIT = DECAM_FLUX_IVAR[2] ** -0.5 / DECAM_MW_TRANSMISSION[2]

def LRG(sigma):
    """ Create the completeness cut for LRG.

        Parameters
        ----------
        sigma : dict 
            'r', 'z', 'g' members specifies the confidents in that
            band. ( :math:`n \\sigma`)

    """
    LRG  = sigma['r'] * R_LIMIT < 10**((22.5-23.00    )/2.5)
    LRG &= sigma['z'] * Z_LIMIT < 10**((22.5-20.56    )/2.5)
    LRG &= sigma['z'] * Z_LIMIT < 10**((22.5-23.00+1.6)/2.5)
    return LRG
LRG.bands = 'rz'

def ELG(sigma):
    """ Create the completeness cut for ELG.

        Parameters
        ----------
        sigma : dict 
            'r', 'z', 'g' members specifies the confidents in that
            band. ( :math:`n \\sigma`)

    """
    ELG =  sigma['g'] * G_LIMIT < 10**((22.5-23.4-1.5+0.2)/2.5)
    ELG &= sigma['r'] * R_LIMIT < 10**((22.5-23.4        )/2.5)
    ELG &= sigma['z'] * Z_LIMIT < 10**((22.5-23.4+0.3    )/2.5)
    return ELG
ELG.bands = 'grz'

def QSO(sigma):
    """ Create the completeness cut for QSO.

        Parameters
        ----------
        sigma : dict 
            'r', 'z', 'g' members specifies the confidents in that
            band. ( :math:`n \\sigma`)

    """
    QSO =  sigma['r'] * R_LIMIT < 10**((22.5-23.00    )/2.5)
    QSO &= sigma['g'] * G_LIMIT < 10**((22.5-23.00-1.0)/2.5)
    return QSO
QSO.bands = 'gr'

def BGS(sigma):
    """ Create the completeness cut for BGS.

        Parameters
        ----------
        sigma : dict 
            'r', 'z', 'g' members specifies the confidents in that
            band. ( :math:`n \\sigma`)

    """
    BGS = sigma['r'] * R_LIMIT < 10**((22.5-19.5)/2.5)
    return BGS
BGS.bands = 'r'