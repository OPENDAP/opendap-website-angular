# DODS - Issues Building and Running on SGI

There are a number of issues that have caused problems with builds
(and running the resulting binaries) on SGI machines.
The main issue with respect to DODS is how the different architectures
affect use of the DODS libraries and the Matlab and IDL clients.

Issues:

* Architectures
* OS Versions
* Hardware
* Compiler Versions

Third-party Packages:

* Matlab
* IDL

## Standard SGI Distribution

Our standard SGI binary distribution is built on an SGI Irix 6.5 machine
for the n32/mips-3 architecture. The Matlab client will come with two loaddods.mexsgi files:
`loaddods.mexsgi` is the binary for the n32 architecture,
`loaddods.mexsgi64` is a binary for the 64 architecture.
Details for the IDL distribution are still being decided.

If you are using DODS version 3.0 (we recommend using 3.1),
see the DODS 3.0 note below.

We are still developing our strategies for dealing with these issues.
If you have comments, please let us know by emailing support@unidata.ucar.edu.

## Architecture

There are a variety of SGI architectures. Each one is some combination
of the four possible instruction sets and the three binary formats (ABI):

* Instruction Sets
  * `-mips1`
  * `-mips2`
  * `-mips3`
  * `-mips4`
* Application Binary Interface (ABI), i.e., the format/interface of the binary files.
  * `-o32` - For the "old" 32-bit ABI (which was standard on IRIX 5) and is either `mips-1` or `mips-2`.
  * `-64` - The 64-bit ABI (which was introduced on IRIX 6.0) and is either `mips-3` or `mips-4`.
  * `-n32` - The new, high-performance 32-bit ABI (which was introduced on IRIX 6.2) and is either `mips-3` or `mips-4`.

Though these architectures are backward compatible (i.e., a 64 bit machine
can run binaries built in any architectures), every part (all objects and libraries)
for a given executable must be in the same architecture. In other words,
you cannot link together objects that are built for different architectures.

This means caution must be taken when linking applications with the DODS libraries we build
(i.e., the DODS core (DAP) library, libdap++.a; the netCDF API library, libnc-dods.a;
and the JGOFS API library, libjg-dods.a), and with the architectures
of the commercial applications we build clients for (i.e., Matlab and IDL).
See the information below on the architectures of Matlab and IDL. Also, see the note on shared objects.

## OS Versions

The basic problem here is that several Irix OS versions work exclusively on certain hardware platforms.
Here's a (not terribly detailed) summary:

* Irix 6.2 worked on all hardware platforms available at the time it was released.
* Irix 6.3 only works on the hardware platform that came out when it came out.
* Irix 6.4, also, only works on the hardware platform that came out when it came out.
* Irix 6.5 supports all the SGI hardware platforms.

This topic probably isn't as difficult to deal with as others.
At this time, our plans are to only supply Irix 6.5.x builds.
We will be working to figure out if these builds will work on other OS versions.

## Hardware

I don't know many details on the SGI hardware. If you run `uname -ap`,
the next to the last field will be of the form `IPxx`. That represents the type of CPU board.
Here are some details on the hardware platforms I've dealt with:

* IP22 - runs binaries in these architectures: o32-mips1, o32-mips2, n32-mips3.
* IP27 - runs binaries in these architectures: o32-mips1, o32-mips2, n32-mips3, n32-mips4, 64-mips3, and 64-mips4
* IP30 - runs binaries in these architectures: o32-mips1, o32-mips2, n32-mips3, n32-mips4, 64-mips3, and 64-mips4

If your platform isn't listed here, download `hi.sgi.tar.gz`, unpack it, and run each of the five programs.
They are all the same simple program but compiled for five different architectures.
Please send us (support@unidata.ucar.edu) the output so we can add to this list.

## Compiler Versions

We have been recommending use of gcc 2.8 for some time now due to some (former)
dependence on the Gnu library. However, we have had some difficulties on SGIs
due to the version of the `libstdc++.a` library that was distributed with gcc 2.8.
Using gcc 2.8 with a newer version of libstdc++.a holds promise but we have not thoroughly tested it.
The egcs compiler works. And, now that egcs and gcc have merged back together, gcc 2.95 also works.

Note: The dependence on the Gnu library has been removed.
We are working to make the build process more generic
so DODS can be built on development environments other than GNU.

## Matlab

The required architecture of the DODS Matlab client (which is used by the DODS Matlab GUI)
depends on a selection during installation of Matlab. The two available installations
(and the architecture of the respective shared libraries, with which the DODS Matlab client needs to link) are:

* SGI - has o32/mips2 shared objects
* SGI64 - has 64/mips4 shared objects

You can determine the architecture of your Matlab installation by running `ver` at the Matlab prompt.
The first line containing Matlab version info will state either 'SGI' or 'SGI64', e.g.,

* MATLAB Version 5.3.0.10183 (R11) on SGI64

## IDL

The required architecture of the DODS IDL client depends on the version of IDL you are running.
The architecture of the IDL shared libraries, with which the DODS IDL client needs to link, is as follows:

* o32 (mips 1) shared objects for IRIX IDL 5.2 and
* n32 (mips 3) shared objects for IRIX IDL 5.2.1 and above.

## Notes

Shared Objects Note: Remember when dealing with shared objects,
since the objects are linked at runtime,
any error including architecture mismatch will be a runtime error.

DODS 3.0 Note: For DODS version 3.0, we skirted the issue by providing an Irix 5.3 build.
It has been tested in a very limited way on Irix 6.5 machines.
However, we've heard of incompatibilities between Irix 5.x and 6.x
at least in terms of linking to the 5.x libraries on 6.x machines.
This means that if you plan to link your applications against any of the DODS libraries,
this solution may not (probably won't?) work for you. As far as the servers go,
they seem to work fine on 6.5 machines.

##TAGS##
dods,matlab,sgi,architectures