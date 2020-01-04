# Data Handlers

This page lists all of the data handlers we provide, in any form, for
[Hyrax](https://www.opendap.org/software/hyrax-data-server).

If you've written, or are in the process of writing a handler, and you would like us to distribute it,
[let someone at OPeNDAP know](webmaster@opendap.org).

## Handlers With Full Support

We ensure that these handlers work with the latest data server,
and we provide binary builds.

<table>
    <tr>
        <td>HDF4</td>
        <td>This handler reads data stored in HDF 4 and HDF-EOS files. To run this you will also need the HDF 4 libraries on your system.</td>
    </tr>
    <tr>
        <td>HDF5</td>
        <td>HDF5 is a widely used data format used both in and outside of the science community. Soon to be released.</td>
    </tr>
    <tr>
        <td>NetCDF 3</td>
        <td>This handler reads data stored in netCDF 3 files. It looks for COARDS-compliant files and, if found, promotes arrays to DAP Grid variables so that software that's not COARDS-compliant can make use of bound dimensions.</td>
    </tr>
    <tr>
        <td>FreeForm</td>
        <td>The handler is designed to work with any ASCII or binary data that can be described using FreeForm. The data must be strictly organized in columns, but otherwise there are very few limitations on the data format. FreeForm supports data files with headers.</td>
    </tr>
    <tr>
        <td>NcML</td>
        <td>This handler allows the use of a subset of NcML for manipulating existing datasets on the local server. Using this module, an author may add, modify, and/or remove existing metadata (attributes) and variables from an underlying dataset, or entirely specify a virtual dataset. The module also allows for the aggregation of multiple datasets into one larger virtual dataset --- currently, joinNew, union, and some joinExisting aggregations are supported.</td>
    </tr>
</table>

## Handlers With Source-Only Support

We often test these against our current server, but not always.
We don't, as a rule, provide binary builds for these handlers.

<table>
    <tr>
        <td>DSP</td>
        <td>DSP is a satellite image processing system from the University of Miami.</td>
    </tr>
    <tr>
        <td>JGOFS</td>
        <td>JGOFS is the data system for the JGOFS (Joint Global Ocean Flux Study) data system developed by Glenn Flierl. This handler can both read data files that the JGOFS data system can read and act as a gateway between a DAP server and a JGOFS server.</td>
    </tr>
</table>

## Handlers in Our Source Code Control System

These handlers are stored in our source code management system (which uses 'subversion')
which is open for read-access to all and write-access by request.

<table>
    <tr>
        <td><a href="http://scm.opendap.org/trac/browser/trunk/cdf_handler">CDF</a></td>
        <td>This handler was originally written by Charles Faulkenberg for a demo at the SISIC meeting. Subsequently Patrick West updated the code. (<a href="http://scm.opendap.org/svn/trunk/cdf_handler">svn</a>)</td>
    </tr>
    <tr>
        <td><a href="http://scm.opendap.org/trac/browser/trunk/cedar_handler">CEDAR</a></td>
        <td>Written by Jose Garcia and Patrick West. (<a href="http://scm.opendap.org/svn/trunk/cedar_handler">svn</a>)</td>
    </tr>
    <tr>
        <td><a href="http://scm.opendap.org/trac/browser/trunk/fits_handler">FITS</a></td>
        <td>Written by Jose Garcia and Patrick West. (<a href="http://scm.opendap.org/svn/trunk/fits_handler">svn</a>)</td>
    </tr>
    <tr>
        <td><a href="http://scm.opendap.org/trac/browser/trunk/gdal_handler">GDAL</a></td>
        <td>GDAL is a library which simplifies reading from geo-referenced data sources. The GDAL handler can read from any of file formats GDAL supports. The formats include geotiff and many other formats common in the GIS world. Written by Frank Warmerdam. (<a href="http://scm.opendap.org/svn/trunk/gdal_handler">svn</a>)</td>
    </tr>
    <tr>
        <td><a href="http://scm.opendap.org/trac/browser/trunk/matlab_handler">Matlab</a></td>
        <td>This handler was written for Matlab 4 files by Reza Nekovei. (<a href="http://scm.opendap.org/svn/trunk/matlab_handler">svn</a>)</td>
    </tr>
</table>

We don't have a page in the web site for most of these, 
so the link points to our source code control system.
You can browse the source using the link or use a
[Subversion](http://subversion.tigris.org/)
client to check the code out using the SVN link.

Some of these were written by developers outside of OPeNDAP,
and we've done our best to give the authors credit.
If you notice an omission, drop a line to OPeNDAP's president,
jgallagher@opendap.org. Also, if you have a more accurate description,
include it in your email, and we'll update this page.
