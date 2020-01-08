# The Matlab GUI can't find writeval

Make sure your `DODS_ROOT` environment variable is set properly.
It should points towards the DODS top level directory. For instance,
if you expanded the DODS binary release tar file in `/usr/local`,
set DODS_ROOT to `/usr/local/DODS";`.

If you are running the GUI from within the `$DODS_ROOT/bin/matlab-gui` directory,
make sure PATH includes the current working directory (i.e., '.').

##TAGS##
matlab,dods,gui,writeval