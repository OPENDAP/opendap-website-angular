# How do I build the Matlab server and client on SGI?

To build the Matlab server, your entire DODS build (actually, just dap, packages, and ml-dods)
must be in the same architecture as the Matlab libraries (o32/mips2 or 64/mips4).
We haven't yet succeeded at building all of DODS in either of these architectures.
Here are our main problems:

* gcc does not support o32
* problems linking 64 bit objects (with linker setup?)
* no time to work on this issue

To build the Matlab command line client, build in the same architecture as the rest of your DODS build.
If that architecture does not match the architecture of the Matlab libraries (o32/mips2 or 64/mips4),
the linking of loaddods.mex* will fail. Because loaddods.mex* is the only piece of the Matlab client
that links to the Matlab libraries, and it does not link to the DODS libraries,
it can be built in the architecture of the Matlab libraries, even though the rest of DODS is not.
To build loaddods as either o32/mips2 or 64/mips4...


* Edit Makefile:
    * If using cc, add '-o32' or '-64' to CFLAGS.
    * If using gcc, add '-mabi=64' to CFLAGS.
* Remove `-gstab` from `FLAGS;`.
* Change `CC` to `cc` or leave as `gcc`.
* Ensure `LDFLAGS` points to the correct Matlab library
(in case you have both architectures installed on your machine).
* Remove (or rename) `loaddods.o`, `variable.o`, `queue.o`, `extend.o`, `error.o`, `MLVars.o` (new as of 3.1.4),
and `process_values.o` (new as of 3.2.x).
* run `$MAKE loaddods`.

Note that gcc does not support `-mabi=o32` but will build `-mabi=64`; however, SGIs cc supports both `-o32` and `-64`.

##TAGS##
dods,ml-dods,matlab,o32/mips2,64/mips4,gcc,loaddods,mex,-mabi=o32,-mabi=o64,sgi,cc,cflags,gcc,loaddods.o,variable.o,queue.o,extend.o,error.o,MLVars.o,process_values.o,$MAKE loaddods