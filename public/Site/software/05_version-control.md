# Version Control

## GitHub

We have moved most of our active projects to [GitHub](https://github.com/opendap).
You can clone the libdap, bes, and other projects' repositories from github.com/opendap.
We respond to problem tickets submitted on the site,
but our primary issue tracking system is Jira, which has open access for readers.

### Where to find specific software in the GitHub repository

There are many projects in our GitHub repository, here are some:

<table>
    <tr>
        <td><a href="https://github.com/OPENDAP/libdap">libdap</a></td>
        <td>The C++ DAP2 library.</td>
    </tr>
    <tr>
        <td><a href="https://github.com/OPENDAP/hyrax">Hyrax</a></td>
        <td>The Hyrax server meta project.</td>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/OPENDAP/bes">BES</a>,
            <a href="https://github.com/OPENDAP/olfs">OLFS</a>
        </td>
        <td>Child projects that are make up the Hyrax project.</td>
    </tr>
</table>

## Subversion (SVN)

A way to get older source code is to use anonymous access to our read-only SVN repository.
In 2015 we moved to GitHub for most of our active projects and switch the SVN repository
to read-only access. To access older code from SVN, you can...

* You can use a web browser; visit the URL https://scm.opendap.org/svn/.
This is a good way to read over source code if you have specific questions
about how a particular function has been implemented. 
* You can use a variety of subversion clients to read from the repository.
Generally, you will want to check out source code from the repository's 'trunk'
using the URL `https://scm.opendap.org/svn/trunk/`.
There are many subversion clients available and many plugins for IDEs.
* If you want to perform active development work on the older code,
please move it to GitHub and/or let us know so we can move it.
Email us at support@opendap.org.