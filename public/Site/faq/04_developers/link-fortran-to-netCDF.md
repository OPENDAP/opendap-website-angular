# How do I link my Fortran program to the netCDF Client Library?

There are several possible ways to link your Fortran program with the DODS netCDF library. The libraries you must specify in the linking step depend on how you compile and link your program.

If linking with g++, you must specify '-lg2c' to make sure you link with the GNU Fortran libraries. For example,
    g77 -g -c `ncdap-config --fflags` sample.f 
    g++ -g -o sample sample.o `ncdap-config --flibs`

If you link with g77, use '-lstdc++' to include the C++ library. If you link with gcc, use '-lstdc++ -lg2c', to link with both the C++ and Fortran libraries. (You can compile your program with gcc, g++, or g77.)

If you are not using the GNU Fortran compiler, you will more than likely have to build the DODS netCDF library yourself. Also, if you link with g++, you will need to specify the libraries specific to your Fortran compiler. On the other hand, if you link with your Fortran compiler, you will need to specify the GNU C++ library, i.e., '-lstdc++'. To build the DODS netCDF library yourself, please take a look at [How do I build the netCDF Fortran jackets?](/support/faq/build-netcdf-fortran-jackets)
and look for suggestions on building for your compiler (be sure to look in the non-DODS netCDF INSTALL file).

As you may have guessed, we stick with the GNU compilers when building our binary releases, generally from GCC 4.0.1 (as of 22 Jul 2009). Here are the environment variables we set:

* CC=gcc
* CXX=g++
* FC=gfortran
* FFLAGS=-g
* CPPFLAGS=-Df2cFortran

I believe our standard binary release should work for you if you are using g77, f2c, or fort77 (which uses f2c). This may work for other compilers as well. Please let us know if you successfully link to our binary releases with other compilers.