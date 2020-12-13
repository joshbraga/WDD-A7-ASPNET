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
                Logger.Log(e.ToString());
                result = "error";
            }
            
            
            
            
            return result;


        }

        [WebMethod]
        public static KeyValuePair<string, string> OpenFile(string filename)
        {
            KeyValuePair<string, string> returnData;

            string filepath = HttpContext.Current.Server.MapPath("myFiles");

            filepath = filepath + @"\" + filename;

            if (File.Exists(filepath))
            {
                string data = File.ReadAllText(filepath);
                returnData = new KeyValuePair<string, string>("success", data);
            }
            else
            {
                returnData = new KeyValuePair<string, string>("fail", "");
            }

            return returnData;

        }
    }
}