# Error Message: Catalog is Not Valid

The following was submitted by Tony Jolibois <tjolibois at cls.fr>.

When I start my Aggregation Server, I get the following:

    DEBUG: AggServer: CatalogServlet copy 
    /usr/local/jakarta-tomcat/webapps/thredds/initialContent/dodsC/ to 
    /usr/local/jakarta-tomcat-4.1.27-LE-jdk14/content/thredds/dodsC/ (04-04-19 10:57:08 )
    DEBUG: AggServer: catalog config 
    </usr/local/jakarta-tomcat-4.1.27-LE-jdk14/content/thredds/dodsC/catalogConfig.xml> is not valid (04-04-19 10:57:09 )

The error didn't come from the catalog itself, but from the
network configuration of my computer. In the configuration catalog
of the AS server, there are some http URLs:

    <!DOCTYPE catalog SYSTEM "http://www.unidata.ucar.edu/projects/THREDDS/xml/AggServerCatalog.dtd"> 
    <catalog name="MERCATOR DODS Aggregation Server Catalog" version="0.6" 
        xmlns="http://www.unidata.ucar.edu/thredds" 
        xmlns:xlink="http://www.w3.org/1999/xlink"> 

My environment was this: I have a firewall, and my computer was not open to Internet, so it could not connect to the two sites http://www.unidata.ucar.edu and http://www.w3.org. I tested the local copy of AggServerCatalog.dtd and InvCatalog.0.6.dtd but it didn't work.

After opening the connection to these two URLs at the firewall, all works fine now.

Conclusion: if your computer cannot connect to these sites, you won't be able to run an Aggregating server.

##TAGS##
aggregating,sever,as server,catalog not valid,invalid catalog,invalid,catalog,tomcat,network,unidata,w3