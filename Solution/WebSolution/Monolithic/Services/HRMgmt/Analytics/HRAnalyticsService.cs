using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using Transflower.TFLPortal.Helpers;
using  Transflower.TFLPortal.Entities.HRMgmt;
using Transflower.TFLPortal.Services.HRMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.HRMgmt.Analytics.Interfaces;
namespace Transflower.TFLPortal.Services.HRMgmt.Analytics;

public class HRAnalyticsService : IHRAnalyticsService
{
    private static string jsonFile = "inout.json";

    private readonly IHRAnalyticsRepository _repository;

    public HRAnalyticsService(IHRAnalyticsRepository repository)
    {
        _repository=repository;
        
    }

    public async Task<Employee> GetEmployee(int employeeId)
    {
        return await _repository.GetEmployee( employeeId);      
    }

    public async Task<List<Employee>> GetUnPaidSalaries(int month, int year)
    {
        return await _repository.GetUnPaidSalaries( month,year);
    }

    public async Task<List<Employee>> GetEmployeesOnBench()
    {
       return await _repository.GetEmployeesOnBench( );
    }

    public List<InOutTimeRecord> GetTimeRecords()
    {
        return  _repository.GetTimeRecords( );
    }

     public List<InOutTimeRecord> GetTimeRecords(int employeeId)
    {
        return  _repository.GetTimeRecords(employeeId);
    }
}
