using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;

public interface IHRService {

    Task<Employee> GetEmployeeById(int employeeId); 
    Task<List<Employee>> GetEmployees(string employeeIds); 
    Task<Employee> GetEmployeeByUserId(int userId); 
    Task<List<Employee>> GetUnPaidSalaries(int month,int year);

 }
