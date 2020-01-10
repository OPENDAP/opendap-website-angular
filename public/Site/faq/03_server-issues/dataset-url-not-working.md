# Dataset URLs stopped working in 3.2

## The Problem

As of DODS (C++) version 3.2, the DODS servers are accessed through "nph-dods" instead of "nph-nc", "nph-hdf", etc. (For more details on why this change was made, see below.) This means that, once a pre-3.2 server is upgraded to 3.2, all the old DODS URLs no longer work. That is, unless there is a fix put in place.

## Possible Fixes

1. copy nph-dods to old locations, e.g., 'cp nph-dods nph-nc'
2. symbolic links, e.g., 'ln -s ./nph-dods nph-nc'
3. if using apache server, add some ScriptAlias directives to the configuration of web server. E.g., currently, you probably have a line in your configuration file like: 'ScriptAlias /cgi-bin/ /usr/local/apache/cgi-bin/'. Add another line something like 'ScriptAlias /cgi-bin/dods/nph-nc /usr/local/apache/cgi-bin/dods/nph-dods'

## Support in the Install Scripts (`installServers`)

The `installServers` script will make copies of nph-dods in the old locations if the installer desires. It isn't pretty but it will do for a temporary solution.

Once version 3.3 comes out, the install scripts will stop supporting this behavior. Copying nph-dods (or any of the solutions mentioned above) will still work; it is only the install scripts that will stop supporting these patches.

## Recommendation

We recommend that all server sites that are upgrading from pre-3.2 servers use one of the above mentioned patches (while planning on dropping support for the old form of URLs at some point in the future). NOTE this doesn't apply to new servers just starting with DODS 3.2

When DODS 3.3 comes out, its server installation scripts will no longer support these patches. So, we recommend that server sites use 3.3 as the deadline for support patch start publishing the new URLs immediately; notify your users that the old form of URLs will be dropped at some point in the future; We therefore re retiring the old until DODS 3.3 is available; begin alerting your users that the old URLs will not be available in the future; and remove patch once you upgrade to DODS 3.3

## More on change to nph-dods

One of the new features in DODS (C++) version 3.2 was to reorganize all the different servers to have a single point of access. Pre-3.2 servers had a separate CGI script (e.g., "nph-nc", "nph-ff", "nph-hdf") for each type of DODS server. If a single site served different types of data, users had to know which datasets corresponded with which server. A mismatch between server type and data type resulted in an error.

Version 3.2 servers present a single entry point, the CGI script "nph-dods" automatically (with the help of a dods.ini file routes requests to the appropriate server software.

##TAGS##
dataset,url,dods,installServers