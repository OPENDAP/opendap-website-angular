# Find the Version of the Server You're Communicating With

Append `.ver` to a DODS URL. Or you can use `version` as the dataset name
to get the version of a server without knowing any of the data file names.

Returns an XML document that describes the server's software components
and their versions, in addition to the DAP protocol versions supported by the server.
Older servers return a plain text document with less information.

##TAGS##
version,server,communicating,ver,dods,xml,dap,protocol,dap protocol