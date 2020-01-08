# Building the HDF4 Library so It Will link With the Hyrax HDF4 Handler

To build hdf4 so that it will link with our handler,
 you have to do several things just a little differently than a normal build.

1. Build the jpeg library specially.
1. Build the HDF4 library specially.
1. Optionally, build hdf-eos2.

Here's how:

Assumption: `$prefix` is the root of a shrew source checkout.
If you're not using the shrew SVN project, then you should read the *Long Version*.

## Short Version

* For jpeg-6b:

        ./configure CFLAGS="-O2 -fPIC" --prefix=$prefix/deps/jpeg-6b; make; make install

* For HDF4:

        ./configure --disable-fortran --enable-production --enable-shared --disable-netcdf --with-jpeg=$prefix/src/dependencies/src/jpeg-6b,$prefix/src/dependencies/src/jpeg-6b --prefix=$prefix/deps/hdf-4.2.5; make; make install

* For hdf-eos2:

        ./configure CC=/$prefix/deps/hdf-4.2.5/bin/h4cc --disable-fortran --enable-production --enable-install-include --with-pic --with-hdf4=$prefix/deps/hdf-4.2.5 --prefix=$prefix/deps/hdf-eos2; make; make install

## Long Version

1. To build the jpeg library, get a fresh source distribution of the
jpeg-6b source (later versions might work). When you configure the jpeg source,
set the environment variable CFLAGS to `CFLAGS="-O2 -fPIC`.
You can do that all on one command line by running configure like:

        ./configure CFLAGS="-O2 -fPIC" --prefix=/some/special/place.
        
    The value of the `--prefix` option determines where the four
    executable programs will be installed; the library (a static library)
    and includes will stay in the source directory.

1. When you build HDF4, use the following options to configure:
        
    * `disable-fortran`
    * `enable-production`
    * `enable-shared`
    * `disable-netcdf`
    * `with-jpeg`
    * `prefix`
    
    Of those, `enable-shared` and `with-jpeg` are the ones you must have;
    the others are a good idea. Again, this is for a copy of HDF4
    that will be used only by the Hyrax server.
    The configure command looks like:
    
        ./configure --disable-fortran --enable-production --enable-shared --disable-netcdf --with-jpeg=/the/jpeg-6b/source/dir,/the/jpeg-6b/source/dir --prefix=$prefix.
    
1. Pay special attention to the `--with-jpeg` option's value,
as it is the path to the source directory, listed twice
(if instead you list just one directory, hdf4 expects to find the lib in 
`/path/lib` and the includes in `/path/include`, so you'll have to make
those dirs and copy the library and includes by hand).

    Note that we don't recommend using the `--with-szip` option,
    because few files use that, and it will break linking with hdf-eos.
    Once built, install the library and you're ready to build the handler or...

1. Build the hdf-eos2 library. For this build you will need to tell configure
to use a non-standard compiler and provide a fair number of other options.
You 'change compilers' using a special value for the CC environment variable.
Here's how you run configure:

        ./configure CC=/home/jimg/src/hyrax_1.8_release/deps/hdf-4.2.5/bin/h4cc --disable-fortran --enable-production --enable-install-include --with-pic --with-hdf4=/path/to/hdf4 --prefix=/path/for/hdf-eos2

##TAGS##
build,hdf4,hyrax,handler,shrew,svn,jpeg-6b,hdf-eos2,cflags,disable-fortran,enable-production,enable-shared,disable-netcdf,with-jpeg,prefix