## Required External Dependencies

In order to run Hyrax 1.14, you will need...

* Java 1.7 or greater
* Tomcat 7.x or 8.x Note: On CentOS 6.6 use Java 7 + Tomcat 7 if you're using yum to install software.
* Linux (We provide RPMs for CentOS 6.9 and 7.13; install them with yum), Ubuntu, OSX or another suitable Unix OS.

## BES installation

1. Download the RPM packages found (see above) for your target operating system.
1. Use `yum` to install the libdap and BES RPMs:

    ````
    sudo yum install libdap-3.20.*.rpm bes-3.20.*.rpm
    ````
    
    If you are not building software from source, skip the `*-devel` and `*-debuginfo RPMs`.
1. Look at the `/etc/bes/bes.conf.rpmnew` file. Localize and merge
the new `BES.ServerAdministrator` information into your bes.conf file.
Note that the format of the new `BES.ServerAdministrator` entries,
as it has changed from the previous version.

1. At this point you can test the BES by typing the following into a terminal:

    ````
    sudo service besd start     //Start it
    bescmdln                    //Connect using a simple client
    show version                //Get version information
    exit                        //Exit from bescmdln
    ````

    If you are upgrading from an existing installation older than 1.13.0,
    note that the keys `BES.CacheDir`, `Bes.CacheSize`, and `BES.CachePrevix` in bes.conf
    have been replaced with `BES.UncompressCache.dir`.
    
    Other changes include the gateway cache configuration (`gateway.conf`), which now uses the keys 
    `Gateway.Cache.dir`, `Gateway.Cache.size`, and `Gateway.Cache.prefix`
    to configure its cache. Changing the names enabled the BES to use separate parameters
    for each of its several caches, which fixes the problem of 'cache collisions.'

## OLFS and Starting the Server

### CentOS 7, modern Ubuntu/Debian systems:

1. Install tomcat:

    ````
    sudo yum install tomcat
    ````

1. Make the directory `/etc/olfs` and ensure tomcat can write to it:

    ````
    sudo mkdir /etc/olfs
    chgrp tomcat /etc/olfs
    chmod g+w /etc/olfs
    ````

1. Unpack the opendap.war web archive file from olfs-1.18.1-webapp.tgz:

    ````
    tar -xzf olfs-1.18.1-webapp.tgz
    ````

1. Install the opendap.war file:

    ````
    sudo cp opendap.war /usr/share/tomcat/webaps
    ````

    The current CentOS-7 default SELinux rules will now
    prohibit Tomcat from reading the war file. This can be remediated
    by issuing the following two commands as the super user:
    
    ````
    sudo semanage fcontext -a -t tomcat_var_lib_t /var/lib/tomcat/webapps/opendap.war
    sudo restorecon -rv /var/lib/tomcat/webapps/
    ````

1. Start tomcat:

    ````    
    sudo service tomcat start
    ````

### CentOS 6 (Older Systems)

1. Check the Java version on your system:

    ````
    java -version
    ````

2. You need at least java 7 (aka 1.7.0), although Java 8 is better.

    * If you need to update java, the easiest way on Linux is to use `yum` or `apt-get`.
    * On CentOS Linux, you may need to use the alternatives tool to set the Java version:
    
        ````
        alternatives --config java
        ````

3. Use yum to install `tomcat.noarch`:

    ````
    sudo yum install tomcat
    ````

3. On CentOS 6, you will need to first install the EPEL info for yum. Do that with
[`yum install`](https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm). 
See [fedoraproject.org](https://fedoraproject.org/wiki/EPEL) for more info)

3. On CentOS 6, you may need to open a port in the iptables-managed firewall:

    ````
    // Example, open port 8080 with...
    
    sudo iptables -I 1 -i eth0 -p tcp --dport 8080 -j ACCEPT
    ````
    
1. Now follow the CentOS 7 steps (but skip the SELinux bits as they probably do not apply).

## Test the Server

In a web browser, use [http://localhost:8080/opendap/](http://localhost:8080/opendap/).
Look at sample data files shipped with the server.

## Notes

* If you are installing the OLFS in conjunction with ncWMS2 version 2.0 or higher,
copy both opendap.war and ncWMS2.war into the Tomcat webapps directory.
Restart Tomcat, [read about it here](http://docs.opendap.org/index.php/Hyrax_WMS),
and then configure ncWMS2 and the OLFS to work together.
If you are experiencing difficulty, see our 
[new Hyrax Manual](https://opendap.github.io/hyrax_guide/Master_Hyrax_Guide.html)
and the 
[older Hyrax documentation page](http://docs.opendap.org/index.php/Hyrax)

* For those upgrading from **any previous installation older than 1.15**, 
the internal format of the olfs.xml file has been revised. 
No previous version of this file will work with Hyrax-1.15.

    To upgrade your system, move your old configuration directory aside
    (for example, `mv /etc/olfs ~/olfs-OLD`)
    and follow the instruction to install a new OLFS.
        Once you have it installed and running, you will need to review your
    old configuration and make the appropriate changes to the new olfs.xml
    to restore your server's behavior.
    
    The other OLFS configuration files have not undergone any structural changes,
    and you can replace the new ones that were installed with copies of your
    previously working ones.

* To make the server restart when the host boots, use `systemctl enable besd`
and `systemctl enable tomcat` (or `chkconfig besd on` and `chkconfig tomcat on`,
depending on specifics of your Linux distribution).