from imaginglss import DECALS
from imaginglss.model.imagerepo import ImageRepo
from pprint import pprint
import numpy
import sys
dr = DECALS(sys.argv[1]).datarelease

brick = dr.footprint.bricks[0]
print brick
print 41253. / len(dr.brickindex)
print dr.footprint
print dr.images['depth']['z'].metadata(brick)
print '\n'.join(sorted([str(f) for f in dr.catalogue.dtype.fields]))

def test398599():
    """ test image readout on brick-398599. 
    """
    brick = dr.footprint.bricks[1]
    dr.images['depth']['z'].preload([brick])

    print 'Testing on', brick
    img2 = dr.images['depth']['z'].open(brick)
#    print img2
#    assert (img2[300:-300, 300:-300] != 0).any()

    print dr.images['depth']['z'].get_filename(brick)
    y, x = numpy.indices(img2.shape)
    x = numpy.ravel(x) + 0.5
    y = numpy.ravel(y) + 0.5
    coord = brick.revert(dr.images['depth']['z'], (x, y))

    x2, y2 = brick.query(dr.images['depth']['z'], coord)
    print x, x2
    print y, y2
    assert numpy.allclose(x, x2)
    assert numpy.allclose(y, y2)


    img3 = brick.readout(coord, dr.images['depth']['z'])
    diff = img3.reshape(img2.shape) - img2
    assert (diff[300:-300, 300:-300] == 0).all()


    img = dr.readout(coord, dr.images['depth']['z'])
    print 'brick readout passed'
    print 'found', (~numpy.isnan(img)).sum()
    diff = img.reshape(img2.shape) - img2
    assert (diff[300:-300, 300:-300] == 0).all()
    print 'dr readout passed'


def testrandom():
    #ebv = dr.images['ebv']
    print dr.footprint.range
    u1, u2 = numpy.random.random(size=(2, 4))
    RA = (dr.footprint.range.ramax - dr.footprint.range.ramin) * u1 + dr.footprint.range.ramin
    a = 0.5 * ((numpy.cos(dr.footprint.range.decmax / 180. * numpy.pi)  + 1))
    b = 0.5 * ((numpy.cos(dr.footprint.range.decmin / 180. * numpy.pi)  + 1))
    u2 = (a - b) * u2 + b
    
    DEC = numpy.arccos(2.0 * u2 - 1) * (180. / numpy.pi)

#    print 'prefetched'
    coord = (RA, DEC)
    print coord
    depth = dr.readout(coord, dr.images['depth']['z'])
    #ebv = dr.readout(coord, ebv)
    print depth#, ebv

def testebv():
    RA = dr.catalogue['RA'][:]
    DEC = dr.catalogue['DEC'][:]
    EBV = -2.5 * numpy.log10(dr.catalogue['DECAM_MW_TRANSMISSION'][:, 2]) / dr.extinction[2]
    ebv = dr.images['ebv']
    coord = (RA, DEC)
    ebv = dr.readout(coord, ebv)
    good = ~numpy.isnan(ebv)
    print 'matched', good.sum(), 'out of', len(RA)
    ebv = ebv[good]
    EBV = EBV[good]
    print (ebv-EBV).min()
    assert numpy.allclose(ebv, EBV, 1e-2)

def testcat():
    print dr.catalogue.size
    """
    from imaginglss.model.catalogue import C

    query =  C('DECAM_FLUX')[:, 2] / C('DECAM_MW_TRANSMISSION')[:, 2] > 10 **(22.5 - 23.00) / 2.5
    query &=  C('DECAM_FLUX')[:, 1] / C('DECAM_MW_TRANSMISSION')[:, 1] > 10 **(22.5 - 20.56) / 2.5
    query &=  C('DECAM_FLUX')[:, 4] / C('DECAM_MW_TRANSMISSION')[:, 4] > \
            10 **(1.6) / 2.5 * C('DECAM_FLUX')[:, 2] / C('DECAM_MW_TRANSMISSION')[:, 2]
    query &= C('BRICK_PRIMARY') != 0
    """
    from imaginglss.analysis import cuts
    query = cuts.ObjectTypes.QSO
    with dr.catalogue:
        print query
        print query.visit(dr.catalogue)
        for expr in query:
            print expr.visit(dr.catalogue)
        assert len(dr.catalogue['RA'][:]) == dr.catalogue.size
        assert len(dr.catalogue['RA'][0:dr.catalogue.size]) == dr.catalogue.size

testcat()
test398599()
#testebv()
testrandom()
