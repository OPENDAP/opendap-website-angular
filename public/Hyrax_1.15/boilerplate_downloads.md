# Software downloads for Hyrax 1.16.0

#SPLIT#
## Binaries for Hyrax 1.16.0

* [Docker Images](https://github.com/OPENDAP/hyrax-docker/blob/master/README.md)
* [Hyrax](https://hub.docker.com/r/opendap/hyrax)
* [Hyrax with ncWMS](https://hub.docker.com/r/opendap/hyrax_ncwms)

#SPLIT#
## OLFS 1.18.5

### Download Links

* [Web Archive File](https://www.opendap.org/pub/olfs/olfs-1.18.5-webapp.tgz)
([gpg signature](https://www.opendap.org/pub/olfs/olfs-1.18.5-webapp.tgz.sig)):
Unpack using `tar -xvf filename`, and follow the instructions in the README file.
This version requires [Java 1.7](http://www.java.com/en/download/index.jsp), 
was built using Java 8, and was tested against 
[Tomcat 8.5.34](http://tomcat.apache.org/).

* [Automatic `robots.txt` Generation](https://www.opendap.org/pub/olfs/robots-olfs-1.18.5-webapp.tgz)
([gpg_signature](https://www.opendap.org/pub/olfs/robots-olfs-1.18.5-webapp.tgz.sig)):
Contains a web archive file that runs in the Tomcat server's root context.
This file returns a response for `/robots.txt`, so that your site can be crawled
using the automatically-built site maps added in 1.15.2.
This is beta software, and we would like your feedback.

### Notes:

* CentOS 6.3 comes with Java 6, which Oracle has stopped supporting. If you haven't already,
update your machine. We recommend using `yum search java-1.7` to locate the correct package. 
For our servlet you need the Java Runtime Environment (JRE).
You also need to use the "alternatives" tool to make Java 7 JVM the preferred alternative.

* Keep in mind that, on CentOS 6.6, you must use Tomcat 7 with Java 7.
Tomcat 7 is not compatible with Java 8.

#SPLIT#
## ncWMS2

Use the [EDAL web page](http://reading-escience-centre.github.io/edal-java/)
to locate the latest ncWMS2 "Servlet Container" software bundle as a WAR file.
Install it into the same Tomcat instance as the OLFS.
The configuration instructions can be found
[here](http://docs.opendap.org/index.php/Hyrax_WMS).

#SPLIT#
## BES

### [CentOS 6.x x86_64 RPMs](https://www.opendap.org/pub/binary/hyrax-1.16/centos-6.x/):

* [libdap-3.20.4-1](https://www.opendap.org/pub/binary/hyrax-1.16/centos-6.x/libdap-3.20.4-1.el6.x86_64.rpm)
[(gpg signature)](https://www.opendap.org/pub/binary/hyrax-1.16/centos-6.x/libdap-3.20.4-1.el6.x86_64.rpm.sig)

* [bes-3.20.5-1.static](https://www.opendap.org/pub/binary/hyrax-1.16/centos-6.x/bes-3.20.5-1.static.el6.x86_64.rpm)
[(gpg signature)](https://www.opendap.org/pub/binary/hyrax-1.16/centos-6.x/bes-3.20.5-1.static.el6.x86_64.rpm.sig)

### [CentOS 7.x x86_64 RPMs](https://www.opendap.org/pub/binary/hyrax-1.16/centos-7.x/):

* [libdap-3.20.4-1](https://www.opendap.org/pub/binary/hyrax-1.16/centos-7.x/libdap-3.20.4-1.el7.x86_64.rpm)
[(gpg signature)](https://www.opendap.org/pub/binary/hyrax-1.16/centos-7.x/libdap-3.20.4-1.el7.x86_64.rpm.sig)

* [bes-3.20.5-1.static](https://www.opendap.org/pub/binary/hyrax-1.16/centos-7.x/bes-3.20.5-1.static.el7.x86_64.rpm)
[(gpg signature)](https://www.opendap.org/pub/binary/hyrax-1.16/centos-7.x/bes-3.20.5-1.static.el7.x86_64.rpm.sig)
 
### Notes:

* This RPM includes statically linked copies of all of the modules/handlers we support,
including HDF4 & 5 with HDFEOS support.
There is no need to install packages from EPEL with this RPM.
Other sources of RPM packages will likely provide a bes RPM that uses handlers linked
(dynamically) to dependencies from their distributions (CentOS, Fedora, etc.).

* The bes.conf file has important changes in support of JSON-LD.
Make sure to look at `/etc/bes/bes.conf.rpmnew` after you install/upgrade the BES with these RPMs.

#SPLIT#
## Snapshot Builds 

Snapshot builds from the Continuous Integration and Delivery (CI/CD) system:

* [Linux x86_64 RPMs for CentOS6/7 and Debian packages for Ubuntu Trusty](https://s3.amazonaws.com/opendap.travis.build/index.html)

We build RPM and Debian packages whenever new code is pushed to a
Hyrax project's master branch. Those builds available from an
[Amazon S3 bucket](https://s3.amazonaws.com/opendap.travis.build/).
These are automatically built packages. Email support@opendap.org for help.

#SPLIT#
## Source Code

* [libdap](https://github.com/opendap/libdap)
[3.20.4](https://www.opendap.org/pub/source/libdap-3.20.4.tar.gz)
[(gpg signature)](https://www.opendap.org/pub/source/libdap-3.20.4.tar.gz.sig)

* [bes](https://github.com/OPENDAP/bes)
[3.20.5](https://www.opendap.org/pub/source/bes-3.20.5.tar.gz)
[(gpg signature)](https://www.opendap.org/pub/source/bes-3.20.5.tar.gz.sig)

* [Collected Dependencies](https://www.opendap.org/pub/source/hyrax-dependencies-1.21.tar)
[(gpg signature)](https://www.opendap.org/pub/source/hyrax-dependencies-1.21.tar.sig):
Bundles the NetCDF, HDF4, HDF5, and other libraries that the Hyrax handlers require. 

* OLFS 1.18.5:

    * [Source](https://www.opendap.org/pub/olfs/olfs-1.18.5-src.tgz)
    [(gpg signature)](https://www.opendap.org/pub/olfs/olfs-1.18.5-src.tgz.sig)

    * [Documentation](https://www.opendap.org/pub/olfs/olfs-1.18.5-doc.tgz)
    [(gpg signature)](https://www.opendap.org/pub/olfs/olfs-1.18.5-doc.tgz.sig)

* GitHub:

    * All of our source code is on GitHub. There you will find the 
    [hyrax repo](https://github.com/opendap/hyrax),
    which is a meta-project that contains scripts to clone and build all of Hyrax.
    You will also see all of the repos that contain the Hyrax source code
    (libdap4, bes, and all of the handlers).

    * Directions on building Hyrax from GitHub are available at our
    [documentation site](http://docs.opendap.org/index.php/Hyrax_GitHub_Source_Build).