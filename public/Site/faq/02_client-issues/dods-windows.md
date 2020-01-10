# Is DODS available for Windows?

Yes, we have ported several of the DODS clients to Windows and they are available as a beta release.

Note: Windows versions of the OPeNDAP software is available on the main download page.
This page provides some background information on the port,
especially on the different types of libraries supported.
You can get the same software, or in some cases newer software, from the main releases page.

## DODS 3.4.4 Native Win32 port

DODS 3.4.4 is available for Windows 2000 and Windows XP. This distribution contains the DODS core (DAP) library, the netCDF client library, the Matlab command-line client, the IDL command-line client and the FreeForm Server. A Dods Development environment for Win32 is also included. This development environment includes the Dods Core Library (libdap) as well as other select libraries upon which the core library depends (libcurl, libz, libxml2 and libxdr) and all supporting headers. Each of these libraries are provided in 6 different models - Static Singly-Threaded, Static Multi-Threaded, Dynamic Multi-Threaded plus debug versions of each of these three libraries. These six models of libraries are provided for libdap, libcurl, libz, libxml2, libxdr and the Freeform library. Four models of the NetCDF library are provided (no DLL models). The below table outlines the 6 library models:

<table>
   <thead>
      <tr>
         <th>Library Model</th>
         <th>Microsoft Compiler Option Used to Build</th>
         <th>Format of Library Name</th>
         <th>Format of Name of the Associated DLL</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Static Singly-Threaded</td>
         <td>/ML</td>
         <td>lib*ST.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Static Multi-Threaded</td>
         <td>/MT</td>
         <td>lib*MT.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Dynamic Multi-Threaded</td>
         <td>/MD</td>
         <td>lib*MD.lib</td>
         <td>lib*MD.dll</td>
      </tr>
      <tr>
         <td>Static Singly-Threaded Debug</td>
         <td>/MLd</td>
         <td>lib*STD.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Static Multi-Threaded Debug</td>
         <td>/MTd</td>
         <td>lib*MTD.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Dynamic Multi-Threaded Debug</td>
         <td>/MDd</td>
         <td>lib*MDD.lib</td>
         <td>lib*MDD.dll</td>
      </tr>
   </tbody>
</table>

To install Dods for Windows, download the
[distribution](https://www.opendap.org/pub/dods/DODS-3.4/3.4.4/win32/DodsW32.exe)
to your desktop and double click on it. Then Follow the on-screen instructions. If you have a previous version of Dods installed, you must first uninstall it via "Add/Remove Programs" component within the Control Panel.

DODS 3.4.4 for win32 was built with Microsoft Visual C++ 7.x. If you use the development environment provided to construct or relink a Dods client, you must also use MS VC++ 7.x.

## DODS 3.4 Native Win32 port(beta)

DODS 3.4 is available for Windows NT, Windows 2000 and Windows XP. Other versions of Windows are not supported. It contains the DODS core library (DAP), the netCDF client library, the Matlab command-line client, the IDL command-line client, the Matlab Toolbox (a GUI) and our test client "geturl". A Dods Development environment for Win32 is also included. This includes the Dods Core Library (libdap) as well as other select libraries upon which the core library depend (libcurl, librx, libz, libxml2 and libxdr) and all supporting headers. Each of these libraries are provided in 6 different models - Static Singly-Threaded, Static Multi-Threaded, Dynamic Multi-Threaded plus debug versions of each of these three libraries. This distribution supports the client-side of Dods only. These six models of libraries are provided for libcurl, librx, libz, libxml2, libxdr and libdap. The below table outlines the 6 library models provided with the win32 version of Dods:

<table>
   <thead>
      <tr>
         <th>Library Model</th>
         <th>Format of Library Name</th>
         <th>Format of the Name of the Associated DLL</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Static Singly-Threaded</td>
         <td>lib*ST.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Static Multi-Threaded</td>
         <td>lib*MT.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Dynamic Multi-Threaded</td>
         <td>lib*MD.lib</td>
         <td>lib*MD.dll</td>
      </tr>
      <tr>
         <td>Static Singly-Threaded Debug</td>
         <td>lib*STD.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Static Multi-Threaded Debug</td>
         <td>lib*MTD.lib</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td>Dynamic Multi-Threaded Debug</td>
         <td>lib*MDD.lib</td>
         <td>lib*MDD.dll</td>
      </tr>
   </tbody>
</table>

To install Dods for Windows, download the 
[distribution](https://www.opendap.org/pub/dods/DODS-3.4/3.4.4/win32/DodsW32.exe)
to your desktop and double click on it. Then Follow the on-screen instructions. If you have a previous version of Dods installed, you must first uninstall it via "Add/Remove Programs" component within the Control Panel.

Several optional components in the distribution are consider BETA software and are not generally supported. These components include the Matlab Toolbox and the IDL command-line client. The IDL command-line client was built with IDL 6.0. The Matlab command-line client was built with Matlab 6.5, The Matlab Toolbox has only been summarily tested under Matlab 6.5.

## DODS 3.3 Native Win32 port (Beta)

The DODS 3.3 is available as a Beta release for Windows NT, Windows 2000 and Windows XP. Other versions of Windows are not supported. It contains the DODS core library (DAP), the netCDF client library, the Matlab command-line client, the IDL command-line client, the Matlab Toolbox (a GUI) and our test client "geturl".

To install Dods for Windows, download the
[distribution](https://www.opendap.org/pub/dods/DODS-3.3/3.3.0/binary/win32/DodsW32.exe)
to your desktop and double click on it. Then Follow the on-screen instructions. If you have a previous version of Dods installed, you must first uninstall it via "Add/Remove Programs" component within the Control Panel.

## DODS 3.2 native Win32 port

DODS 3.2 is now available as a Windows port (6 February 2002). It contains: the Matlab client; the IDL client; our test client, geturl; the DODS core (DAP) library; and the netCDF client library.

Note: We support this port for NT-based kernals only (NT, W2K and XP). We do not support this port on win9x-based systems though it may work fine.

To install this port: first, uninstall any existing version of DODS; download the 
[installShield self-extracting archive](https://www.opendap.org/pub/dods/DODS-3.2/win32/DODS-3.2.exe);
double click; and follow the on-screen instructions. To run DODS exe's and dll's, you will need to set various environment variables, e.g., path, IDL_PATH, and MATLABPATH, depending on which tools you are going to run. Other environment variables must be set to use the DODS libraries.

## DODS 3.1 native Win32 port

DODS has a port for MS Windows platforms (95, 98, 2000, and NT). It is a native Windows port (using the Visual C++ compiler) and is available as a beta release. Download our 
[self-extracting archive](https://www.opendap.org/pub/dods/DODS-3.1/win32/DodsW32.exe).
This port is of three DODS clients: the Matlab client, the IDL client, and geturl. (The Matlab GUI is not included, you will need to get that directly from the 
[FTP site](https://www.opendap.org/pub/dods/DODS-3.1/DODS-ml-gui-3.2.1.tar.gz).)

Tip: From a DODS support email, a discussion of setting your PATH so Matlab can find the DODS client (probably applies to IDL as well):

> I believe it is just a matter of having the directory
> of the .dll's on your PATH.  To pick up the matlab
> dll for instance I have C:\Program Files\URI\DODS\bin in
> my path.  Your location of this dll will vary somewhat
> depending upon where to choose to install Dods at
> installation time.  How you set the path varies by
> the win32 host you are on.  95/98 - edit autoexec.bat.
> In Win2000, double click on "System" in the control panel
> and select the Environment Variables push button.  In NT,
> it is probably set the same or similar to the way it is
> in Win2000.

Note: An older port using Cygwin to emulate the Unix environment contained a number of DODS servers. The Cygwin port is no longer supported but is available if desired. If you are interested in the Cygwin port, please email us at support@unidata.ucar.edu.

##TAGS##
dods,windows