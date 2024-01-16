
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IPayrollService
{
    Task<List<SalaryDetails>> GetSalaryDetails(int month,int year);
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<SalaryStructure> GetSalary(int employeeId);
    Task<MonthSalary> CalculateSalary(int employeeId,int month,int year);
    // Task<Salary> GetSalaryDetails(int employeeId);
    Task<bool> InsertSalary(Salary salary);
    Task<List<int>> GetUnPaidEmployees(int month,int year);
}   