
using TFLPortal.Models;

namespace TFLPortal.Services.Interfaces;

public interface IPayrollService
{
    Task<List<SalarySlip>> GetSalaryDetails(int month,int year);
    Task<List<SalarySlip>> GetEmployeeSalaryDetails(int employeeId);
    Task<SalarySlip> GetPaidEmployeeSalaryDetails(int salaryId);
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<SalaryStructure> GetSalary(int employeeId);
    Task<MonthSalary> CalculateSalary(int employeeId,int month,int year);
    Task<bool> InsertSalary(SalarySlip salarySlip);
    Task<List<int>> GetUnPaidEmployees(int month,int year);
}   