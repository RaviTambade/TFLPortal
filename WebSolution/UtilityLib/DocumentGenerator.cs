using PdfSharpCore;
using PdfSharpCore.Drawing;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using Transflower.UtilityLib.Content;
using Transflower.UtilityLib.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class DocumentGenerator:IDocumentGenerator
{
    public string GenerateSalarySlip(SalarySlipDocumentContent salaryContent)
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
                <td>{salaryContent.ContactNumber}</td>
                <th>Name</th>
                <td>{salaryContent.FirstName} {salaryContent.LastName}</td>
            </tr>
            <tr>
                <th>Bank A/c No.</th>
                <td>{salaryContent.AccountNumber}</td>
                <th>IFSC</th>
                <td>{salaryContent.IFSC}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>{salaryContent.BirthDate}</td>
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
                <td>{salaryContent.BasicSalary}</td>
                <td>provident fund</td>
                <td>1900</td>
            </tr>
            <tr>
                <td>House Rent Allowance</td>
                <td>{salaryContent.HRA}</td>
                <td>Daily Allowance</td>
                <td>{salaryContent.DA}</td>
            </tr>
            <tr>
                <td>Leave Travel Allowance</td>
                <td>{salaryContent.LTA}</td>
                <td>Variable Pay</td>
                <td>{salaryContent.VariablePay}</td>
            </tr>
            <tr>
                <td>Deduction</td>
                <td>{salaryContent.Deduction}</td>
            </tr>
            <tr>
                <td><strong>NET PAY</strong></td>
                <td>Rs.35500</td>
            </tr>
        </table>
    </div>";


string currentDate=DateOnly.FromDateTime(DateTime.Now).ToString().Replace("-","_");

string filepath="wwwroot/SalarySlips/"+ salaryContent.EmployeeId+"_"+currentDate+".pdf";

        PdfGenerator.AddPdfPages(document, htmlContent, PageSize.A4);    
        document.Save(filepath);
        return filepath;
    }
}
