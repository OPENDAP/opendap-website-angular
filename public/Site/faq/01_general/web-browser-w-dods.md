# Using a Web Browser with DODS

The most bare-boned client is a standard web browser like Netscape or Internet Explorer.
You can access the DAS, DDS, and the data of a DODS dataset through a web browser.
For instance, to look at the DAS for the FNOC UV-winds stored at URI,
enter the following URL into your browser: http://test.opendap.org/opendap/data/nc/fnoc1.nc.das.

The extension on the DODS dataset URL identifies what is returned.
The '.das' extension returns the DAS (as in the above case); '.dds' returns the DDS;
'.dods' returns the actual DODS data stream; and '.ascii' returns the data in an ASCII,
comma separated format. You can add constraint expressions on the end of any of these URLs
to specify a subset of data.

##TAGS##
dods,web,browser,client,firefox,chrome,internet explorer,netscape,das