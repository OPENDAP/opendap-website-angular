# How do I build the netCDF Fortran jackets?

The main problem here is that, even though no Fortran is compiled while building the netCDF library, you must specify a working Fortran compiler to get the Fortran jackets. More to the point, you must specify the compiler that you will be using on your Fortran code. Since every Fortran compiler is different, the C code (the netCDF Fortran jackets) needs to be configured properly to allow communication with the Fortran code (your application).

So, this means that your netCDF library has to have been built with the same Fortran compiler you use to build your Fortran code. The DODS provided binary releases are built with the GNU compilers (gcc, g++, and g77), generally from GCC 2.95.2 (as of 11 Oct 2000). So if you are using a different Fortran compiler, you will need to build the DODS netCDF client library yourself.

As with the non-DODS netCDF package, you should "[s]et the environment variables CPPFLAGS, CC, CFLAGS, FC, FFLAGS, CXX, and CXXFLAGS (and perhaps LIBS) to represent [your] environment." The documentation (i.e., the INSTALL file) for the non-DODS netCDF package gives environment setups successfully used for a variety of platform/compiler combinations.

Below are the settings we have used with the DODS netCDF client library. If you need to build it for a different compiler, take a look at the INSTALL file mentioned above. If you have success with other Fortran compilers, please let us know so we can list it here.

* GNU Fortran
    * CC=gcc
    * CXX=g++
    * FC=gfortran
    * FFLAGS=-g
    * CPPFLAGS=-Df2cFortran
    Also good when using f2c (or fort77 on Linux).
* NAG f90
    * CC=gcc
    * CXX=g++
    * FC=f90
    * FFLAGS=-g
    * CPPFLAGS=-DNAGf90Fortran

Now for linking your Fortran code to these libraries, see our FAQ "How do I link my Fortran program to the DODS netCDF library?"