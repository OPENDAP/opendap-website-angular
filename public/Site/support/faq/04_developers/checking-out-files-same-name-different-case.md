# SVN - Checking Out Code That Contains Two Files With Names That Differ Only In Case

The problem is that the default Mac OS/X HFS file system is
case-insensitive-but-case-preserving.
Check out on linux, rename (`svn mv`) the files and the checkout will work on the Mac.
Or install a case-sensitive HFS on your Mac.

##TAGS##
svn,case