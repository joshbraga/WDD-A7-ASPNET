/*
* FILE             : SETeditor.css
* PROJECT          : WDD-A7-ASPNET
* PROGRAMMER       : Josh Braga 5895818 and Balazs Karner 8646201
* FIRST VERSION    : 2020-12-10
* DESCRIPTION      : 
*        The purpose of this file is to have a collection of JavaScript files
*/



/*
* FUNCTION    : populateDropdown()
* DESCRIPTION :
*       This function sends each filename from the array to a function that adds
*       the filename dynamically to the drop down selection box
* PARAMETERS  :
*      array : data (An array of file names in the MyFiles directory)
* RETURNS     :
*      void: void
*/
function populateDropdown(data)
{
    for (var i = 0; i < data.length; i++)
    {
        addNewListOption(data.d[i]);
    }

    //data.d.forEach();
    //data.forEach(addNewListOption);
}

/*
* FUNCTION    : addNewListOption()
* DESCRIPTION :
*       This function adds the incoming string to the drop down selection box
*       on the status bar in the main html page.
* PARAMETERS  :
*      string : fileName (String of the filename)
* RETURNS     :
*      void: void
*/
function addNewListOption(fileName)
{
    var select = document.getElementById("myFiles");
    select.options[select.options.length] = new Option(fileName, fileName);
}

/*
* FUNCTION    : getFiles()
* DESCRIPTION :
*       This function
* PARAMETERS  :
*      void : void
* RETURNS     :
*      void : void
*/
function getFiles()
{

}







function testArray()
{
    var filesArray = ["apple", "orange", "cherry"];
    populateDropDown(filesArray);
}