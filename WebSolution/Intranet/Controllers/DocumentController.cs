using Microsoft.AspNetCore.Mvc;
using Transflower.Notifications.Mail;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.UtilityLib.Content;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/documents")]
public class DocumentController : ControllerBase
{
    private readonly IPayrollService _payrollService;
    private readonly IHRService _hrService;
    private readonly ExternalApiService _apiService;
    private readonly EmailService _emailService;

    public DocumentController(
        IPayrollService payrollService,
        IHRService hrService,
        ExternalApiService apiService,
        EmailService emailService
    )
    {
        _payrollService = payrollService;
        _hrService = hrService;
        _apiService = apiService;
        _emailService = emailService;
    }

    [HttpGet("salaryslip/employees/{employeeId}")]
    public async Task<IActionResult> GenrateSalarySlip(int employeeId)
    {
        Salary salaryStructure = await _payrollService.GetSalary(employeeId);
        Employee employee = await _hrService.GetEmployeeById(salaryStructure.EmployeeId);
        BankAccountDTO account = await _apiService.GetUserBankAccount(employee.UserId, "I");
        var user = await _apiService.GetUser(employee.UserId);
        SalarySlipDocumentContent salaryDetails = new SalarySlipDocumentContent()
        {
            EmployeeId = employeeId,
            FirstName = user.FirstName,
            LastName = user.LastName,
            ContactNumber = user.ContactNumber,
            BirthDate = user.BirthDate,
            AccountNumber = account.AccountNumber,
            IFSC = account.IFSCCode,
            HRA = salaryStructure.HRA,
            BasicSalary = salaryStructure.BasicSalary,
            DA = salaryStructure.DA,
            LTA = salaryStructure.LTA,
            VariablePay = salaryStructure.VariablePay,
            Deduction = salaryStructure.Deduction
        };

        DocumentGenerator generator = new DocumentGenerator();
        generator.GenerateSalarySlip(salaryDetails);
        return Ok("Document Genrated Suceessfully");
    }


     [HttpGet("download")]
    public ActionResult DownloadDocument(){
    string filePath = "wwwroot/Documents/DadabhauNavle18122023130430.pdf";
    string fileName = "Salary.pdf";
    byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);
    return File(fileBytes, "application/force-download", fileName); 
    }
}
