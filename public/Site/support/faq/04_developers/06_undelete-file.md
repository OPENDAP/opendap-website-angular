# How do I undelete a file?

If you delete a file using svn rm, then use the copy command to ressurect it. Note that after using svn rm you need to use svn ci to commit that change. Until then, the file is in limbo and things like svn up and svn copy... have no affect. So first, complete the deletion and then use copy as follows:

    [jimg@zoey libdap]$ svn rm NEWS
    D         NEWS

    [jimg@zoey libdap]$ svn ci NEWS
    Deleting       NEWS

    [jimg@zoey libdap]$ svn copy -r 11906 https://scm.opendap.org/svn/trunk/libdap/NEWS NEWS
    A         NEWS

    [jimg@zoey libdap]$ svn ci NEWS
    Adding         NEWS
 
    Committed revision 11934.