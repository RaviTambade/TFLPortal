using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimesheetService
{
    
    Task<List<Timesheet>> GetTimesheetsOfEmployee(int employeeId);
    Task<Timesheet> GetTimesheetOfEmployee(int employeeId, string date);
    Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId);
    Task<List<TimesheetHours>> GetProjectWiseTimeSpentByEmployee(int employeeId);
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId,int year,int month);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId,TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);


}
