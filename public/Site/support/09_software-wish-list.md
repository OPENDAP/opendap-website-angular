# OPeNDAP Software Wish List

The DODS and NVODS OPeNDAP projects have long been Open Source. Members of the user community are encouraged to support them. One way to do this is to contribute to the development of the software (other ways include spreading the word about the projects and their goals and/or serving data). Here is a list of changes and additions to our software that we have identified as desirable. This is is not meant to be exclusive! If you have an idea for a new feature, or would like to see an existing feature changed, please jump right in --- we will be happy to work with you to ensure that your work will become part of the project.

## Changes/Additions to the DAP Itself

* Remove the dependency on libxdr. We could adopt the netCDF xdr-replacement code, for example. This change would simplify building the DAP on non-Unix platforms.
* Integrate transmission of compressed responses into the DAP, eliminating the server's need to fork when sending those. This would improve server response time and  would pave the way for C++ servers on non-Unix platforms.

## General Server Tools

* Re-architect the Perl code so that our servers can be either CGIs or daemons. There are several options here, it's potentially a complex job, but the problem can be broken into several steps and each will yield significant improvements in server performance or robustness.
* Complete the netCDF file output tool.
* Write HDF4, HDF5, Matlab and IDL file output tools.
* Extend the current statistics-gathering code. We'd like to switch to a DODS-only log file to simplify analysis of server usage data.

## Servers

* Write tests for the HDF5 server.
* Our servers use a hodge-podge of testing schemes. Typically a server must be completely installed before the tests can be run. End-to-end tests are needed, but it's possible to use the geturl tool bundled with the DAP to test servers without installing them. It would be a boon to the project if the tests were modified to uniformly use this in-place testing of the servers.
* Write a Perl interface to the C++ DAP. This could be done using SWIG (a suggestion from Steve Hankin) or by creating a C interface and gluing Perl to that or... No matter how it is done, a Perl interface to the DAP would be a huge plus.