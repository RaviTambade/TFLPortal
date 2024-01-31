using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using TFLPortal.Services.Interfaces;
using TFLPortal.Responses;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/payroll")]
public class PayrollController : ControllerBase
{
    private readonly IPayrollService _payrollService;
    private readonly IHRService _hrService;
    public PayrollController(
        IPayrollService payrollService,
        IHRService hrService
    )
    {
        _payrollService = payrollService;
        _hrService = hrService;
    }

    //salaries/employees/{employeeId}/month/{month}/year/{year}"
    // [HttpGet("salaries/employee/{employeeId}/month/{month}/year/{year}")]
    // public async Task<SalaryResponse> GetSalaryStructure(int employeeId,int month,int year)
    // {
    //     MonthSalaryResponse salaryStructure = await _payrollService.CalculateSalary(employeeId,month,year);
    //     Console.WriteLine(salaryStructure);
    //     Employee employee = await _hrService.GetEmployeeById(employeeId);
    //     Console.WriteLine(employee);
    //     BankAccount account = await _apiService.GetUserBankAccount(employee.UserId, "I");
    //     Console.WriteLine(account);
    //     var user = await _apiService.GetUser(employee.UserId);
    //     SalaryResponse salaryDetails = new SalaryResponse()
    //     {
    //         EmployeeId = employeeId,
    //         FirstName = user.FirstName,
    //         LastName = user.LastName,
    //         ContactNumber = user.ContactNumber,
    //         BirthDate = user.BirthDate,
    //         AccountNumber = account.AccountNumber,
    //         IFSC = account.IFSCCode,
    //         HRA = salaryStructure.HRA,
    //         MonthlyBasicsalary = salaryStructure.MonthlyBasicsalary,
    //         DA = salaryStructure.DA,
    //         LTA = salaryStructure.LTA,
    //         VariablePay = salaryStructure.VariablePay,
    //         Deduction = salaryStructure.Deduction,
    //         ConsumedPaidLeaves=salaryStructure.ConsumedPaidLeaves,
    //         WorkingDays=salaryStructure.WorkingDays,
    //         Pf=salaryStructure.Pf,
    //         Tax=salaryStructure.Tax,
    //         TotalAmount=salaryStructure.TotalAmount
    //     };

    //     return salaryDetails;
    // }
    
    

    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<MonthSalary> GetSalary(int employeeId,int month,int year){
        MonthSalary salary= await _payrollService.GetSalary(employeeId,month,year);
        return salary;
    }

    [HttpGet("salaries/paid/month/{month}/year/{year}")]
    public async Task<List<SalarySlip>> GetSalaryDetails(int month,int year)
    {
        List<SalarySlip> salaries= await _payrollService.GetPaidSalaries(month,year);
        return salaries;
    }

      [HttpGet("salaries/employees/{employeeId}")]
      public async Task<List<SalarySlip>> GetSalaries(int employeeId)
      {
        List<SalarySlip> salaries=await _payrollService.GetSalaries(employeeId);
        return salaries;
      }

      [HttpGet("employee/salary/{salaryId}")]
      public async Task<SalarySlip> GetSalary(int salaryId)
      {
        SalarySlip salary=await _payrollService.GetSalary(salaryId);
        return salary;
      }

      //"employees/salary"
    [HttpPost("employees/salarystructure")]
    public async Task<bool> AddSalaryStructure(SalaryStructure salary)
    {
        return await _payrollService.AddSalaryStructure(salary);
    }

    [HttpPost("salaries")]
    public async Task<bool> AddSalary(SalarySlip salarySlip)
    {
      bool status=await _payrollService.AddSalarySlip(salarySlip);
      return status;
    }
}
