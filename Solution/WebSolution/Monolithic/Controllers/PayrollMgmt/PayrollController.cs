using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Entities.PayrollMgmt;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Services.PayrollMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.PayrollMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Controllers.PayrollMgmt;

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
    public async Task<PaySlip> GetSalary(int employeeId,int month,int year){
        PaySlip salary= await _analyticsSvc.GetSalary(employeeId,month,year);
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
      List<SalarySlip> employeeSalaries=await _analyticsSvc.GetSalaries(employeeId);
      return employeeSalaries;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("employee/salary/{salaryId}")]
    public async Task<SalarySlip> GetSalarySlip(int salaryId)
    {
      SalarySlip salary=await _analyticsSvc.GetSalary(salaryId);
      return salary;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPost("employees/salarystructure")]
    public async Task<bool> InsertPayPackage(SalaryStructure salary)
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
