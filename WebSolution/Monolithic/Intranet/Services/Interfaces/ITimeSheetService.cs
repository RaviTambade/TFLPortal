using TFLPortal.Models;
using TFLPortal.Models.BI;

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
    Task<TimesheetEntry> GetTimesheetDetail(int timesheetDetailId);
    Task<List<WorkTimeUtilizationResponse>> GetActivityWiseHours(
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
    Task<bool> AddTimesheetDetail(TimesheetEntry timesheetEntry);
    Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet);
    Task<bool> UpdateTimesheetDetail(int timesheetDetailId, TimesheetEntry timesheetEntry);
    Task<bool> RemoveTimesheetDetail(int timesheetDetailId);
    Task<bool> RemoveAllTimesheetDetails(int timesheetId);
}
