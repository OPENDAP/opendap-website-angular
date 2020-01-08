# SVN - Version Number When Undeleting

The easiest way is to look at the log; however, if you ask for the log
of an item just deleted, svn will tell you the item is no longer under
version control. Instead of using the name of a local file
(which was just deleted and so does not exist), use the full URL
to that file in svn (where all of its previous version still exist).
Here's what to do:

    [jimg@zoey libdap]$ svn log  https://scm.opendap.org/svn/trunk/libdap/NEWS
    ------------------------------------------------------------------------
    r11906 | root | 2005-08-08 13:51:43 -0600 (Mon, 08 Aug 2005) | 1 line

##TAGS##
undelet,version,svn