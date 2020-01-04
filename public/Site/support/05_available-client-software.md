# Available OPeNDAP Client Software

## OPeNDAP Clients

### [NCL - Scientific data analysis and visualization software](http://www.ncl.ucar.edu/)

NCL is a scientific data analysis and visualization software package freely available from
[NCAR](http://www.ncar.ucar.edu/).

### [CDAT (Climate Data Analysis Tools)](http://cdat.sf.net/)

CDAT (developed at
[PCMDI](http://www-pcmdi.llnl.gov/))
is a software infrastructure that forms an integrated environment for solving model diagnosis problems. CDAT uses Python to seamlessly link together separate software subsystems and packages. CDAT version 3.3 is not distributed as a OPeNDAP client but can be re-linked to the OPeNDAP client libraries. CDAT version 4.0 will be distributed with that step integrated in the CDAT build.

### OPeNDAP geturl

geturl is a simple command-line client for testing datasets. It is available as part of both the C++ and Java implementations.

For the C++ implementation of geturl, go to the 
[DAP++ SDK page](https://www.opendap.org/software/libdap),
the client is included with the library.

### Matlab 2012a

Matlab is one of the most compete data analysis tools available. Version 7.15 (aka Matlab 2012a), released on March 1, 2012 contains built-in support for access to OPeNDAP servers. To use this, you use the netCDF API to open remote datasets, inquire about their metadata as well as read and subsample/subset data. See
[Matlab 2012a Includes Support for OPeNDAPView](https://www.opendap.org/about/news/matlab-2012a-support)
for more information.

### OPeNDAP Matlab Toolkit (GUI)

The OPeNDAP netCDF client library is a DAP-enabled version of the netCDF API library.
[netCDF](http://www.unidata.ucar.edu/packages/netcdf/)
is an interface for array-oriented data access and a library that provides an implementation of the interface developed and maintained by
[UCAR/Unidata](http://www.unidata.ucar.edu/).

### [Ferret](http://ferret.pmel.noaa.gov/Ferret/)

Ferret is a data analysis and visualization package available from NOAA/PMEL that can access data.

### [GrADS](http://www.iges.org/grads/)

GrADS is a data analysis and visualization package for earth system data. It is available from
[COLA](http://www.iges.org/cola.html).

### [IDV (Integrated Data Viewer)](http://my.unidata.ucar.edu/content/software/metapps/)

IDV is a Java application for visualizing and analyzing geoscience data. The IDV was developed at UCAR/Unidata and uses the
[VisAD library](http://www.ssec.wisc.edu/~billh/visad.html)
for data and display models as well as other Java utility packages.

### [LAS (Live Access Server)](http://ferret.pmel.noaa.gov/Ferret/LAS/)

LAS is a highly configurable Web server designed to provide flexible access to geo-referenced scientific data. LAS, by default, uses Ferret (see above) to produce plots of datasets which means the LAS can be configured to display data from OPeNDAP servers.

### [ncBrowse](http://www.epic.noaa.gov/java/ncBrowse/)

ncBrowse is a Java application that provides flexible, interactive graphical displays of data and attributes from a wide range of netCDF data file conventions. Version 1.3.3Beta5 and later can access OPeNDAP servers.

### [NCO (netCDF Operators)](http://nco.sourceforge.net/)

NCO is a set of command line tools that perform operations (e.g. average or concatenate) on netCDF or HDF files.

### [ncview](http://meteora.ucsd.edu/~pierce/ncview_home_page.html)

ncview is a visual browser for gridded data that is available from the ncview home page. We provide a version that can access data from OPeNDAP servers as well as local netCDF files.

To Download: Go to the NetCDF clients page.

### [DChart](http://www.epic.noaa.gov/epic/software/dchart/)

The Dapper Data Viewer (aka DChart) allows you to visualize and download in-situ oceanographic or atmospheric data from a Dapper OpenDap server. Features include an interactive map that is draggable, an in-situ station layer that allows you to select data stations, and a plot window that allows you to plot data from one or more stations. Three plot types are supported (profile, property-property, and time series) and users can interact directly with the plot to pan or zoom in and out

## Client Libraries

### [OPeNDAP DAP library](https://www.opendap.org/software/libdap)

The OPeNDAP C++ DAP library (libdap++.a) can be used to develop OPeNDAP client applications. For more information, see the
[Programmers Guide](http://old.opendap.org/api/pguide-html)
and the
[Programmers Reference](https://opendap.github.io/libdap4/html).

### OPeNDAP Java API

The OPeNDAP Java DAP API can be used to develop OPeNDAP client applications. For more information, see the
[JavaDocs](https://www.opendap.org/api/javaDocs/).

### [netCDF Java library](www.unidata.ucar.edu/packages/netcdf-java/)

The
[Java implementation of netCDF](http://www.unidata.ucar.edu/packages/netcdf-java/)
comes with support for OPeNDAP servers enabled. Therefore, any application that uses this library can access data via the servers.

### [pydods](http://pydap.org/)

pydods is a simple Python library for interfacing with OPeNDAP servers. pydods was developed by Roberto A. F. De Almeida (Universidade de São Paulo).

## Other applications that can access DAP-compliant servers

### Generic Web Browser

Because OPeNDAP servers are accessed through URLs, any application that can dereference a URL can access those servers. Thus, any generic web browser (e.g., Internet Explorer, Mozzilla, or Netscape) can access those data in a restricted manner. Since generic web browsers do not understand the OPeNDAP protocol, the user will need some understanding of the protocol. A brief explanation of how to access OPeNDAP data in a web browser is available at our FAQ 
'[Using a Web Browser with OPeNDAP servers](https://www.opendap.org/support/faq/general/using-web-browser)'.

### Spreadsheet Applications

Because OPeNDAP servers are accessed through URLs, any application that can dereference a URL can access those data. Since most spreadsheet applications (e.g., MS Excel and StarOffice) can open URLs, they can access those data in a restricted manner. However, since spreadsheet applications do not understand the OPeNDAP protocol, the user will need some understanding of the protocol. A brief explaination of how to access OPeNDAP data from a spreadsheet is available at our FAQ
[Using a Spreadsheet Application with OPeNDAP servers](https://www.opendap.org/support/faq/general/use-spreadsheet).
