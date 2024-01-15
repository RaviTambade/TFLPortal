using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLOBL.External;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class HRController : ControllerBase
{
    private readonly IHRService _service;
    private readonly IPayrollService _payrollService;
    private readonly ExternalApiService _apiService;

    public HRController(IHRService service, ExternalApiService apiService,IPayrollService payrollService)
    {
        _service = service;
        _apiService = apiService;
        _payrollService=payrollService;
    }

    [HttpGet("employee/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeById(employeeId);
        User? user = await _apiService.GetUser(employee.UserId);
        if (user == null)
        {
            return new EmployeeResponse();
        }
        EmployeeResponse emp = new EmployeeResponse()
        {
            HireDate = employee.HireDate,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Gender = user.Gender,
            ContactNumber = user.ContactNumber,
            ImageUrl = user.ImageUrl,
            BirthDate = user.BirthDate,
            EmployeeId = employee.Id,
            UserId = user.Id,
            AadharId=user.AadharId
        };
        return emp;
    }


    [HttpPost("employee/salary/{employeeId}/month/{month}/year/{year}")]
    public async Task<bool> PaySalary(int employeeId,int month,int year)
    {
        MonthSalary salaryStructure = await _payrollService.CalculateSalary(employeeId,month,year);
        Salary salary = new Salary{
            EmployeeId=employeeId,
            PayDate=DateTime.Now,
            MonthlyWorkingDays=salaryStructure.WorkingDays,
            Deduction=salaryStructure.Deduction,
            Tax=salaryStructure.Tax,
            PF=salaryStructure.Pf,
            Amount=salaryStructure.TotalAmount
        };
        if(salary!=null){
           await _payrollService.InsertSalary(salary);
        } 
        Employee employee = await _service.GetEmployeeById(employeeId);
        var userAccount = await _apiService.GetUserBankAccount(
            userId: employee.UserId,
            userType: "I"
        );
        FundTransferRequest request = new FundTransferRequest()
        {
            FromAcct = "39025546601",
            FromIfsc = "MAHB0000286",
            ToAcct = userAccount.AccountNumber,
            ToIfsc = userAccount.IFSCCode,
            Amount = salaryStructure.TotalAmount,
            TransactionType = "Transfer"
        };
        int transactionId = await _apiService.FundTransfer(request);
        return transactionId > 0;
    }



    [HttpGet("users/{userId}")]
    public async Task<Employee> GetEmployee(int userId)
    {
        Employee employee = await _service.GetEmployeeByUserId(userId);
        return employee;
    }

    [HttpGet("employeeIds/{employeeIds}")]
    public async Task<List<Employee>> GetEmployees(string employeeIds)
    {
        List<Employee> employees = await _service.GetEmployees(employeeIds);
        return employees;
    }
}
