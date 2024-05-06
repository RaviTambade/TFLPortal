
using TFLPortal.Models;

namespace TFLPortal.Repositories.TimesheetMgmt.Operations;

public interface ITimesheetOperationsRepository
{

    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId, TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);

}