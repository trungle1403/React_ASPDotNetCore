using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using WebApplication1.Class;
using WebApplication1.Models;
using Cong.Class;
using ClosedXML.Excel;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
using Syncfusion.DocIO;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public HomeController(IWebHostEnvironment webHostEnvironment, ILogger<HomeController> logger)
        {
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }

        public IActionResult Index()
        {
            //NTSSession.SetConnectionString2(@"Data Source=.\EXPRESS;Initial Catalog=CCVC2022;Integrated Security=True");

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public string GetAll()
        {
            ExecPermiss ep = new ExecPermiss();
            try
            {
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Proc_GetAll_TonGiao", null).Tables[0];
                var customerData = duLieu.AsEnumerable();
                ep.Result = duLieu;
                return JSonHelper.ToJson(ep);
            }
            catch (Exception ex)
            {
                ep.Err = true;
                ep.Logs = ex.Message.ToString();
                ep.Msg = "Thao tác thất bại";
                return JSonHelper.ToJson(ep);
            }
        }

        [HttpPost]
        public string LuuThongTin([FromBody] MyModel myModel)
        {
            object[] data = myModel.data;
            string fun = "";

            if (data[5].ToString() == "them")
            {
                fun = "Insert_TonGiao";
            }
            else
            {
                fun = "Update_TonGiao";
            }

            try
            {
                SqlParameter[] para = {
                    new SqlParameter("@TonGiaoCode", data[0].ToString()),
                    new SqlParameter("@TenTonGiao", data[1].ToString()),
                    new SqlParameter("@DienGiai", data[2].ToString()),
                    new SqlParameter("@NgungSD", DungChung.NormalizationBoolean(data[3].ToString())),
                     new SqlParameter("@TonGiaoID", DungChung.NormalizationGuid(data[4].ToString())),
                };

                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), fun, para).Tables[0];
                //Returning Json Data
                if (data[5].ToString() == "them")
                {
                    return JSonHelper.ToJson("1_Thêm mới dữ liệu thành công!");
                }
                else
                {
                    return JSonHelper.ToJson("1_Cập nhật dữ liệu thành công!");
                }
            }
            catch (Exception ex)
            {
                return JSonHelper.ToJson("0_Thêm mới dữ liệu không thành công!");
            }
        }

        [HttpPost]
        public async Task<IActionResult> XoaTonGiao([FromBody] MyModel myModel)
        {
            try
            {
                string ma = myModel.ma;
                SqlParameter[] para = {
                    new SqlParameter("@TonGiaoID", DungChung.NormalizationGuid(ma)),
                };
                DataSet duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Delete_TonGiao", para);
                //Returning Json Data

                return Ok(JSonHelper.ToJson("1_Xóa dữ liệu thành công!"));

            }
            catch (Exception ex)
            {
                return Problem(JSonHelper.ToJson("0_Xóa dữ liệu không thành công!"));
            }
        }
        [HttpPost]
        public string LoadDuLieuSua([FromBody] MyModel myModel)
        {
            try
            {
                string ma = myModel.ma;
                SqlParameter[] para = {
                    new SqlParameter("@TonGiaoID",DungChung.NormalizationGuid(ma)),
                };
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Proc_GetTonGiaoByID", para).Tables[0];
                //Returning Json Data

                return JSonHelper.ToJson(duLieu);

            }
            catch (Exception ex)
            {
                return JSonHelper.ToJson(new DataTable());
            }
        }

        [HttpPost]
        public string GetMaTuTang()
        {
            try
            {
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), CommandType.Text, @"select top 1 TonGiaoCode + 1 as maxcode from TonGiao order by TonGiaoCode desc ").Tables[0];
                return JSonHelper.ToJson(duLieu);

            }
            catch (Exception ex)
            {
                return JSonHelper.ToJson(new DataTable());
            }
        }


        public string MapPath(string path)
        {
            string[] listpath = path.Split("/");
            List<string> list = listpath.ToList();
            list.Insert(0, _webHostEnvironment.ContentRootPath);
            string rs = Path.Combine(list.ToArray());
            return rs;
        }
        [HttpPost]
        public string XuatExcel()
        {
            string fileMau = MapPath("AppData/ExcelMau/MauExcel.xlsx");
            string fileMoi = "Files/Excel/MauExcel" + DateTime.Now.ToString("ddMMyyyyHHmmss") + ".xlsx";
            string fileKQ = MapPath("wwwroot/" + fileMoi);
            _LOfficeExcel _vLOfficeExcel = new _LOfficeExcel();

            System.IO.File.Copy(fileMau, fileKQ, true);
            var wb = new XLWorkbook(fileKQ);
            var ws = wb.Worksheet(1);
            //ws.Range("A1:J1").Merge();
            //ws.Range("A1:J1").Value = "Tiêu đề";
            //ws.Range("A1:J1").Style.Fill.SetBackgroundColor(XLColor.Green).Font.SetFontColor(XLColor.Yellow).Font.SetBold(true);
            DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Proc_GetAll_TonGiao", null).Tables[0];
            int vDongXuat = 3;
            string[] mang = { "TonGiaoCode", "TenTonGiao", "DienGiai", "NgungSD" };
            for (int i = 0; i < duLieu.Rows.Count; i++)
            {
                DataRow row = duLieu.Rows[i];
                for (int j = 0; j < 4; j++)
                {
                    if (j > 2)
                    {
                        ws.Cell(i + vDongXuat, 4).Value = row[mang[j]].ToString() == "False" ? "" : "Ngưng sử dụng";
                        ws.Cell(i + vDongXuat, 4).Style.Alignment.SetHorizontal(XLAlignmentHorizontalValues.Center);
                    }
                    else
                    {
                        ws.Cell(i + vDongXuat, j + 1).Value = "'" + row[mang[j]].ToString();
                    }
                    ws.Cell(i + vDongXuat, j + 1).Style
                            .Border.SetLeftBorder(XLBorderStyleValues.Thin)
                            .Border.SetRightBorder(XLBorderStyleValues.Thin)
                            .Border.SetTopBorder(XLBorderStyleValues.Thin)
                            .Border.SetBottomBorder(XLBorderStyleValues.Thin)
                            .Font.SetFontName("Times New Roman")
                            .Font.SetFontSize(13);
                }
            }
            wb.Save();
            //OfficeConvert.XlsxToPDF(@"D:\asp.netcore\WebApplication1\WebApplication1\ExcelMau\Mau_output.xlsx");
            XlxsToPDF2(fileKQ);
            return JSonHelper.ToJson(fileMoi);
        }


        public void XlxsToPDF2(string file)
        {
            string xlsxFile = MapPath(file);
            //Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("MTQwNUAzMTM4MmUzNDJlMzBGT29sdENza2kyME1jUHpPNVd5enVXY1AvNVZ1SVdPQlVMNUE4R1c1M0FvPQ==");
            //GemBox.Spreadsheet.SpreadsheetInfo.SetLicense("ETZX-IT28-33Q6-1HA2");
            //int agg = 1;
            using (ExcelEngine excelEngine = new ExcelEngine())
            {
                IApplication application = excelEngine.Excel;
                //application.DefaultVersion = ExcelVersion.Xlsx;
                FileStream excelStream = new FileStream(xlsxFile, FileMode.Open, FileAccess.Read);
                IWorkbook workbook = application.Workbooks.Open(excelStream);
                IWorksheet worksheet = workbook.Worksheets[0];

                //Initialize XlsIO renderer.
                XlsIORenderer renderer = new XlsIORenderer();

                //Convert Excel document into PDF document 
                PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);

                Stream stream = new FileStream(file + ".pdf", FileMode.Create, FileAccess.ReadWrite);
                pdfDocument.Save(stream);

                excelStream.Dispose();
                stream.Dispose();
            }
        }

        [HttpPost]
        public string GetAllCauhinhBang([FromBody] MyModel myModel)
        {
            ExecPermiss ep = new ExecPermiss();
            try
            {
                string Menu = myModel.Menu;
                string Bang = myModel.Bang;
                SqlParameter[] para = {
                    new SqlParameter("@BangID",DungChung.NormalizationGuid(Bang)),
                    new SqlParameter("@MenuID",DungChung.NormalizationGuid(Menu)),
                };
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Proc_GetAll_cauhinhTonGiao", para).Tables[0];
                var customerData = duLieu.AsEnumerable();
                ep.Result = duLieu;
                return JSonHelper.ToJson(ep);
            }
            catch (Exception ex)
            {
                ep.Err = true;
                ep.Logs = ex.Message.ToString();
                ep.Msg = "Thao tác thất bại";
                return JSonHelper.ToJson(ep);
            }
        }
        [HttpPost]
        public string DoiTenCot([FromBody] MyModel myModel)
        {
            ExecPermiss ep = new ExecPermiss();
            try
            {
                string ma = myModel.ma;
                string Ten = myModel.Ten;
                SqlParameter[] para = {
                    new SqlParameter("@Ma",DungChung.NormalizationGuid(ma)),
                    new SqlParameter("@TenThayThe",Ten.ToString()),
                };
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Update_TenCot", para).Tables[0];
                return JSonHelper.ToJson("1");
            }
            catch (Exception ex)
            {
                return JSonHelper.ToJson("0");
            }
        }
        [HttpPost]
        public string UpdateSTTCot([FromBody] MyModel myModel)
        {
            ExecPermiss ep = new ExecPermiss();
            try
            {
                string STT = myModel.STT;
                string HienThi = myModel.HienThi;
                string ma = myModel.ma;


                SqlParameter[] para = {
                    new SqlParameter("@Ma",DungChung.NormalizationGuid(ma)),
                    new SqlParameter("@HienThi",HienThi.ToString()),
                    new SqlParameter("@STT",STT.ToString()),
                };
                DataTable duLieu = SqlHelper.ExecuteDataset(NTSSession.GetConnectionString2(), "Update_HienThi", para).Tables[0];
                return JSonHelper.ToJson("1");
            }
            catch (Exception ex)
            {
                return JSonHelper.ToJson("0");
            }
        }
    }
    public class MyModel
    {
        public string ma { get; set; }
        public string Menu { get; set; }
        public string Bang { get; set; }
        public object[] data { get; set; }
        public string Ten { get; set; }
        public string HienThi { get; set; }
        public string STT { get; set; }
    }
}