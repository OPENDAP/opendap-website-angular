# How can I determine the usage statistics for my OPeNDAP Server?

OPeNDAP server software resides on the same computer (in general)
as the data being served. The OPeNDAP server will use some lower-level
web server software (e.g., Apache Server or Tomcat) to make the actual
connection to the web. Most web server software creates and maintains
a log file of all the incoming (http, e.g.) requests,
and some indication of the success and/or failure mode of the response.
The log files are often in a standardized form but are individually configurable
by the system administrator.

Most sites that are interested in the usage of their OPeNDAP servers
have developed scripts that they run, typically once per month,
to derive "metrics" of the usage of their server.
These "metrics" might include: number of hits,
number of successful hits, number of repeat users,
and volume of data delivered.

A typical place to look for the web server logs is `/usr/local/apache/logs`,
but the actual location depends on how and where the server was installed.
Check with your system administrator for the specifics on your machine.

You can find more information on Apache's server software at
[apache.org](www.apache.org), including more information on log files.

There are also log analysis packages available that could be useful.

##TAGS##
usage,statistics,metrics,volume,repeat user