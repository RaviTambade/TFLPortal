using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Helpers;
using TFLPortal.Services.PayrollMgmt.Analytics;
using TFLPortal.Services.PayrollMgmt.Operations;

namespace TFLPortal.Controllers;

[ApiController]
[Route("/api/payroll")]
public class PayrollController : ControllerBase
{
   private readonly IPayrollAnalyticsService _analyticsSvc;
   private readonly IPayrollOperationsService _operationsSvc;

    public PayrollController(IPayrollAnalyticsService analyticsSvc, IPayrollOperationsService operationsSvc)
    {
        _analyticsSvc = analyticsSvc;
        _operationsSvc = operationsSvc;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<MonthSalary> GetSalary(int employeeId,int month,int year){
        MonthSalary salary= await _analyticsSvc.GetSalary(employeeId,month,year);
        return salary;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("salaries/paid/month/{month}/year/{year}")]
    public async Task<List<SalarySlip>> GetSalaryDetails(int month,int year)
    {
        List<SalarySlip> salaries= await _analyticsSvc.GetPaidSalaries(month,year);
        return salaries;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("salaries/employees/{employeeId}")]
    public async Task<List<SalarySlip>> GetSalaries(int employeeId)   
    {
      List<SalarySlip> salaries=await _analyticsSvc.GetSalaries(employeeId);
      return salaries;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("employee/salary/{salaryId}")]
    public async Task<SalarySlip> GetSalary(int salaryId)
    {
      SalarySlip salary=await _analyticsSvc.GetSalary(salaryId);
      return salary;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPost("employees/salarystructure")]
    public async Task<bool> AddSalaryStructure(SalaryStructure salary)
    {
        return await _operationsSvc.AddSalaryStructure(salary);
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPost("salaries")]
    public async Task<bool> AddSalary(SalarySlip salarySlip)
    {
      bool status=await _operationsSvc.AddSalarySlip(salarySlip);
      return status;
    }
}
