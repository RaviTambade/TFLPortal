using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Services.TimesheetMgmt.Analytics;

public interface ITimesheetAnalyticsService
{
    Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly from, DateOnly to);
    Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId, DateOnly from, DateOnly to);
    Task<Timesheet> GetTimesheet(int employeeId, DateOnly date);
    Task<Timesheet> GetTimesheet(int timesheetId);
    Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId);
    Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId);
    Task<List<MemberUtilization>> GetWorkUtilization(int employeeId,DateOnly from, DateOnly to,int projectId);
    Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId,DateOnly from,DateOnly to );
}