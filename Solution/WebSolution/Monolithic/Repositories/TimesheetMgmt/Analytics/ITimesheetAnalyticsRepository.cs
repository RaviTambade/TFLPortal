using Transflower.TFLPortal.Entities.TimesheetMgmt;
using Transflower.TFLPortal.Responses.TimesheetMgmt;

namespace Transflower.TFLPortal.Repositories.TimesheetMgmt.Analytics.Interfaces;

public interface ITimesheetAnalyticsRepository
{
    Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly from, DateOnly to);
    Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId, DateOnly from, DateOnly to);
    Task<Timesheet> GetTimesheet(int employeeId, DateOnly date);
    Task<Timesheet> GetTimesheet(int timesheetId);
    Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId);
    Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId);
    Task<MemberPerformence> GetWorkUtilization(int employeeId,DateOnly from, DateOnly to,int projectId);
    Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId,DateOnly from,DateOnly to );
}