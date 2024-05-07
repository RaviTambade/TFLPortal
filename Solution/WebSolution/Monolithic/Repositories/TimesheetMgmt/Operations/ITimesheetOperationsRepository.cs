using Transflower.TFLPortal.Entities.TimesheetMgmt;

namespace Transflower.TFLPortal.Repositories.TimesheetMgmt.Operations.interfaces;

public interface ITimesheetOperationsRepository
{

    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId, TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);

}