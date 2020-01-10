## SVN - Committing Code Changes to New Branch

The simplest way is to use copy and then switch.

In the code you have - a local working copy - use `svn copy`
to put a copy of that code into the repository at a new URL:

    svn copy . <new URL>

Then, still in the working directory, use `svn switch`:

    svn switch <new URL>

This will create `<new URL>` in the repository.
Transfer your files there and then switch the local copy
so that subsequent svn commands use `<new URL>`.

##TAGS##
svn,check,out,code,changes,version control,repository