using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimesheetService
{
    
    Task<List<TimesheetDuration>> GetTimesheets(int employeeId,string fromDate,string toDate);
    Task<List<TimesheetViewModel>> GetTimesheets(string status,string fromDate,string toDate);
    Task<TimesheetViewModel> GetTimesheet(int employeeId, string date);
    Task<TimesheetViewModel> GetTimesheet(int timesheetId);
    Task<List<TimesheetDetailViewModel>> GetTimesheetDetails(int timesheetId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<TimesheetDetailViewModel> GetTimesheetDetail(int timesheetDetailId);
    Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId);
    Task<int> GetEmployeeWorkingDaysInMonth(int employeeId,int year,int month);
    Task<bool> AddTimesheet(Timesheet timesheet);
    Task<bool> AddTimesheetDetail(TimesheetDetail timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetDetail(int timesheetDetailId,TimesheetDetail timesheetEntry);
    Task<bool> RemoveTimesheetDetail(int timesheetDetailId);
    Task<bool> RemoveAllTimesheetDetails(int timesheetId);


}
