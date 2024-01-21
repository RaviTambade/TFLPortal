using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLOBL.External;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/payroll")]
public class PayrollController : ControllerBase
{
    private readonly IPayrollService _payrollService;
    private readonly IHRService _hrService;
    private readonly ExternalApiService _apiService;

    public PayrollController(
        IPayrollService payrollService,
        IHRService hrService,
        ExternalApiService apiService
    )
    {
        _payrollService = payrollService;
        _hrService = hrService;
        _apiService = apiService;
    }

    //salaries/employees/{employeeId}/month/{month}/year/{year}"
    [HttpGet("salaries/employee/{employeeId}/month/{month}/year/{year}")]
    public async Task<SalaryResponse> GetSalaryStructure(int employeeId,int month,int year)
    {
        MonthSalary salaryStructure = await _payrollService.CalculateSalary(employeeId,month,year);
        Console.WriteLine(salaryStructure);
        Employee employee = await _hrService.GetEmployeeById(employeeId);
        Console.WriteLine(employee);
        BankAccount account = await _apiService.GetUserBankAccount(employee.UserId, "I");
        Console.WriteLine(account);
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
            MonthlyBasicsalary = salaryStructure.MonthlyBasicsalary,
            DA = salaryStructure.DA,
            LTA = salaryStructure.LTA,
            VariablePay = salaryStructure.VariablePay,
            Deduction = salaryStructure.Deduction,
            ConsumedPaidLeaves=salaryStructure.ConsumedPaidLeaves,
            WorkingDays=salaryStructure.WorkingDays,
            Pf=salaryStructure.Pf,
            Tax=salaryStructure.Tax,
            TotalAmount=salaryStructure.TotalAmount
        };

        return salaryDetails;
    }
    
    //"employees/salary"
    [HttpPost("employees/addsalarystructure")]
    public async Task<bool> InsertSalaryStructure(SalaryStructure salary)
    {
        return await _payrollService.AddSalaryStructure(salary);
    }

    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<MonthSalary> CalculateSalary(int employeeId,int month,int year){
    MonthSalary salary= await _payrollService.CalculateSalary(employeeId,month,year);
    return salary;
    }
    
    //"insertsalary"
    [HttpPost("employees/addsalary")]
    public async Task<bool> InsertSalary(Salary salary)
    {
      bool status=await _payrollService.InsertSalary(salary);
      return status;
    }


    [HttpGet("employees/salary/month/{month}/year/{year}")]
    public async Task<List<SalaryDetailResponse>> GetSalaryDetails(int month,int year)
    {
        List<SalaryDetails> details= await _payrollService.GetSalaryDetails(month,year);
        string userIds = string.Join(',', details.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<SalaryDetailResponse> Salaries = new();
        foreach (var employee in details)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.EmployeeId);
            if (userDetail != null)
            {
                var salary = new SalaryDetailResponse
                {
                    Id = employee.Id,
                    FirstName = userDetail.FirstName,
                    LastName= userDetail.LastName,
                    PayDate = employee.PayDate,
                    MonthlyWorkingDays = employee.MonthlyWorkingDays,
                    Deduction = employee.Deduction,
                    Tax = employee.Tax,
                    EmployeeId = employee.EmployeeId,
                    PF=employee.PF,
                    Amount=employee.Amount,
                    UserId=employee.UserId
                };
                Salaries.Add(salary);
            }
        }
        return Salaries;
    }


      [HttpGet("employees/unpaid/month/{month}/year/{year}")]
      public async Task<List<int>> GetUnPaidEmployees(int month,int year)
      {
        List<int> userIds=await _payrollService.GetUnPaidEmployees(month,year);
        return userIds;
      }

      [HttpGet("employee/{employeeId}")]
      public async Task<List<Salary>> GetEmployeeSalaryDetails(int employeeId)
      {
        List<Salary> salaries=await _payrollService.GetEmployeeSalaryDetails(employeeId);
        return salaries;
      }

      [HttpGet("employee/salary/{salaryId}")]
      public async Task<Salary> GetPaidEmployeeSalaryDetails(int salaryId)
      {
        Salary salary=await _payrollService.GetPaidEmployeeSalaryDetails(salaryId);
        return salary;
      }
}
