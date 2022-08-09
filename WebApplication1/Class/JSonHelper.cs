using Newtonsoft.Json;
using System.Data;
using System.Globalization;

namespace WebApplication1.Class
{
    public class JSonHelper
    {
        public static string ToJson(object obj)
        {
            return JsonConvert.SerializeObject(obj);
        }

        public static object FromJson(string obj)
        {
            return JsonConvert.DeserializeObject(obj);
        }

        public static DataTable ToTable(string obj)
        {
            return JsonConvert.DeserializeObject<DataTable>(obj);
        }
    }
}