using Microsoft.AspNetCore.Mvc;
using Transflower.Notifications.Mail;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("[controller]")]
public class PayrollController : ControllerBase
{
    private readonly IPayrollService _payrollService;
    private readonly IHRService _hrService;
    private readonly ExternalApiService _apiService;
    // private readonly IPdfGeneratorService _pdfGenratorService;
    private readonly EmailService _emailService;

    public PayrollController(
        IPayrollService payrollService,
        IHRService hrService,
        ExternalApiService apiService,
        // IPdfGeneratorService pdfGenratorService,
        EmailService emailService
    )
    {
        _payrollService = payrollService;
        _hrService = hrService;
        _apiService = apiService;
        // _pdfGenratorService = pdfGenratorService;
        _emailService = emailService;
    }

    [HttpGet("salary/{employeeId}")]
    public async Task<SalaryResponse> GetSalaryStructure(int employeeId)
    {
        Salary salaryStructure = await _payrollService.GetSalary(employeeId);
        Employee employee = await _hrService.GetEmployeeById(salaryStructure.EmployeeId);
        BankAccountDTO account = await _apiService.GetUserBankAccount(employee.UserId, "I");
        var user = await _apiService.GetUser(employee.UserId);
        SalaryResponse salaryDetails = new SalaryResponse()
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

        // var filepath = _pdfGenratorService.GenerateSalarySlip(salaryDetails);
        // Console.WriteLine(filepath);

        // Message email = new Message()
        // {
        //     To = new List<string>() { "sahilmankar311@gmail.com" },
        //     Subject = "Your Salry Slip",
        //     Body = "Find Your Salaryslip Attached below",
        //     Filepaths = new List<string>() { filepath }
        // };
        // await _emailService.SendEmail(email);

        return salaryDetails;
    }

    [HttpPost("employee/salary")]
    public async Task<bool> InsertSalaryStructure(Salary salary)
    {
        bool status = await _payrollService.AddSalary(salary);
        return status;
    }
}
