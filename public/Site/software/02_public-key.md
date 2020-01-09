# Public Key

OPeNDAP's Public Key is available here. We now (November 2007) sign all of
our software releases using gpg and a key created just for this purpose.
The public key is bound to the email address security@opendap.org.
The address is 'real' in the sense that email sent there will be answered,
although we ask that support questions be sent to the support@opendap.org
address instead. To verify a particular software package using its digital signature:

* Import the security at opendap.org public key into your key ring
(see the gpg documentation for help on that);
* Download both the package and the .sig signature file and put them
in the same directory; and
* Run `gpg --verify <signature file name>` in the directory with those files.

The result should be a message telling you that the signature is valid, who signed it and when it was signed. If you don't get a message saying the signature is valid, double check that you have installed the public key correctly, have the file and its signature in the same directory and have not renamed the file (or signature). If, after that, you're still not getting a message that the signature is valid, please contact us.