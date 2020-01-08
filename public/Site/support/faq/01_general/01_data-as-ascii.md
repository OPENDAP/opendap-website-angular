# Getting Data as ASCII (or NetCDF)

## Method 1

For a given URL, such as `http://test.opendap.org/dap/data/nc/coads_climatology.nc`,
and a given variable in that data set, such as `SST`, you would ask for a those data
to be returned as ASCII using the following:

    http://test.opendap.org/dap/data/nc/coads_climatology.nc.ascii?SST

Note that you can take the base URL (`http://test.opendap.org/dap/data/nc/coads_climatology.nc`),
append `.html` to it, and get a web page that provides a way to
(1) see the names of the variables in a data file,
(2) build up more complex constraints interactively, and 
(3) get those data in several different formats, including ASCII and NetCDF
from any recent DAP server such as Hyrax.

## Method 2

Another way to get data as a NetCDF file is to use a client
that can access OPeNDAP data and knows how to output netCDF files.

A simple example is the NCO (NetCDF Operators) package like this:

    ncks http://test.opendap.org/dap/data/nc/coads_climatology.nc?SST out.nc
    
The NCO package supplies various command line tools for manipulating netCDF
files and can be made OPeNDAP aware. 
See "Available OPeNDAP Clients" for more information on NCO.

## Notes

* NCO tools can also be used to dump data in ASCII (like the OPeNDAP '.asc' extension) or IEEE binary format.
* In this example, the client expects to be passed a DAP URL,
so the response format component is not used (i.e., "coads_climatology.nc"
is used with a DAP-aware client like NCO, while "coads_climatology.nc.ascii"
is used with a browser that does not contain special code to process the DAP URL).

##TAGS##
ascii,netcdf,nco,getting,data,output,ncks