using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Services.PayrollMgmt.Analytics;


public interface IPayrollAnalyticsService
{
    Task<List<SalarySlip>> GetPaidSalaries(int month,int year);
    Task<List<SalarySlip>> GetSalaries(int employeeId);
    Task<SalarySlip> GetSalary(int salaryId);
    Task<SalaryStructure> GetSalaryStructure(int employeeId);
    Task<MonthSalary> GetSalary(int employeeId,int month,int year);
  
}   