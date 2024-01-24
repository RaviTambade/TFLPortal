
using TFLPortal.Models;

namespace TFLPortal.Services.Interfaces;

public interface IPayrollService
{
    Task<List<SalaryDetails>> GetSalaryDetails(int month,int year);

    Task<List<Salary>> GetEmployeeSalaryDetails(int employeeId);
    Task<SalaryDetails> GetPaidEmployeeSalaryDetails(int salaryId);
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<SalaryStructure> GetSalary(int employeeId);


    Task<MonthSalary> CalculateSalary(int employeeId,int month,int year);
    // Task<Salary> GetSalaryDetails(int employeeId);
    Task<bool> InsertSalary(Salary salary);
    Task<List<int>> GetUnPaidEmployees(int month,int year);
}   