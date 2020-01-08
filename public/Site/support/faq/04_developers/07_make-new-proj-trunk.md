# SVN - Make New Project Under `/trunk`

Create the directory you'd like to add and then use the import command.

When you import a new project and you want it to appear as 
`/trunk/<<new_project>>`, make sure to append the `<<new_project>>` 
directory name to the URL you pass to svn import.

Here's an example of adding a new project named `svn-tools`:

    otaku:~ jimg$ mkdir svn-tools

    << create/add files to the new directory>>

    otaku:~ jimg$ svn import -m "New import" svn-tools https://scm.opendap.org/svn/trunk/svn-tools
    Adding         svn-tools/svn_binary
    Adding         svn-tools/svn_exec
    Adding         svn-tools/svn_text

    Committed revision 11550.
    otaku:~ jimg$ 

##TAGS##
svn,new,project,trunk