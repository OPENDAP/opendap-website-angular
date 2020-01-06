# How do I check changes back into subversion?

Use the commit or ci sub command inside a directory that's already been checked out. You should set the environment variable SVN_EDITOR so that svn knows how to prompt for comments.

    svn ci