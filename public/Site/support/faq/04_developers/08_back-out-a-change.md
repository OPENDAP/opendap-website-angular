# How do I 'back out' a change?

When you've made a change and committed it to the repository and now you want to reverse that change. The best way to remove it is to use the merge command. Suppose that you want to reverse a change in a in file.c that's been recently committed. Suppose the current version of file.c is 5 and the version just before your change is 4. You use the following to remove that change:

    svn merge -r 5:4 file.c