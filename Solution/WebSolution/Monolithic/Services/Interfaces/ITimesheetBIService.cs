
using TFLPortal.Responses;

namespace TFLPortal.Services.Interfaces;

public interface ITimesheetBIService
{
    Task<List<MemberUtilization>> GetTaskWorkHoursOfEmployee(int employeeId,string intervalType,int projectId);
    Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId,DateOnly from,DateOnly to );
}   