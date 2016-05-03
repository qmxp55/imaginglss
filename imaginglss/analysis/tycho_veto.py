"""
    veto objects based on Tycho catalogue. This
    is based on the email discussion at:

    Date: June 18, 2015 at 3:44:09 PM PDT
    To: decam-data@desi.lbl.gov
    Subject: decam-data Digest, Vol 12, Issue 29

    Current usage is to first create a Tycho catalogue
    object, then use DECAM_XXX functions to create a
    mask :

    >>> tycho = Tycho("pathto_tycho.fit")
    >>>

    The return values are True for 'preserve',
    False for 'reject'
"""

def BOSS_DR9(tycho):
    bmag = tycho['BMAG']
    # BOSS DR9-11
    b = bmag.clip(6, 11.5)
    R = (0.0802 * b ** 2 - 1.86 * b + 11.625) / 60. # 
    return R

def DECAM_LRG(tycho):
    vtmag = tycho['VTMAG']
    R = 10 ** (3.5 - 0.15 * vtmag) / 3600. 
    return R

DECAM_ELG = DECAM_LRG

def DECAM_QSO(tycho):
    vtmag = tycho['VTMAG']
    # I recommend not applying a bright star mask 
    return vtmag - vtmag

def DECAM_BGS(tycho):
    vtmag = tycho['VTMAG']
    R = 10 ** (2.2 - 0.15 * vtmag) / 3600. 
    return R