# How do I build DODS?

* Required or recommended tools
* Setup environment variables (more details below)
* cd $DODS_ROOT
* make sure bin/, lib/, and include/ directories exist. Currently, make does not create them if needed.
* ./configure |& tee $LOG_DIR/log.sun.1.configure (note on log files below)
* $MAKE World |& tee $LOG_DIR/log.sun.2.make.World (more details below)
* Check the "Special Directions" section below for items applicable to your build.
* For developers making a binary or source distribution:
  * $MAKE update-version (not yet available from $DODS_ROOT must do this in each component directory)
  * For binary distribution: $MAKE binary-tar
  * For source distribution: $MAKE distclean, $MAKE source
* See the "Testing DODS" section below for directions on how to test your DODS software.
* If any components did not build properly, read the log files and attempt to build each component individually. I.e., cd to the component directory and follow the steps shown below in the DAP build.

## What does DODS run on?

* Sun Sparc Solaris:
[DODS 3.4 build for Solaris 2.6](https://www.opendap.org/pub/dods/DODS-3.4/binary/sparc-sun-solaris2.6/)
* Intel PC Linux
    * [DODS 3.4 build for RedHat 7.3 (linux kernel 2.4.20-24.7smp #1 SMP)](https://www.opendap.org/pub/dods/DODS-3.4/binary/i686-pc-linuxRH7.3/)
    * [DODS 3.4 build for RedHat 8.0](https://www.opendap.org/pub/dods/DODS-3.4/binary/i686-pc-linuxRH8.0/)
    * [DODS 3.4 build for RedHat 9.0](https://www.opendap.org/pub/dods/DODS-3.4/binary/i686-pc-linuxRH9.0/)
* Dec Alpha OSF: [DODS 3.4 build for OSF 4.0f](https://www.opendap.org/pub/dods/DODS-3.4/binary/alphaev5-dec-osf4.0f/)
* SGI Mips IRIX: [DODS 3.4 build for IRIX 6.5 (n32/mips3)](https://www.opendap.org/pub/dods/DODS-3.4/binary/mips-sgi-irix6.5n32-mips3/)
* Win32: [DODS 3.2 build for Win32 (NT, 2000, XP) [info]](https://www.opendap.org/pub/dods/DODS-3.4/win32/)

## Required and recommended tools/packages

* GNU gcc/g++ (recommended): has not been tested with other compilers. May work but will probably need some tweaking of make files.
* GNU Make (recommended): the make you use must support the "-C" flag and should set $(MAKE).
* GNU tar (recommended)
* bison & flex (recommended if you will be rebuilding the grammar stuff, you probably don't want to do this)
* DejaGNU (recommended for developers, currently used for testing software)

## Setup Your Environment

Be sure to set all the necessary environment variables for your build environment. Below is a list of the most commonly required environment variables in the DODS build.

* Required: DODS_ROOT (e.g., /usr/local/DODS)
* Set those appropriate to the DODS components you are building:
* HDF_PATH, MATLAB_ROOT, IDL_ROOT, DSP_ROOT
* Set according to your build environment:
* CPPFLAGS, CC, CFLAGS, CXX, CXXFLAGS, FC, FFLAGS, LDFLAGS, LIBS
* (More than likely you won't need to set any of these. Set CC and CXX if you don't want to use gcc/g++ or they aren't found on your path.)
* Set if not found (or wrong version is found) on your path:
* MAKE, PERL, TAR, LEX, YACC

Notes:

* At this time, GNU make is recommended.
* If you are going to be using the netCDF Fortran interface, be sure to set the FC, FFLAGS, and CPPFLAGS appropriately. See the related question in our FAQ.

## Note on log files

Saving log files from runs of make and configure is optional (but often useful). The notation used here '|&' works in csh and tcsh to pipe stdout and stderr. For sh and ksh, use '|' to pipe stdout. 'tee' writes back to stdout and to the file listed.

Name log files as desired. The names shown here are my own overly complicated naming scheme that hopefully no one else will ever need.

## Details of a World Build

* Build the Third-Party packages
  * cd $DODS_ROOT/packages*
  * ./configure |& tee $LOG_DIR/log.sun.3.packages.configure
  * $MAKE World |& tee $LOG_DIR/log.sun.4.packages.make.World
* Build the DAP
  * cd $DODS_ROOT/src/dap*
  * ./configure |& tee $LOG_DIR/log.sun.5.dap.configure
  * $MAKE depend |& tee $LOG_DIR/log.sun.6.dap.make.depend
  * $MAKE all |& tee $LOG_DIR/log.sun.7.dap.make.all
  * $MAKE check |& tee $LOG_DIR/log.sun.8.dap.make.check (optional testing of the software)
  * $MAKE install |& tee $LOG_DIR/log.sun.9.dap.make.install
  * $MAKE clean |& tee $LOG_DIR/log.sun.10.dap.make.clean (optional: removes .o and executable files from src directories. Probably shouldn't do this till after completing the entire build)
  * $MAKE binary-tar |& tee $LOG_DIR/log.sun.11.dap.make.binary-tar (optional: only needed to make distribution)
* Build tools Using same steps as in DAP. Directories containing tools are in $DODS_ROOT/src/tools. They are: asciival* and www_interface*
* Build servers using same steps as in DAP. Directories containing servers are in $DODS_ROOT/src. They are: dsp-dods*, ff-dods*, hdf-dods*, jg-dods*, math-dods*, nc3-dods*
* Build clients using same steps as in DAP. Directories containing clients are in $DODS_ROOT/src/clients. They are: idl-cmdln*, ml-cmdln*, and ml-gui*
* Check the Special Directions section below for items applicable to your build.

## Special Directions

On Redhat Linux, loaddods.mexlx must be statically linked or it will crash immediately. The MEX compiler (cmex/mex) doesn't have a way (that I've found) to link statically. Here is how I accomplished it on Redhat 6.1 (it is different on Redhat 5.2 and I don't have the details):

* Copy /usr/lib/libc.so into another directory (e.g., /usr/local/dods/rhLib/)
* Edit the new copy of libc.so to remove the reference to libc.so.x. I.e.,

    Original version:


        /* GNU ld script Use the shared library, but some functions are only in the static library, so try that secondarily. */ 
        GROUP ( /lib/libc.so.6 /usr/lib/libc_nonshared.a )

    New version:

        /* GNU ld script Use the shared library, but some functions are only in the static library, so try that secondarily. */
        GROUP ( /usr/lib/libc_nonshared.a )

* unsetenv LD_LIBRARY_PATH
* add '-L /usr/local/dods/rhLib' to the cmex command
* During the SGI build of the Matlab command line client, if you are building for an architecture that does not match the architecture of the Matlab libraries (o32/mips2 or 64/mips4), the linking of loaddods.mex* will fail. For details on building a working version of ml-cmdln, see the "Matlab on SGI" FAQ.

## Testing DODS

At this time, tests for many of the DODS components are specific to our build environment and may not succeed on your local machine without some setup. This mainly concerns the server software where the tests access the software through a web server. The tests for the DAP should work and are a good start if you want to make sure your build is succeeding.

From the $DODS_ROOT directory, run '$MAKE check' to test all the available components of DODS. Or you can run '$MAKE check' from any of the component directories. Several components have different kinds of tests. These are listed below:

* Testing of the Matlab command line client is done in two steps. The first, by running '$MAKE check', tests 'writeval'. The second tests loaddods/writeval through Matlab. To run this test, start Matlab with a log file (if desired), e.g., 'matlab | & tee log'. And then run the following Matlab commands:

* addpath testsuite/matlab
* matlab_tests
* dload
* exit

And here's a few more you can try:

* loaddods('-V')
* loaddods('http://maewest.gso.uri.edu/cgi-bin/nph-dsp/dods/sst_clima_reynolds/reynolds_01.avg')
* das = loaddods('-A', 'http://maewest.gso.uri.edu/cgi-bin/nph-dsp/dods/sst_clima_reynolds/reynolds_01.avg')

The Matlab GUI does not currently have any prepackaged tests.

## When Building Static

Sun Some system libraries can't be linked statically.

* Run with '-Xlinker -Bstatic' instead of '-static' and '-Xlinker -Bdynamic -ldl' at the end g++ -v -g -Xlinker -Bstatic -L/upc/dods/build/DODS/packages-2.17/lib -L. -L../../lib -o geturl geturl.o TestByte.o TestInt32.o TestFloat64.o TestStr.o TestUrl.o TestArray.o TestStructure.o TestList.o TestSequence.o TestFunction.o TestGrid.o TestUInt32.o -ldap++ -lwww -lsocket -lnsl -lz -lrx -ltcl7.6 -Xlinker -Bdynamic -ldl
* SGI Doesn't seem to like static linking. Could it be similar to Sun? g++ hdf_dods.o funcs.o -o hdf_dods -g -L/upc/dods/hdf4.1r2/mips-sgi-irix6.2/lib -L/upc/dods/cvsRel3.0.2/mips-sgi-irix6.5/DODS/packages-2.17/lib -L. -L../../lib -Lhdfclass -lhdf-dods -ldap++ -lhdfclass -lwww -lmfhdf -ldf -ljpeg -lz -lz -lrx -lexpect5.21 -ltcl7.6

##TAGS##
build,dods,matlab,gui