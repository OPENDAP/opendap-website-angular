# Data Handlers

This page lists all of the data handlers we provide, in any form, for
[Hyrax](https://www.opendap.org/software/hyrax-data-server).

There are three broad classifications of handlers listed here:

1. Handlers for which we provide full support: We ensure these work with the latest data server and we provide binary builds.
1. Handlers for which we provide source releases: We often test these against our current server, but not always. We don't, as a rule, provide binary builds for these handlers.
1. Handlers for which we do not release on a schedule: These are stored in our source code management system (which uses 'subversion') which is open for read-access to all and write-access by request.

If you've written, or are in the process of writing a handler, and you would like us to distribute it,
[let someone at OPeNDAP know](webmaster@opendap.org).

## Handlers With Full Support

* **HDF4**:
This handler reads data stored in HDF 4 and HDF-EOS files. To run this you will also need the HDF 4 libraries on your system.
* **HDF5**:
HDF5 is a widely used data format used both in and outside of the science community. Soon to be released.
* **NetCDF 3**:
This handler reads data stored in netCDF 3 files. It looks for COARDS-compliant files and, if found, promotes arrays to DAP Grid variables so that software that's not COARDS-compliant can make use of bound dimensions.
* **FreeForm**:
The handler is designed to work with any ASCII or binary data that can be described using FreeForm. The data must be strictly organized in columns, but otherwise there are very few limitations on the data format. FreeForm supports data files with headers.
* **NcML**:
This handler allows the use of a subset of NcML for manipulating existing datasets on the local server. Using this module, an author may add, modify, and/or remove existing metadata (attributes) and variables from an underlying dataset, or entirely specify a virtual dataset. The module also allows for the aggregation of multiple datasets into one larger virtual dataset --- currently, joinNew, union, and some joinExisting aggregations are supported.

## Handlers With Source-Only Support

* **DSP**:
DSP is a satellite image processing system from the University of Miami.
* **JGOFS**:
JGOFS is the data system for the JGOFS (Joint Global Ocean Flux Study) data system developed by Glenn Flierl. This handler can both read data files that the JGOFS data system can read and act as a gateway between a DAP server and a JGOFS server.

## Handlers in Our Source Code Control System

We don't have a page in the web site for most of these, so the link points to our source code control system.
You can browse the source using the link or use a
[Subversion](http://subversion.tigris.org/)
client to check the code out using the SVN link.

Some of these were written by folks outside of OPeNDAP and I've tried to give the authors credit. My apologies if I leave out anyone's name; if you do notice an omission, please let me know at jgallagher@opendap.org. Also, if you would like to add to the description, please send that information along and I'll include it.

* [CDF](http://scm.opendap.org/trac/browser/trunk/cdf_handler):
This handler was originally written by Charles Faulkenberg for a demo at the SISIC meeting. Subsequently Patrick West updated the code.
([svn](http://scm.opendap.org/svn/trunk/cdf_handler))
* [CEDAR](http://scm.opendap.org/trac/browser/trunk/cedar_handler)
Written by Jose Garcia and Patrick West.
([svn](http://scm.opendap.org/svn/trunk/cedar_handler))
* [FITS](http://scm.opendap.org/trac/browser/trunk/fits_handler)
Written by Jose Garcia and Patrick West.
([svn](http://scm.opendap.org/svn/trunk/fits_handler))
* [GDAL](http://scm.opendap.org/trac/browser/trunk/gdal_handler)
GDAL is a library which simplifies reading from geo-referenced data sources. The GDAL handler can read from any of file formats GDAL supports. The formats include geotiff and many other formats common in the GIS world. Written by Frank Warmerdam.
([svn](http://scm.opendap.org/svn/trunk/gdal_handler))
* [Matlab](http://scm.opendap.org/trac/browser/trunk/matlab_handler)
This handler was written for Matlab 4 files by Reza Nekovei.
([svn](http://scm.opendap.org/svn/trunk/matlab_handler))