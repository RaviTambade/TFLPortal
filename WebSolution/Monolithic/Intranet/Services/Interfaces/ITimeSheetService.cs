using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Services.Interfaces;

public interface ITimesheetService
{
    Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly fromDate, DateOnly toDate);

    Task<List<Timesheet>> GetTimeSheetsForApproval(
        int projectManagerId,
        DateOnly fromDate,
        DateOnly toDate
    );
    Task<Timesheet> GetTimesheet(int employeeId, DateOnly date);
    Task<Timesheet> GetTimesheet(int timesheetId);
    Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId);
    Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId);
    Task<List<MemberUtilizationResponse>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    );
    Task<List<ProjectWorkHoursResponse>> GetProjectWiseTimeSpentByEmployee(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    );
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId, int year, int month);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId, TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);
}
