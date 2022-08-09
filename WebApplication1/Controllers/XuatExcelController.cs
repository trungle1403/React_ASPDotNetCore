using Microsoft.AspNetCore.Mvc;
using DocumentFormat.OpenXml.Drawing.Wordprocessing;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using Cong.Class;
using ClosedXML.Excel;
using System.IO;

namespace WebApplication1.Controllers
{
    public class XuatExcelController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public XuatExcelController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public string MapPath(string path)
        {
            string[] listpath = path.Split("/");
            List<string> list = listpath.ToList();
            list.Insert(0, _webHostEnvironment.ContentRootPath);
            string rs = Path.Combine(list.ToArray());
            return rs;
        }
        public IActionResult Index()
        {
            string fileMau = MapPath("ExcelMau/Mau.xlsx");
            string fileKQ = MapPath("ExcelMau/Mau_output.xlsx");
            _LOfficeExcel _vLOfficeExcel = new _LOfficeExcel();

            System.IO.File.Copy(fileMau, fileKQ, true);
            var wb = new XLWorkbook(fileKQ);
            var ws = wb.Worksheet(1);
            ws.Range("A1:J1").Merge();
            ws.Range("A1:J1").Value = "Tiêu đề";
            ws.Range("A1:J1").Style.Fill.SetBackgroundColor(XLColor.Green).Font.SetFontColor(XLColor.Yellow).Font.SetBold(true);
            for (int i = 3; i < 10; i++)
            {
                for (int j = 1; j < 10; j++)
                {
                    ws.Cell(i, j).Value = "Ô " + i + j;
                    ws.Cell(i, j).Style
                            .Border.SetLeftBorder(XLBorderStyleValues.Thin)
                            .Border.SetRightBorder(XLBorderStyleValues.Thin)
                            .Border.SetTopBorder(XLBorderStyleValues.Thin)
                            .Border.SetBottomBorder(XLBorderStyleValues.Thin)
                            .Font.SetFontName("Times New Roman")
                            .Font.SetFontSize(13);
                }
            }
            wb.Save();
            OfficeConvert.XlsxToPDF(@"D:\asp.netcore\WebApplication1\WebApplication1\ExcelMau\Mau_output.xlsx");

            return View();
        }
    }
}
