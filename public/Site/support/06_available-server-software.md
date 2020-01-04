# Available DAP Servers

## Currently Available DAP Servers

### OPeNDAP Hyrax

Hyrax is OPeNDAP's DAP2 data server. It's design is tailored for large organizations that need to separate hosts that provide web access from those where data are stored. However, hyrax is still easy to install on singel host configurations. Hyrax supports a number of data storage formats using plugins; it's easy to write your own plugin if needed. In addition, Hyrax provides a number of dat transformation options that are not, formally, part of DAP2. These include, an HTML form interface for data access, ASCII CSV and XML data responses, an RDF encoding for metadata, ISO 19115 for metadata as well as a 'rubric' that displays conformance to ISO19115. You can
[download hyrax](https://www.opendap.org/software/hyrax-data-server)
from this web site. Send questions to support@opendap.org.

### OPeNDAP Test Server

The test server serves pseudo-data (i.e., made up by the server but consistent) for any DDS/DAS. Very useful when you want to test client software on a data structure for which you don't have an example.

### [ERDDAP](http://coastwatch.pfeg.noaa.gov/erddap/index.html)

ERDDAP (the NOAA Environmental Research Division's Data Access Program) is an OPeNDAP server that lets you download subsets of scientific datasets via DAP (or in common file formats) and make graphs and maps. It supports gridded data (via DAP hyperslab queries) and tabular data (via DAP constraint expression queries). To download go to the ERDDAP installation page.

### [THREDDS Data Server](http://www.unidata.ucar.edu/software/thredds/current/tds/)

The THREDDS Data Server is a Java servlet that can serve data in netcdf as well as some kinds of HDF4, HDF5 and BUFR files. It uses NCML and can be used to serve aggregations of files. It also can work as a WMS/WCS server. For more information see the
[THREDDS Data Server](http://www.unidata.ucar.edu/software/thredds/current/tds/)
page.

### [PyDAP](http://pydap.org/)

PyDAP is a server written entirely in Python. It can serve a variety of file formats and also supports WMS and KML responses.

### [COLA GrADS Data Server (GDS)](http://www.iges.org/grads/)

The GDS makes data available using GrADS. The types of data that can be served include GRIB, netCDF, HDF, and GrADS binary. For more information see the
[GDS web page](http://www.iges.org/grads/gds/).

### [NOAA/PMEL/EPIC Dapper Server](http://www.epic.noaa.gov/epic/software/dapper/)

Dapper makes in-situ data available via the DAP using
[EPIC tools](http://www.epic.noaa.gov/epic/).
See the
[dapper website](http://www.epic.noaa.gov/epic/software/dapper/)
for more information or to obtain dapper.

## OPeNDAP Server Development Toolkits

### [OPeNDAP C++ Server Development Framework](https://www.opendap.org/software/libdap)

The OPeNDAP C++ implementation contains a DAP API/library and CGI dispatch framework for developing OPeNDAP servers.

### [COLA Anagram (from GDS)](http://www.iges.org/anagram/)

Anagram is a modular Java framework for high-performance scientific data servers, which forms the basis for the GDS version 1.2.
