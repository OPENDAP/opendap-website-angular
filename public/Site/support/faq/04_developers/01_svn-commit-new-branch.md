## I'm working on software checked out of SVN, how do I commit my changes to a new branch?

Short answer: Use copy and then switch.

In the code you have - a local working copy - use 'svn copy' to put a copy of that code into the repository at a new URL:

svn copy . <new URL>

Then, still in the working directory, use 'svn switch':

svn switch <new URL>

This will create <new URL> in the repository, dump you stuff there and then switch the local copy so that subsequent svn commands use <new URL>.