# How do I link my application to the netCDF Client Library?

If your application accesses netCDF data through the standard netCDF library, it should be fairly straight forward to relink it with the OPeNDAP enabled netCDF library. First off, you will need some OPeNDAP libraries: the third-party-packages libraries; the OPeNDAP core (DAP) libraries; and the OPeNDAP netCDF library (see the Note below for some comments on library and compiler compatibilities). Second, you need to link your application with these libraries. This should involve adding several library flags to your normal compiling/linking commands. In particular:

* Instead of '-I/usr/local/netcdf/include' use the results of ncdap-config --cflags
* Instead of '-L/usr/local/netcdf/lib' and '-lnetcdf' use the results of ncdap-config --libs

For instance,

* OPeNDAP libnc-dap 3.7.4 release

    g++ -c -o sample.o `ncdap-config --cflags` sample.c
    g++ -g -o sample sample.o `ncdap-config --libs`

Note: We have found that using our pre-built binary versions of the libraries for relinking with your application can be problematic. The reason is that the compiler used to compile your application must match the compiler used to build the OPeNDAP libraries (often the version of compiler is important, too). For this reason, we generally suggest that you build the OPeNDAP libraries from source using the compiler you use to build your application.

We are using the GNU compilers (GCC 4.0.1 as of 22 Jul 2009). So, if you are using the same compiler and would like to try linking with our pre-built binaries, please let us know if you successfully link to our binary releases.
