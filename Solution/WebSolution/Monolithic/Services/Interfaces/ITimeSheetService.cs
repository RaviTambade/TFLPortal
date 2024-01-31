using TFLPortal.Models;

namespace TFLPortal.Services.Interfaces;

public interface ITimesheetService
{
    Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly from, DateOnly to);

    Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId, DateOnly from, DateOnly to);
    Task<Timesheet> GetTimesheet(int employeeId, DateOnly date);
    Task<Timesheet> GetTimesheet(int timesheetId);
    Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId);
    Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId, TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);
}
