using Transflower.TFLPortal.Entities.PayrollMgmt;
using Transflower.TFLPortal.Responses;

namespace Transflower.TFLPortal.Repositories.PayrollMgmt.Analytics.Interfaces;



public interface IPayrollAnalyticsRepository
{
    Task<List<SalarySlip>> GetPaidSalaries(int month,int year);
    Task<List<SalarySlip>> GetSalaries(int employeeId);
    Task<SalarySlip> GetSalary(int salaryId);
    Task<SalaryStructure> GetSalaryStructure(int employeeId);
    Task<PaySlip> GetSalary(int employeeId,int month,int year);
}   