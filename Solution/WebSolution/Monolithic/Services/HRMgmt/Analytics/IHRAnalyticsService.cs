using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Services.HRMgmt.Analytics;

public interface IHRAnalyticsService
{
    
    Task<Employee> GetEmployee(int employeeId); 
    Task<List<Employee>> GetUnPaidSalaries(int month, int year);
    Task<List<Employee>> GetEmployeesOnBench();


}