using TFLPortal.Models;
using TFLPortal.Responses;
namespace TFLPortal.Services.Interfaces;

public interface IPayrollService
{
    Task<List<SalarySlip>> GetPaidSalaries(int month,int year);
    Task<List<SalarySlip>> GetSalaries(int employeeId);
    Task<SalarySlip> GetSalary(int salaryId);
    Task<SalaryStructure> GetSalaryStructure(int employeeId);
    Task<MonthSalaryResponse> GetSalary(int employeeId,int month,int year);
    Task<List<int>> GetUnPaidSalaries(int month,int year);
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<bool> AddSalarySlip(SalarySlip salarySlip);

}   