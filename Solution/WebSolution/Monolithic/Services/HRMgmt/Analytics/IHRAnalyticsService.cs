using TFLPortal.Models;
using TFLPortal.Repositories.HRMgmt.Analytics;

namespace TFLPortal.Services.HRMgmt.Analytics;

public interface IHRAnalyticsService
{
    
    Task<Employee> GetEmployee(int employeeId); 
    Task<List<Employee>> GetUnPaidSalaries(int month, int year);
    Task<List<Employee>> GetEmployeesOnBench();
    List<InOutTimeRecord> GetTimeRecords();
    List<InOutTimeRecord> GetTimeRecords(int employeeId);



}