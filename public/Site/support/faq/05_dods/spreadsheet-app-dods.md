# Using a Spreadsheet Application With DODS

MS Excel and the StarOffice spreadsheet application are DODS clients in the same way that a standard web browser is a DODS client. That is, they can dereference any URL including a DODS URL.

If using Excel, you can easily access DODS data by opening a "file" and handing it a DODS URL that uses the '.ascii' extension. Just be sure to select the proper file type to open, i.e., "text, comma-seperated values". Also, be sure to select comma as the text delimiter.

StarOffice spreadsheet works in much the same way. The only real difference is the file type; in this case, "Text - txt - csv(StarOffice Calc)".

## Example URLs for Pulling Into Spreadsheet

I had some trouble with StarOffice converting the data in the second column to numbers. The JGOFS data comes across as quoted fields; the first row was converted but not the second.

Note: There is a bug in the DODS 3.1 servers that causes problems with both Excel and StarOffice. It has to do with constraint expressions in the DODS URL. Both Excel and StarOffice escape the `[` and `]` characters became `%5B10` [a web standard]. The DODS servers do not recognize these escaped characters. What this means is that you cannot constrain the array indices that you access. You can still constrain what variables you access.
