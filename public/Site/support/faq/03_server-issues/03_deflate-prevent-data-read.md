# Changes in "deflate" in 3.4 Preventing Data Read

## The Issue

* Using geturl, a 3.2 client can read compressed responses from both 3.2 and 3.4.
* Using geturl, a 3.4 client can read compressed responses from 3.4 but not 3.2.
* Uncompressed responses work without any problems.

## Recommendation

The problem is that 3.2 servers return garbled compressed responses.
The 3.2 clients, due to a separate problem, don't ask a server for a compressed response,
so the problem with the responses didn't show up.

When a 3.2 server sends a compressed response,
the compressed body winds up preceding the response headers.
This results in a response that is too garbled for libcurl to understand.

The fix for the 3.2 servers (introduced in 3.4.0)
is to call `flush()` after the headers, but before the body data, are written.

## Why the Problem (Might) Exist

Compression is handled by having the body data filtered through a sub-process.
The headers are written to a FILE* and then the output of the sub-process is tied to that same FILE*;
however, it may be that, by using `dup2()`, what is actually happening is that two FILE*
are accessing one underlying file descriptor.
By using a `flush()` call, we can synchronize the two writes;
without it, the xdr calls seem to write data that 'wins the race'
(maybe because they are calling `flush()`?).

## What to do about reading from the 3.2 servers?

1. Compression is off by default; warn users about the problem. Tell them how to ask a server its version.
2. Encourage people to upgrade their servers. Explain that a bug will prevent optimal use.

##TAGS##
3.2,3.3,compression,compressed,dup2,flush,xdr,defalte,3.4,data read