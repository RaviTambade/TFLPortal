using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace Transflower.Generators;

public class PDFGenerator:IGenerator
{
    public void Generate()
    {
        var document = new PdfDocument();

        string htmlContent =
            @"
<html>
<head>
<style>
table{
width: 100%;
}
table td{line-height:25px;padding-left:15px;border:1px solid black';
}
table th{background-color:#fbc403; color:black; border:1px solid black';}
</style>

</head>
<body style='border:1px solid black'>
<div style = 'margin-bottom: 20px; margin-top: 20px; text-align: center;'>
<img src='F:\Sahil\LocalPract\pdfgenrator\tfl.jpeg' style='width:100px;height:100px;' />  
</div>
<table   >
<tr height='100px' style='background-color:white;color:black;text-align:center;font-size:24px; font-weight:600;'>
<td colspan='4'>Daliyaspirants.com Design Limited</td>
</tr>
<tr>
<th>Personel NO:</th>
<td>0123456</td>
<th>Name</th>
<td>Chandra</td>
</tr>
<!-----2 row--->
<tr>
<th>Bank</th>
<td>x0x0x0</td>
<th>Bank A/c No.</th>
<td>0x2x6x25x6</td>
</tr>
<!------3 row---->
<tr>
<th>DOB</th>
<td>23/02/xxxx</td>
<th>Lop Days</th>
<td>0</td>
</tr>
<!------4 row---->
<tr>
<th>PF No.</th>
<td>26123456</td>
<th>STD days</th>
<td>30</td>
</tr>
<!------5 row---->
<tr>
<th>Location</th>
<td>India</td>
<th>Working Days</th>
<td>30</td>
</tr>
<!------6 row---->
<tr>
<th>Department</th>
<td>IT</td>
<th>Designation</th>
<td>Designer</td>
</tr>
</table>
<tr></tr>
<br/>
<table >
<tr>
<th >Earnings</th>
<th>Amount</th>
<th >Deductions</th>
<th>Amount</th>
</tr>
<tr>
<td>Basic</td>
<td>29000</td>
<td>provident fund</td>
<td>1900</td>
</tr>
<tr>
<td>House Rent Allowance</td>
<td>2000</td>
<td>professional tax</td>
<td>600</td>
</tr>
<tr>
<td>special Allowance</td>
<td>400</td>
<td>Income tax</td>
<td>500</td>
</tr>
<tr>
<td>conveyance</td>
<td>3000</td>
</tr>
<tr>
<td>ADD Special allowance</td>
<td>2000</td>
</tr>
<tr>
<td>shift Allowance</td>
<td>1000</td>
</tr>
<tr>
<td>bonus</td>
<td>500</td>
</tr>
<tr>
<td>medical Allowance</td>
<td>600</td>
</tr>
<tr>
<th>Gross Earnings</th>
<td>Rs.38500</td>
<th >Gross Deductions</th>
<td>Rs.3000</td>
</tr>
<tr>
<td></td>
<td><strong>NET PAY</strong></td>
<td>Rs.35500</td>
<td></td>
</tr>
</table>
</body>
</html>
";
        Console.WriteLine(htmlContent);
        PdfGenerator.AddPdfPages(document, htmlContent, PageSize.A4);
        document.PageLayout = PdfPageLayout.SinglePage;
        document.Save("sahil.pdf");
    }

    public void Generate(string content, string fileName)
    {
        var document = new PdfDocument();
        PdfGenerator.AddPdfPages(document, content, PageSize.A4);
        document.PageLayout = PdfPageLayout.SinglePage;
        document.Save($"{fileName}.pdf");
    }

    
}
