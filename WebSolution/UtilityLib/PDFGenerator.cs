using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace Transflower.Generators;

public class PDFGenerator:IGenerator
{
  
    public void Generate(string content, string fileName)
    {
        var document = new PdfDocument();
        PdfGenerator.AddPdfPages(document, content, PageSize.A4);
        document.PageLayout = PdfPageLayout.SinglePage;
        document.Save($"{fileName}.pdf");
    }

    
}
