using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;
using System.Diagnostics;

namespace WDD_A7_ASPNET
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }



        [WebMethod]
        public static List<string> GetFileNames()
        {
            List<string> filenames = new List<string>();

            string filepath = HttpContext.Current.Server.MapPath("myFiles");

            string[] arrayfilenames = Directory.GetFiles(filepath);

            int i = 0;

            foreach (string s in arrayfilenames)
            {
                arrayfilenames[i] = s.Replace(filepath + @"\", "");
                ++i;
            }

            
            filenames.AddRange(arrayfilenames);  

            return filenames;
        }


        [WebMethod]
        public static string SaveFile(string filename, string data)
        {
            string result = "File Saved";

            string filepath = HttpContext.Current.Server.MapPath("myFiles");

            try
            {
                File.WriteAllText(filepath + @"\" + filename, data);
            }
            catch (Exception e)
            {
                
            }
            
            
            
            
            return result;


        }


        public static string OpenFile(string filename)
        {


            return "hi";
        }


    }
}