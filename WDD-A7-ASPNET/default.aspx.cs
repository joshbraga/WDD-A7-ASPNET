using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WDD_A7_ASPNET
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void Selection_Change(Object sender, EventArgs e)
        {
            textBox.Text = "Hello";
            // Set the background color for days in the Calendar control
            // based on the value selected by the user from the 
            // DropDownList control.


        }

    }
}