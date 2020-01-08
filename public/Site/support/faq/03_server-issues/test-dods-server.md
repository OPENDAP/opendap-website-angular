# Testing DODS Servers

There are several ways to test a DODS server. One of the simplest ways is to use
any web browser to look at a dataset. For a description of how to do this,
see our description of how to access DODS data with a browser.

You can also test out a server by using the `geturl` tool. It should be in your
`$DODS_ROOT/bin` directory. To use `geturl`, give it the `-d`, `-a`, or `-D` option
and the URL of your dataset. For example...

    geturl -d

Another way to test and debug a server is to directly connect to the HTTP server.
Thus bypassing *all* interpretation of the return data stream,
both from the DAP and the libcurl (HTTP) library.
Type the following, making the substitutions for the server/URL you want to debug:

    telnet <host with server> 80 (assuming the server is running on port 80, substitute the correct port otherwise).
    GET <URL fragment following the hostname> HTTP/1.1
    Host: <hostname>
    <blank line>

Following the blank line, you will see the response from the server,
including the response headers.

**What's going on here?**

This technique uses telnet to communicate with the HTTP daemon.
The '80' causes telnet to use port 80 (the port normally used for HTTP).
The first line instructs the HTTP daemon that it should GET the named document
(the path used for the second argument is relative to the server's DocumentRoot)
and use HTTP/1.1. Following the GET line there are one or more HTTP/1.1 headers
that supply additional information to the server. HTTP/1.1 only requires
that the `Host: header` be present. There are other request headers you can use.
Consult the HTTP/1.1 specification.

Here is an example. The matching URL is http://test.opendap.org/dap/data/nc/fnoc1.nc.dds

    [jimg@comet jimg]$ telnet dodsdev.gso.uri.edu 80
    Trying 198.116.10.229...
    Connected to dodsdev.gso.uri.edu.
    Escape character is '^]'.
    GET /dods-test/nph-dods/data/nc/fnoc1.nc.dds HTTP/1.1
    Host: dodsdev.gso.uri.edu

    HTTP/1.0 200 OK
    XDODS-Server: DAP/3.4.2
    Date: Thu, 08 Jul 2004 17:01:59 GMT
    Last-Modified: Mon, 15 Apr 2002 22:49:39 GMT
    Content-type: text/plain
    Content-Description: dods_dds

    Dataset {
        Int16 u[time_a = 16][lat = 17][lon = 21];
        Int16 v[time_a = 16][lat = 17][lon = 21];
        Float32 lat[lat = 17];
        Float32 lon[lon = 21];
        Float32 time[time = 16];
    } fnoc1.nc;
    Connection closed by foreign host.

A few things to think about if your server isn't working:

* Check the permissions on your CGI scripts. They must have execute permission.
* If you are using a FreeForm server, see the question Why can' I get my FF server to serve my data?

##TAGS##
dods,server,test,$DODS_ROOT