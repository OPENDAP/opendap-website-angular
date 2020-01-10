# Cross-Compatibility Between Old (core 2.22 or before) Clients and New (core 3.0 or after) Servers

The major change in the core software from version 2.22 to 3.0 is the addition
of several new data types (Int16, UInt16, and Float32).
While old servers will continue to work without issue,
clients built with core 2.22 or before) will not be able to process the new data types.
They will, however, work if none of the new data types are returned.

This problem can be solved by upgrading to the latest version of the client you are using. See
[Find the Version of the Server You're Communicating With](/support/faq/find-server-version)
for more information.

### Example

The following is an example of the output old clients will display
when handed data in one of the new data types (this example is from loaddods in Matlab):

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

##TAGS##
int16,uint16,float32,core,loaddods,matlab,dods,could not parse data DDS,Expected a variable declaration,variable name is not a reserved word,Error in ==>