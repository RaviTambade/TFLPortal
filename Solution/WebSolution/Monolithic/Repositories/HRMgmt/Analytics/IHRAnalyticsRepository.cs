using TFLPortal.Models;

namespace TFLPortal.Repositories.HRMgmt.Analytics;

public interface IHRAnalyticsRepository
{
    
    Task<Employee> GetEmployee(int employeeId); 
    Task<List<Employee>> GetUnPaidSalaries(int month, int year);
    Task<List<Employee>> GetEmployeesOnBench();
    List<InOutTimeRecord> GetTimeRecords();
    List<InOutTimeRecord> GetTimeRecords(int employeeId);



}