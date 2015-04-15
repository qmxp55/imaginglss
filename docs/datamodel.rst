Data Model
==========

The DECALS imaging data are processed in "Brick"s on the sky,
each Brick being a small, contiguous regions of sky (roughly
0.5x0.5 degrees).  The data, including information on depths,
extinction, etc. are stored in pixelized images within the
FITS files.  There are also catalogs of objects, produced by
Tractor, which are associated with each brick.

The main way to access the DECALS imaging data is via DataRelease
objects defined in :py:class:`model.datarelease.DataRelease`.
Important attributes are

 - :py:attr:`~model.datarelease.DataRelease.footprint` : the survey footprint. 
 - :py:attr:`~model.datarelease.DataRelease.brickindex`: the Brick geometry (BrickIndex)
 - :py:attr:`~model.datarelease.DataRelease.images`    : the images released in the DR
 - :py:attr:`~model.datarelease.DataRelease.catalogue` : the imaging catalogue reported by tractor

The member methods are

 - :py:meth:`~model.datarelease.DataRelease.readout`   : reading out pixel value of an image 
   for coordinates on the sky.

Catalog information is handled by :py:class:`model.datarelease.catalog.Catalogue`, which stores the
object catalogs associated with a data release.
The catalogs are contained in many small FITS files, 
but this class caches the
information for speed and only columns that are accessed are loaded
into memory. Use 'forget_cache.py' to clear this cache.

The images are represented by :py:class:`model.imagerepo.ImageRepo` objects. 
An ImageRepo object takes care of reading the image tile of a Brick. 
An image tile contains a padded region around the Brick, 
which is sometimes mentioned as a margin, a padding, or a bleeding region.

A DataRelease has several image repositories, for example,

 - DataRelease.images['depth']['u'] : the 'u' band inverse variance depth images
 - DataRelease.images['image']['u'] : the coadded 'u' band image in nanomaggies
 - DataRelease.images['model']['u'] : the model 'u' band image in nanomaggies; 

:py:class:`model.brick.Brick` holds metadata for each Brick, including the central 
:py:attr:`~model.brick.Brick.ra`, :py:attr:`~model.brick.Brick.dec`, 
and the primary area(
:py:attr:`~model.brick.Brick.ra1`, :py:attr:`~model.brick.Brick.dec1`, 
:py:attr:`~model.brick.Brick.ra2`, :py:attr:`~model.brick.Brick.dec2`
) covered by the brick, excluding the padding region. 
There are routines for converting from sky coordinates to image
pixels within each brick, and routines for querying the images
handled by imagerepo. 

:py:class:`model.brickindex.BrickIndex` holds the metadata
of of the brick decomposition scheme. 
There are routines for converting from
sky coordinates to bricks, and acts as a factory that creates 
:py:class:`~model.brick.Brick` objects.

For additional information please refer to :doc:`modules`.