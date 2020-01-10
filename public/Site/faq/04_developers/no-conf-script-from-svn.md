# SVN - Code Checked Out, but No Configure Script

## Short Answer

Build it from `configure.ac`.

## Useful Answer

You'll need to use `autoreconf` (which is part of the autoconf package)
to create the configure script. The `autoreconf` tool will also run
all the other 'auto' tools, like `automake`, `aclocal`, etc.,
and will do so in the correct order.

In a nutshell, run `autoreconf`.

I find the `--verbose` and `--force` options are often useful.
Once you've run `autoreconf`, you should have a configure script and 
`Makefile.in` files. Each project that uses autoconf has one `configure/.ac`
script in the top directory.

There will be one `Makefile/.am/.in` set for each directory.
Once you've run `autoreconf` and `configure` once, the Makefiles
that are created know how to run the auto tools when various things like
a `Makefile.am` changes. Resist the temptation to check generated files into svn.

##TAGS##
svn,autoreconf,automake,auto,makefile,configuration,script,check