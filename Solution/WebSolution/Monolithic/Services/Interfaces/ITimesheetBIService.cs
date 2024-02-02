
using TFLPortal.Responses;

namespace TFLPortal.Services.Interfaces;

public interface ITimesheetBIService
{
    Task<List<MemberUtilization>> GetWorkUtilization(int employeeId,DateOnly from, DateOnly to,int projectId);
    Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId,DateOnly from,DateOnly to );
}   