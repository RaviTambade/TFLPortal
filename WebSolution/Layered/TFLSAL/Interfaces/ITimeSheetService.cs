using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimesheetService
{
    
    Task<List<TimesheetDuration>> GetTimesheets(int employeeId,DateOnly fromDate,DateOnly toDate);
    Task<List<TimesheetViewModel>> GetTimeSheetsForApproval(int projectManagerId,DateOnly fromDate,DateOnly toDate);
    Task<Timesheet> GetTimesheet(int employeeId, DateOnly date);
    Task<TimesheetViewModel> GetTimesheet(int timesheetId);
    Task<TimesheetDetailViewModel> GetTimesheetDetail(int timesheetDetailId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId,DateOnly fromDate,DateOnly toDate);
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId,int year,int month);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetDetail(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetDetail(int timesheetDetailId,TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetDetail(int timesheetDetailId);
    Task<bool> RemoveAllTimesheetDetails(int timesheetId);
}
