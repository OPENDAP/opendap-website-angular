# Checking out code that contains two files with names that differ only in case gags.

The problem is that the default Mac OS/X HFS file system is case-insensitive-but-case-preserving. Check out on linux, rename (svn mv) the files and the checkout will work on the Mac. Or install a case-sensitive HFS on your Mac.