using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimesheetService
{
    
    Task<List<Timesheet>> GetTimesheets(int employeeId);
    Task<Timesheet> GetTimesheet(int employeeId, string date);
    Task<List<TimesheetDetail>> GetTimesheetEntries(int timesheetId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<TimesheetDetail> GetTimesheetEntry(int timesheetEntryId);
    Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId);
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId,int year,int month);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetEntry(TimesheetDetail timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetEntry(int timesheetEntryId,TimesheetDetail timesheetEntry);
    Task<bool> RemoveTimesheetEntry(int timesheetEntryId);
    Task<bool> RemoveAllTimesheetEntries(int timesheetId);


}
