<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="WDD_A7_ASPNET._default" %>
<!DOCTYPE html>



<!-- 
FILE          : default.aspx
PROJECT       : WDD-A7-ASPNET
PROGRAMMER    : Balazs Karner 8646201 & Josh Braga 5895818
FIRST VERSION : 12/10/2020
DESCRIPTION   : 
    The purpose of this file is to 
-->



<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>Assignment 7 Text Editor</title>
        <link rel = "stylesheet" type = "text/css" href = "./StyleSheets/SETeditor.css" />

        <!-- 
            REFERENCE: 
            FreeLogoDesign. (2020, December). FreeLogoDesign. https://editor.freelogodesign.org/?lang=en&logo=5338059b-9ff9-40b2-bcea-b694926a91f6
        -->
        <link rel = "icon" href = "./Assets/Logo2_BlackText.png" />
    
    </head>
    <body>
        <form runat="server">
            <div>
                <!-- The navigation menu -->
                <div class="navigationBar">
                    <p class="navigationBarText">SETeditor</p>
                    <button type="button">Save</button>
                    <button type="button">Save As</button>
                    <button type="button">New</button>

                    <!-- The drop down menu for My Files -->
                    <button type="button">Open</button>
                </div>
            </div>

            <!-- Text Editing Area-->
            <textarea wrap="hard" placeholder="Write text here to begin"></textarea>>

            <!-- Site footer -->
            <div class="editorFooter">
                <!-- Company Logo -->
                <img class="footerLogo" src="./Assets/Logo2_WhiteText.png"></img>
                <!-- Corner Logo -->
                <img class="cornerLogo" src="./Assets/CornerLogo1.png"></img>

                <!-- About Section -->
                <br>
                <h6 class="footerHeading">About</h6>
                <p>The simpler, easier, text editor. SETeditor.</p>
                <br>
                <p>Start writing your dream project today without the hassle of learning a new application. 
                   SETeditor is a free for use online text editor for all your text editing needs. </p>

                <br>
                <hr>
                <p class="footerCopyright">Copyright &copy; 2020 All Rights Reserved by SETeditor.</p>
            </div>
        </form>
    </body>
</html>