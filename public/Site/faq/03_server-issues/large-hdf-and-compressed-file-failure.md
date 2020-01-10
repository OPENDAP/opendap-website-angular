# Large HDF Files and/or Compressed Files Fail

Your server has one or both of the following (easy to fix) problems.
The cache directory is too small and/or your server cannot find gzip.
If the cache directory is too small, then files will be purged from the cache
too soon, resulting in a huge performance degradation.
If your server cannot find gzip, it won't be able to decompress files
before serving them.

When the OPeNDAP software is used to serve compressed files
(e.g. files compressed using gzip),
the files are first decompressed and then stored in a cache;
data served are read from those cached files.
The location of the cache directory is `/usr/tmp` by default. 
This can be changed by editing `nph-dods` and changing the value of `$cache_dir`.

The software is set by default to limit the size of this directory to 50 MB;
however, if you're serving large files, or are experiencing
a large volume of traffic, you should increase this.
To do so, edit the value of of the second parameter to `purge_cache()`
on line 125 of nph-dods. The cache size is given in MB,
so changing the 50 to 100 would increase the cache size from 50MB to 100MB.

Finally, the decompression software uses the gzip program to do its work.
If your computer does not have the gzip program in its `/bin` directory,
you'll need to edit the `DODS_Cache.pm` so that the correct version of
gzip is used. Look in that file for `/bin/gzip` and replace that text
with the correct pathname. To figure out where gzip is on you computer,
type `which gzip` in a shell.

##TAGS##
hdf,compressed,cache,gzip,which gzip,purge,tmp,failure,error,large