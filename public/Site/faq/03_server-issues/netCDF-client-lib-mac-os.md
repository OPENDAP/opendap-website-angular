# How do I build the netCDF Client Library on Mac OS/X?

1. As is standard practice for OS/X, I replaced etc/config.guess and config.sub with /usr/libexec/config.guess and /usr/libexec/config.sub. This allows configure to correctly identify the platform as powerpc-apple-darwin5.5. I believe that the latest versions of autoconf come with config.guess/.sub files that handle OS/X properly so this should be easy to fix.

2. The gcc version test in the dap and nc3 configure scripts fails for Apple's modified gcc, because "gcc -v" gives the following output: Reading specs from `/usr/libexec/gcc/darwin/ppc/2.95.2/specs` Apple Computer, Inc. version gcc-934.3, based on gcc version 2.95.2 19991024 (release) The regexp gets stuck on the "." in "Inc.", and GCC_VER ends up set to: Apple Computer, I. version gcc-934.3, based on gcc version 2.95.2 19991024 (release) My quick fix for this was to comment out the error message in the case statement and instead set GCC_VER = `gcc --version`, which gives the following output: 2.95.2 I am not knowledgeable enough with autoconf to say how the test should be modified to be portable though..

3. I commented out the definition of HAVE_APPKIT_APPKIT_H in include/w3c-libwww/wwwconf.h. I have no idea why or what this is used for. I will investigate further if you don't know either.

4. I commented out line 974 of util.cc: xdf_destroy(xdr); The compiler was giving a "wrong number of arguments" error". I couldn't figure it out so I just commented out the line. I expect this introduced a memory leak so I we will have to figure out a better solution."

5. Since I was working with the 3.2.1 release and not the current SVN sources, I commented out various references to libdap++-gui in the dap and nc3/ncdump makefiles.

6. I had to run ranlib on lib/libwww.a. There was a file called "__.SYMDEF SORTED" which looks like it was supposed to be the symbol table for libwww sitting in the lib/ directory, so perhaps the ranlib command line didn't work quite right the first time. At this point libdap++.a and libnc-dods.a both built successfully.

7. The linker reported unresolved symbols for add_connect(NCConnect), del_connect(NCConnect), and a few other members of the Connections template. According to some messages on the web, there are template instantiation bugs in Apple's gcc, and the best fix they had found was to include the instantiation as a separate object file. So I added "../inst.o" to the link line for dncdump and lo and behold, it worked.

##TAGS##
build,netcdf,mac,os/x,osx,client,library