using System;
using System.Web;
using WEB_DLL;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.IO;

namespace WebApplication1.Class
{
    public static class NTSSession
    {
        public static string ntsNamSuDung = "ntsNamSuDung";
        private static ISession session = new HttpContextAccessor().HttpContext.Session;


        public static string GetCurrentDatetimeMMddyyyy(string format)
        {
            return Convert.ToDateTime(DateTime.Now).ToString(format);
        }
        // Gán chuỗi kết nối vào SessionName
        public static void SetConnectionString1(string sqlConnectionString)
        {
            session.SetString(ntsEnumSessionName.ntsConnectionString1, sqlConnectionString);
        }

        // Lấy chuỗi kết nối từ SessionName
        public static string GetConnectionString1()
        {
            return session.GetString(ntsEnumSessionName.ntsConnectionString1);
        }

        // Thay đổi cơ sở dữ liệu kết nối cho chuỗi kết nối trong SessionName
        public static void ChangeConnectionString1(string sqlConnectionString, string dbNameSource, string dbNameDes)
        {
            session.SetString(ntsEnumSessionName.ntsConnectionString1, sqlConnectionString.Replace(dbNameSource, dbNameDes));
        }

        // Gán chuỗi kết nối vào SessionName
        public static void SetConnectionString2(string sqlConnectionString)
        {
            session.SetString(ntsEnumSessionName.ntsConnectionString2, sqlConnectionString);
        }

        // Lấy chuỗi kết nối từ SessionName
        public static string GetConnectionString2()
        {
            var configurationBuilder = new ConfigurationBuilder();
            string path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);
            var conStr1 = configurationBuilder.Build().GetSection("ConnectionStrings:ConnectionString2").Value;
            return conStr1;
            //return session.GetString(ntsEnumSessionName.ntsConnectionString2);
        }

        // Thay đổi cơ sở dữ liệu kết nối cho chuỗi kết nối trong SessionName
        public static void ChangeConnectionString2(string sqlConnectionString, string dbNameSource, string dbNameDes)
        {
            session.SetString(ntsEnumSessionName.ntsConnectionString2, sqlConnectionString.Replace(dbNameSource, dbNameDes));
        }

        ////Gán Mã đơn vị
        //public static void SetDonVi(DonVi value)
        //{
        //    session.SetString("donvi", value);
        //}

        ////Lấy Mã đơn vị
        //public static DonVi GetDonVi()
        //{
        //    return JsonConvert.DeserializeObject<DonVi>(session.GetString("donvi"));
        //}

        ////Gán người dùng
        //public static void SetUser(User value)
        //{
        //    session.SetString("user", value);
        //}

        ////Lấy người dùng
        //public static User GetUser()
        //{
        //    return JsonConvert.DeserializeObject<User>(session.GetString("user"));
        //}

        //Lấy năm sử dụng
        public static void SetNamSudung(string value)
        {
            session.SetString(ntsNamSuDung, value);
        }

        public static string GetNamSudung()
        {
            return session.GetString(ntsNamSuDung);
        }

        public static string GetKyBaoCao()
        {
            return session.GetString("KyBaoCao");
        }

        public static void SetKyBaoCao(string value)
        {
            session.SetString("KyBaoCao", value);
        }

        public static string GetKeyUser()
        {
            return session.GetString("KeyUser");
        }

        public static void SetKeyUser(string value)
        {
            session.SetString("KeyUser", value);
        }

        public static string GetKeyMaHoa()
        {
            return session.GetString("MaHoa");
        }

        public static void SetKeyMaHoa(string value)
        {
            session.SetString("MaHoa", value);
        }
        public static void SetNgayDauKy(string value)
        {
            session.SetString("NgayDauKy", value);
        }

        //public static string GetNgayDauKy()
        //{
        //    return NTSSession.GetDonVi().NgayDauKy.Value.ToString("dd/MM/yyyy").Substring(6, 4) + "/" + NTSSession.GetDonVi().NgayDauKy.Value.ToString("dd/MM/yyyy").Substring(3, 2) + "/" + NTSSession.GetDonVi().NgayDauKy.Value.ToString("dd/MM/yyyy").Substring(0, 2);
        //}

        public static void SetNgayCuoiKy(string value)
        {
            session.SetString("NgayCuoiKy", value);
        }

        //public static string GetNgayCuoiKy()
        //{
        //    return NTSSession.GetDonVi().NgayCuoiKy.Value.ToString("dd/MM/yyyy").Substring(6, 4) + "-" + NTSSession.GetDonVi().NgayCuoiKy.Value.ToString("dd/MM/yyyy").Substring(3, 2) + "-" + NTSSession.GetDonVi().NgayCuoiKy.Value.ToString("dd/MM/yyyy").Substring(0, 2);
        //}
        public static void SetDonViXetDuyet(string value)
        {
            session.SetString("DonViXetDuyet", value);
        }

        public static string GetDonViXetDuyet()
        {
            return session.GetString("DonViXetDuyet");
        }
    }
    public class Screen
    {
        public int width { set; get; }
        public int height { set; get; }

        public Screen(int _width, int _height)
        {
            this.width = _width;
            this.height = _height;
        }
    }
    public class KyBaoCao
    {
        public string tuNgay;
        public string denNgay;
        public string kyBaoCao;
        public string keyMaHoa;
        public KyBaoCao(string _tuNgay, string _denNgay, string _kyBaoCao, string _keyMaHoa)
        {
            this.tuNgay = _tuNgay;
            this.denNgay = _denNgay;
            this.kyBaoCao = _kyBaoCao;
            this.keyMaHoa = _keyMaHoa;
        }
    }

}