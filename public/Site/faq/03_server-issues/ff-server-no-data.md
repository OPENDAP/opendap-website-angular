# Why can't I get my FF server to serve my data?

Here are a few suggestions for troubleshooting your FF server:

1. Test that your format files are defined properly and that it fits
your data files by running `chkform` on them.
You can also check that your data is being interpreted as you desire
by running `newform`.

    Both `chkform` and `newform` are FreeForm tools that come with the DODS
    FreeForm Server distributions. (They should be located in the bin/ directory
    of your distribution.)

    So that newform can display your data, you will need an `ASCII_output_data`
    section in your format description file. Like this:

	    ASCII_input_data "test"
	    Time 1 10 double 4
	    Test 12 33 enote 20
	
	    ASCII_output_data "test"
	    Time 1 10 double 4
	    Test 12 33 enote 16

2. If you are serving ASCII data, pay attention to the whitespace in your data files.

    * FreeForm will gag if whitespace extends beyond the line length
    determined by the format description. For instance,
    if the format descriptor fits `34.523 1.45`
    * FF will give an error on `34.523 1.45`
    * There needs to be whitespace filler if the data in a line doesn't cover
    the entire format. For instance, if the format descriptor fits
    this data `34.456 234.456`
    * FF will die on this data `34.456 234.45` but will not die on `34.456 234.45`
    * The enote type doesn't seem to work quite like that.
    For instance, if the format fits `34.456 2.34e-2`
    * FF will die on `34.456 2.3e-2`

##TAGS##
ff server,ff,server,chkform,newform,freeform,ascii,whitespace,fail,error