# SVN - 'Back Out' a Change

The best way to undo a commited change it is to use the `merge` command.
Suppose that you want to reverse a change in a in `file.c` that's been
recently committed. Suppose the current version of `file.c` is 5,
and the version just before your change is 4.
You use the following to remove that change:

    svn merge -r 5:4 file.c

##TAGS##
svn,merge,undo,back out,reverse,commit