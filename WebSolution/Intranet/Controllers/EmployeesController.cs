using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.Notifications.Mail;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class EmployeesController : ControllerBase
{
    private readonly IEmployeeService _service;
    private readonly ExternalApiService _apiService;
    private readonly IPdfGeneratorService _pdfGenratorService;
    private readonly EmailService _emailService;

    public EmployeesController(
        IEmployeeService service,
        ExternalApiService apiService,
        IPdfGeneratorService pdfGenratorService,
        EmailService emailService
    )
    {
        _service = service;
        _apiService = apiService;
        _pdfGenratorService = pdfGenratorService;
        _emailService = emailService;
    }

    // [HttpGet("genratepdf")]
    // public void GenerateSalarySlip()
    // {
    // _pdfGenratorService.GenerateSalarySlip();

    // }

    [HttpGet("employee/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeDetails(employeeId: employeeId);
        var user = await _apiService.GetUser(employee.UserId);
        EmployeeResponse emp = new EmployeeResponse()
        {
            HireDate = employee.HireDate,
            Salary = employee.Salary,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            ContactNumber = user.ContactNumber
        };
        return emp;
    }

    [HttpPost("employee/salary/{employeeId}")]
    public async Task<bool> PaySalary(int employeeId)
    {
        Employee employee = await _service.GetEmployeeDetails(employeeId);
        var userAccount = await _apiService.GetUserBankAccount(
            userId: employee.UserId,
            userType: "I"
        );
        FundTransferRequestDTO request = new FundTransferRequestDTO()
        {
            FromAcct = "39025546601",
            FromIfsc = "MAHB0000286",
            ToAcct = userAccount.AccountNumber,
            ToIfsc = userAccount.IFSCCode,
            Amount = employee.Salary,
            TransactionType = "Transfer"
        };
        int transactionId = await _apiService.FundTransfer(request);

        Console.WriteLine(transactionId);

        SalaryStructureDTO? salaryDetails = await GetSalaryStructure(employeeId);
        string? filepath = _pdfGenratorService.GenerateSalarySlip(salaryDetails);
        Console.WriteLine(filepath);

        Message email = new Message()
        {
            To = new List<string>() { "sahilmankar311@gmail.com" },
            Subject = "Your Salry Slip",
            Body = "Find Your Salaryslip Attached below",
            Filepaths = new List<string>() { filepath }
        };
        await _emailService.SendEmail(email);
        return transactionId > 0;
    }

    [HttpPost("employee/salary")]
    public async Task<bool> InsertSalaryStructure(SalaryStructure salaryStructure)
    {
        bool status = await _service.InsertSalaryStructure(salaryStructure);
        return status;
    }

    [HttpGet("users/{userId}")]
    public async Task<Employee> GetEmployee(int userId)
    {
        Employee employee = await _service.GetEmployee(userId);
        return employee;
    }

    [HttpGet("salarystructure/{employeeId}")]
    public async Task<SalaryStructureDTO> GetSalaryStructure(int employeeId)
    {
        SalaryStructure salaryStructure = await _service.GetSalaryStructure(employeeId);
        Employee employee = await _service.GetEmployeeDetails(salaryStructure.EmployeeId);
        BankAccountDTO account = await _apiService.GetUserBankAccount(employee.UserId, "I");
        var user = await _apiService.GetUser(employee.UserId);
        SalaryStructureDTO salaryDetails = new SalaryStructureDTO()
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

        var filepath = _pdfGenratorService.GenerateSalarySlip(salaryDetails);
        Console.WriteLine(filepath);

      Message email = new Message()
        {
            To = new List<string>() { "sahilmankar311@gmail.com" },
            Subject = "Your Salry Slip",
            Body = "Find Your Salaryslip Attached below",
            Filepaths = new List<string>() { filepath }
        };
        await _emailService.SendEmail(email);

        return salaryDetails;
    }
}
