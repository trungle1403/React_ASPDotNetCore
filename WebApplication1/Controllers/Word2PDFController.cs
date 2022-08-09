using Cong.Class;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
using System.IO;

namespace WebApplication1.Controllers
{
    public class Word2PDFController : Controller
    {
        public IActionResult Index()
        {
            var path = Path.Combine("D:\\asp.netcore\\WebApplication1\\WebApplication1\\App_Data\\WordMau\\Mau 2C-BNV-2008_output.docx");
            //Creates a new Word document.
            Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("MTQwNUAzMTM4MmUzNDJlMzBGT29sdENza2kyME1jUHpPNVd5enVXY1AvNVZ1SVdPQlVMNUE4R1c1M0FvPQ==");

            //Creates a new Word document.
            WordDocument wordDocument = new WordDocument();
            //Add a section & a paragraph in the empty document.
            wordDocument.EnsureMinimal();
            //Append text to the last paragraph of the document.
            wordDocument.LastParagraph.AppendText("Hello World...!");
            //Create instance for DocIORenderer for Word to PDF conversion
            DocIORenderer render = new DocIORenderer();
            //Converts Word document to PDF.
            PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
            //Release the resources used by the Word document and DocIO Renderer objects.
            render.Dispose();
            wordDocument.Dispose();
            //Saves the PDF file.
            FileStream outputStream = new FileStream(@"Ouput.pdf", FileMode.CreateNew, FileAccess.Write);
            pdfDocument.Save(outputStream);
            //Closes the instance of PDF document object.
            pdfDocument.Close();
            //Dispose the instance of FileStream.
            outputStream.Dispose();

            return View();
        }
    }
}
