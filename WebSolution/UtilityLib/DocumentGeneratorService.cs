using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using Transflower.UtilityLib.DTO;
using Transflower.UtilityLib.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class DocumentGeneratorService:IDocumentGenerator
{
    public string Generate(SalaryDTO salaryStructure)
    {
        var document = new PdfDocument();
    
        string htmlContent =
            @"
<html>
<head>
<style>
table {
    width: 100%;
}

table td {
    line-height: 25px;
    padding-left: 15px;
    border: 1px solid black;
}

table th {
    background-color: #fbc403;
    color: black;
    border: 1px solid black;
}
</style>

</head>";

htmlContent+=$@"
<body>
   <div style='border:1px solid black'>
        <div style='margin-bottom: 20px; margin-top: 20px; text-align: center;'>
            <img src='wwwroot/tfl.jpeg' style='width:100px;height:100px;' />
            <div height='100px'
                style='background-color:white;color:black;text-align:center;font-size:24px; font-weight:600'>
                Transflower Private Limited
            </div>
        </div>
        <table>
            <tr>
                <th>Contact NO:</th>
                <td>{salaryStructure.ContactNumber}</td>
                <th>Name</th>
                <td>{salaryStructure.FirstName} {salaryStructure.LastName}</td>
            </tr>
            <tr>
                <th>Bank A/c No.</th>
                <td>{salaryStructure.AccountNumber}</td>
                <th>IFSC</th>
                <td>{salaryStructure.IFSC}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>{salaryStructure.BirthDate}</td>
                <th></th>
                <td></td>
            </tr>
        </table>
        <br />
        <table>
            <tr>
                <th>Earnings</th>
                <th>Amount</th>
                <th>Deductions</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>Basic salary</td>
                <td>{salaryStructure.BasicSalary}</td>
                <td>provident fund</td>
                <td>1900</td>
            </tr>
            <tr>
                <td>House Rent Allowance</td>
                <td>{salaryStructure.HRA}</td>
                <td>Daily Allowance</td>
                <td>{salaryStructure.DA}</td>
            </tr>
            <tr>
                <td>Leave Travel Allowance</td>
                <td>{salaryStructure.LTA}</td>
                <td>Variable Pay</td>
                <td>{salaryStructure.VariablePay}</td>
            </tr>
            <tr>
                <td>Deduction</td>
                <td>{salaryStructure.Deduction}</td>
            </tr>
            <tr>
                <td><strong>NET PAY</strong></td>
                <td>Rs.35500</td>
            </tr>
        </table>
    </div>";


string? currentDate=DateTime.Now.ToString().Replace(" ","").Replace("-","").Replace(":","");
string filepath="wwwroot/Documents/"+ salaryStructure.FirstName+""+salaryStructure.LastName+""+currentDate+".pdf";
Console.WriteLine("==>"+filepath);
        PdfGenerator.AddPdfPages(document, htmlContent, PageSize.A4);
    
        document.PageLayout = PdfPageLayout.SinglePage;
        document.Save(filepath);

        return filepath;
    }

   

}
