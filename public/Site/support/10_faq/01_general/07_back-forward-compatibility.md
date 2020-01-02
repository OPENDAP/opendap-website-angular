# Cross-Compatibility Between Old (core 2.22 or before) Clients and New (core 3.0 or after) Servers

The major change in the core software from version 2.22 to 3.0 is the addition of several new data types (Int16, UInt16, and Float32). While old servers will continue to work fine, old clients (those built with core 2.22 or before) will not be able to process the new data types. However, they will work fine if none of the new data types are returned.

This problem can be solved by upgrading to the latest version of the client you are using. You can
[check on the version of the server you are accessing](https://www.opendap.org/support/faq/general/server-version)
in several ways.

Here's an example of the output old clients will display when handed data in one of the new data types (this example is from loaddods in Matlab):

    >> loaddods()

    Reading: 
      Constraint: 
    In the dataset descriptor object:
    Expected a variable declaration
    (e.g., Int32 i;). Make sure that the
    variable name is not a reserved word
    (Byte, Int32, Float64, String, Url
    Structure, Sequence or Grid - all
    forms, byte, Byte and BYTE, are the same)

    Could not parse data DDS.
    ??? 

    Error in ==> /usr/local/DODS/src/writeval-2.23/loaddods.mexsol
