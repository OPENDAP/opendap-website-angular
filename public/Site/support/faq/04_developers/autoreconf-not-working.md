## Autoreconf Not Working

You need very recent version of the auto tools. Here's what I'm using:

    [jimg@zoey libdap]$ autoconf --version
    autoconf (GNU Autoconf) 2.68
    Written by David J. MacKenzie and Akim Demaille.

    [jimg@zoey libdap]$ automake --version
    automake (GNU automake) 1.11.1
    Written by Tom Tromey <tromey@redhat.com>.

    [jimg@zoey libdap]$ libtool --version
    ltmain.sh (GNU libtool) 2.2.8

On the Mac (OS/X) all three tools are present, but generally the versions
are old and in the way; update to new versions.

By default, the source packages build very easily and install into
`/usr/local/{bin,lib,...}` and will not break other things. Make sure to add 
`/usr/local/bin` to `$PATH` in your shell startup script
(likely `~/.bashrc` and also in `environment.plist` if you want these to be
accessible to programs started by/in the Finder.

##TAGS##
autoreconf,automake,ltmain.sh,libtool,libdap