using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimesheetService
{
    
    Task<List<Timesheet>> GetTimeSheetsOfEmployee(int employeeId);
    Task<Timesheet> GetTimeSheetOfEmployee(int employeeId, string date);
    Task<List<TimesheetEntry>> GetTimeSheetEntries(int timesheetId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<TimesheetEntry> GetTimeSheetEntry(int timesheetEntryId);
    Task<List<ProjectHours>> GetProjectWiseTimeSpentByEmployee(int employeeId);
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId,int year,int month);
    Task<bool> InsertTimeSheet(Timesheet timesheet);
    Task<bool> InsertTimeSheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimeSheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimeSheetEntry(int timesheetEntryId,TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimeSheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimeSheetEntries(int timesheetId);


}
