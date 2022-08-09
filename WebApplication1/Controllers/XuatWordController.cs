using Microsoft.AspNetCore.Mvc;
using DocumentFormat.OpenXml.Drawing.Wordprocessing;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using Cong.Class;
using System.IO;

namespace WebApplication1.Controllers
{
    public class XuatWordController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public XuatWordController(IWebHostEnvironment webHostEnvironment)
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
            string ketQua = "";
            string fileMau = MapPath("App_Data/WordMau/Mau 2C-BNV-2008.docx");
            string fileXuat = MapPath("App_Data/WordMau/Mau 2C-BNV-2008_output.docx");
            System.IO.File.Copy(fileMau, fileXuat, true);
            using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(fileXuat, true))
            {
                MainDocumentPart mainPart = wordDoc.MainDocumentPart;
                Body body = wordDoc.MainDocumentPart.Document.Body;
                //repalce hoTen
                var paras = body.Elements();
                foreach (var text in body.Descendants<Text>())
                {
                    if (text.Text.Contains("_TenDonViQuanLy_"))
                    {
                        text.Text = text.Text.Replace("_TenDonViQuanLy_", "Nguyễn Hoàng Kha" + DateTime.Now.ToString("dd HH mm ss"));
                    }

                }





                string imagePath = @"C:\Users\hkit9x\Pictures\80707413.000035.jpg";

                IEnumerable<Drawing> drawings = wordDoc.MainDocumentPart.Document.Descendants<Drawing>().ToList();
                foreach (Drawing drawing in drawings)
                {
                    DocProperties dpr = drawing.Descendants<DocProperties>().FirstOrDefault();
                    //this very importent here we are replacing the image by checking the name
                    if (dpr != null && dpr.Name == "Picture 1")
                    {
                        foreach (DocumentFormat.OpenXml.Drawing.Blip b in drawing.Descendants<DocumentFormat.OpenXml.Drawing.Blip>().ToList())
                        {
                            OpenXmlPart imagePart = wordDoc.MainDocumentPart.GetPartById(b.Embed);
                            using (var writer = new BinaryWriter(imagePart.GetStream()))
                            {
                                writer.Write(System.IO.File.ReadAllBytes(imagePath));
                            }
                        }
                    }
                }







                var tables = mainPart.Document.Descendants<DocumentFormat.OpenXml.Wordprocessing.Table>().ToList();
                for (int i = 0; i < 10; i++)
                {
                    var tr = new DocumentFormat.OpenXml.Wordprocessing.TableRow();
                    var td1 = new DocumentFormat.OpenXml.Wordprocessing.TableCell();
                    td1.Append(new TableCellProperties(
                        new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Center }),
                        new Paragraph(
                            new ParagraphProperties(new Justification() { Val = JustificationValues.Left }),
                            new DocumentFormat.OpenXml.Wordprocessing.Run(
                                new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman" },
                                new RunProperties(new DocumentFormat.OpenXml.Wordprocessing.FontSize { Val = "26" }),
                                new TabChar(),
                                new DocumentFormat.OpenXml.Wordprocessing.Text("ABC" + i)
                                )
                        )
                        );

                    tr.Append(td1);


                    var td2 = new DocumentFormat.OpenXml.Wordprocessing.TableCell();
                    td2.Append(new TableCellProperties(
                        new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Center }),
                        new Paragraph(
                            new ParagraphProperties(new Justification() { Val = JustificationValues.Left }),
                            new DocumentFormat.OpenXml.Wordprocessing.Run(
                                new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman" },
                                new RunProperties(new DocumentFormat.OpenXml.Wordprocessing.FontSize { Val = "26" }),
                                new TabChar(),
                                new DocumentFormat.OpenXml.Wordprocessing.Text("CBD" + i)
                                )
                        )
                        );

                    tr.Append(td2);

                    tables[1].Append(tr);
                }
                //ThanhPhanTD = dtBienBan.Rows[0]["NDCuocHop"].ToString().Split('\n');

                wordDoc.MainDocumentPart.Document.Save();
                wordDoc.Close();
            }
            //OfficeConvert.DocxToPDF("D:\\asp.netcore\\WebApplication1\\WebApplication1\\App_Data\\WordMau\\Mau 2C-BNV-2008_output.docx");
            //if (OfficeConvert.DocxToPDF(ketQua))
            //    return ketQua.Replace("docx", "pdf");

            return View();
        }
    }
}
