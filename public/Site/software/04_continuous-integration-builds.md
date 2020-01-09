# Continuous Integration Builds

We run Continuous Integration (CI) builds using 
[Travis-CI](https://travis-ci.org/OPENDAP/) for the libdap, bes, olfs and pydap.
These builds are triggered when there is a push to the master branch of their GitHub repository.
These builds compile the code, run its automated tests and may do packaging tasks
(depending on the language).