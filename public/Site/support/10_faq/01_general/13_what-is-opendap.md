# What is the OPeNDAP software?

OPeNDAP has developed a software framework that simplifies all aspects of scientific data networking, allowing simple access to remote data. Local data can be made accessible to remote locations regardless of local storage format by using
[servers](https://www.opendap.org/support/OPeNDAP-servers).
Existing, familiar data analysis and visualization applications can be transformed into
[clients](https://www.opendap.org/support/OPeNDAP-clients)
(i.e., applications able to access remote served data).

Take a look at our answer to the question
["What Will OPeNDAP Do For Me?"](https://www.opendap.org/faq/general/what-will-opendap-do)

The OPeNDAP Data Access Protocol (DAP) is a protocol for requesting and transporting data across the web. DAP 2.0 uses HTTP to frame the requests and responses. For details on DAP, see
[Data Access Protocol (DAP), version 2](https://www.opendap.org/support/faq/general/'/pdf/ESE-RFC-004v1.1.pdf)
which is a technical description of the Data Access Protocol. This was submitted to NASA's Earth Science Data Systems Standards Process Group and has been accepted as a Recommended Standard (submitted on 8/8/2004, accepted 10/8/2007). The official NASA ESE/RFC distribution point for DAP2 may provide a more up to date version and also has additional documentation regarding NASA/ESE's adoption of DAP2 as a community standard.

OPeNDAP supports a community of users working together to use, improve, and extend the DAP protocol and software.

## Design Principles

The design of the OPeNDAP software was based on the following two considerations:

* Data are often most appropriately distributed by the individual or group that has developed them.
* The user will in general like to access data from the application software with which they are most familiar.

This has resulted in a highly distributed system that allows users to control the distribution of their own data and the way they access data from remote sites.

## Community Driven Projects

OPeNDAP software is open-source and is intended to facilitate building community driven projects for developing end-to-end systems which can locate, understand, access, and use scientific data. OPeNDAP has already developed:

* a flexible data model
* a transport protocol
* software frameworks
  * C++ and Java implementations of the data model and transport protocol
  * a set of DODS servers
  * a set of DODS clients

## Not Just Oceanography

Although the OPeNDAP software was originally designed and developed by oceanographers and computer scientists for oceanographic data (as part of the DODS and NVODS projects), there is nothing in the design of the OPeNDAP software that constrains its use to oceanography. Indeed, it has been adopted by the High Altitude Observatory community and is being considered by segments of the meteorological and space science communities.

## User Application --> DAP Client

Once a user's data analysis application (or API) is made network-savvy with the OPeNDAP tools, the scope of an application's search for data is extended because remote data becomes as accessible as local data. A DAP-enabled application can:

* Get any data anywhere on the Internet that is served by a DAP server.
* Use data from any DAP server, pretty much regardless of its native format.
* Still perform all its original functions for accessing data locally.

The truly remarkable part: you don't have to rewrite the code to enable many applications to work as a DAP clients.