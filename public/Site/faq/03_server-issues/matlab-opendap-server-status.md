# What is the status of the Matlab OPeNDAP Server?

As of September 2003...

The Matlab OPeNDAP Server was written when Matlab 4 was current. The server supports all of the data types Matlab supported at the time. The server was never updated to handle the newer data types (structures and cell arrays, e.g.) because there was no demand for that capability. So, when the current server encounters variables of the newer types in a file, it chokes.

The level of interest in adding these capabilities is currently unclear. If anyone is actively interested in these capabilities, please let us know at support@unidata.ucar.edu. The best way to move forward with this activity would be to find a champion for the Matlab server who can drive the development effort. We can provide them with as much help as they need, although experience with C++ would be required. If no one comes forward we can add it to our schedule but we're booked pretty tight for the next six months.

If you know of someone who might be interested in working to expand the capabilities of the Matlab server, please have them contact us at support@unidata.ucar.edu.

##TAGS##
matlab,opendap,server,status