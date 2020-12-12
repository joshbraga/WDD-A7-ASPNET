/*
* FILE             : SETeditor.css
* PROJECT          : WDD-A7-ASPNET
* PROGRAMMER       : Josh Braga 5895818 and Balazs Karner 8646201
* FIRST VERSION    : 2020-12-10
* DESCRIPTION      : 
*        The purpose of this file is to have a collection of JavaScript files
*/



//global
var jQueryXMLHttpRequest; 



/* 
* FUNCTION    : getUserInput()
* DESCRIPTION :
*       This function takes the ID of the element the user entered a value into and converts it to a string.
* PARAMETERS  :
*      object : textboxElement (The object automatically created from the ID that records user's input)
* RETURNS     : 
*      string : userInput (User's input to the element as a string)
* REFERENCE  :
*       This function was taken directly from my (Balazs Karner), assignment 2 in WDD.
*/
function getUserInput(elementId)
{
    var userInput = elementId.value.toString();
    return userInput;
}

/* 
* FUNCTION    : checkIfEmpty()
* DESCRIPTION :
*       This function checks if the text box is empty
* PARAMETERS  :
*      string : userInput (The user's input as a string)
* RETURNS     : 
*      bool   : true (if the string is empty after trimming whitespace)
*      bool   : false (if the string contains a value after trimming whitespace)
* REFERENCE  :
*       This function was taken directly from my (Balazs Karner), assignment 2 in WDD.
*/
function checkIfEmpty(userInput)
{
    //Trim whitespace and check if length is 0
    if ((userInput.trim()).length < 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/* 
* FUNCTION    : validateNameFormat()
* DESCRIPTION :
*       This method checks the user entered name in the text box to the regex pattern to see if the correct format was followed.
* PARAMETERS  :
*       string : userInput ()
* RETURNS     : 
*       bool : hasMatch (true if the user entered string matches the regex pattern for a name)
*       bool : hasMatch (false if the user entered string does not match the regex pattern for a name)
* REFERENCE  :
*       This function was taken directly from my (Balazs Karner), assignment 2 in WDD.
*/
function validateNameFormat(userInput)
{
    var namePattern = /^[a-zA-Z0-9\s\!\@\#\$\%\^\&\(\)\-\_\+\=\'\;\`\~\.\,\[\]\{\}]+$/i;
    var hasMatch = namePattern.test(userInput);
    return hasMatch;
}

/* 
* FUNCTION    : validateFileName()
* DESCRIPTION :
*       This function will validate the file name in the save as text box before proceeding
* PARAMETERS  :
*      void : void
* RETURNS     : 
*      void : void
* REFERENCE  :
*       This function was taken directly from my (Balazs Karner), assignment 2 in WDD.
*/
function validateFileName()
{
    //Clear Error text
    document.getElementById("saveAsError").innerHTML = "";

    //Get the input saveAsBox, convert it to a string and check for valid format
    var input = getUserInput(document.getElementById("saveAsBox"));
    var isEmpty = checkIfEmpty(input);
    var isNameValid = validateNameFormat(input);

    //If the name textbox is empty then enter here and display an error to the user
    if (isEmpty == true)
    {
        document.getElementById("saveAsBox").value = "";
        document.getElementById("saveAsError").innerHTML = "<b>Error:</b> File Name Cannot be Blank.";
    }
    //Otherwise enter here and check if the user's name is valid format
    else if (isNameValid == false)
    {
        document.getElementById("saveAsBox").value = "";
        document.getElementById("saveAsError").innerHTML = '<b>Error:</b> Invalid File Name. File Name Cannot Contain Special Characters [<>:"/\|?*].';
    }
    else
    {
        saveFile();
    }
}

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
    document.getElementById("myFiles").innerHTML = '<option value="Open A File">Open A File</option>';

    for (var i = 0; i < data.d.length; i ++)
    {
        addNewListOption(data.d[i]);
    }
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
* FUNCTION    : setFileNameBar()
* DESCRIPTION :
*        This function changes the file name label on the file name bar above the text area to
 *       the current file being worked on.
* PARAMETERS  :
*      string : fileName (String of the filename)
* RETURNS     :
*      void: void
*/
function setFileNameBar(fileName)
{
    document.getElementById("fileNameMessage").innerHTML = "File Name: " + fileName;
}

/*
* FUNCTION    : getFiles()
* DESCRIPTION :
*        This function gets a list of files from the MyFiles directory and calls the
 *       populateDropDown function in order to add new file names to the drop down
 *       menu on the navigatio bar
* PARAMETERS  :
*      void : void
* RETURNS     :
*      void : void
*/
function getFiles()
{ 
    var jsonData = {};
    var jsonString = JSON.stringify(jsonData);


    jQueryXMLHttpRequest = $.ajax({
        type: "POST",
        url: "default.aspx/GetFileNames",
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            populateDropdown(data);

        }
    });

}


function saveFile()
{

    var textboxData = "";

    textboxData = document.getElementById("textContentArea").value;


    var jsonData = {filename: "test.txt", data: textboxData};
    var jsonString = JSON.stringify(jsonData);


    jQueryXMLHttpRequest = $.ajax({
        type: "POST",
        url: "default.aspx/SaveFile",
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            populateDropdown(data);

        }
    });

}





function newFile()
{

}