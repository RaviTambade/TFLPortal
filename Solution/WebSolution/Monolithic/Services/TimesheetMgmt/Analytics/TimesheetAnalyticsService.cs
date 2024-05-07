using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Entities.TimesheetMgmt;
using Transflower.TFLPortal.Services.TimesheetMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.TimesheetMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Responses.TimesheetMgmt;

namespace Transflower.TFLPortal.Services.TimesheetMgmt.Analytics;

public class TimesheetAnalyticsService:ITimesheetAnalyticsService 
{ 

    private readonly ITimesheetAnalyticsRepository _repository;
    
    public TimesheetAnalyticsService(ITimesheetAnalyticsRepository repository)
    {
        _repository=repository;
        
    }

    public async Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly from, DateOnly to )
    {
        return await _repository.GetTimesheets( employeeId,  from,  to );
    }

    public async Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId,DateOnly from,DateOnly to)
    {
        
        return await _repository.GetTimeSheetsForApproval( projectManagerId, from, to);
    }

    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        return await _repository.GetTimesheet( employeeId, date);
    }

    public async Task<Timesheet> GetTimesheet(int timesheetId)
    {
        return await _repository.GetTimesheet(timesheetId);
    }


    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
    {
        return await _repository.GetTimesheetEntries( timesheetId); 
    }

    public async Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId)
    {
         return await _repository.GetTimesheetEntry( timesheetEntryId);
    }

    public async Task<MemberPerformence> GetWorkUtilization(int employeeId, DateOnly from, DateOnly to, int projectId)
    {
         return await _repository.GetWorkUtilization(employeeId,from,to, projectId);
    }

    public async Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId,DateOnly from,DateOnly to)
    {
         return await _repository.GetHoursWorkedForEachProject(employeeId,from,to);
    }
}
