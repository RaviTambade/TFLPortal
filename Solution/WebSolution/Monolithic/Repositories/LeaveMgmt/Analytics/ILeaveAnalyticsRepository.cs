<<<<<<< HEAD
using Transflower.TFLPortal.Models;
using Transflower.TFLPortal.Responses;

namespace Transflower.TFLPortal.Repositories.LeaveMgmt.Analytics;
=======
using  Transflower.TFLPortal.Entities.LeaveMgmt;
using  Transflower.TFLPortal.Responses;

namespace Transflower.TFLPortal.Repositories.LeaveMgmt.Analytics.Interfaces{
>>>>>>> 20bea552baf4f1a09b51e1a140a92fcf3f2e420d

public interface ILeaveAnalyticsRepository
{
    Task<List<LeaveApplication>> GetLeaveApplications(); 
    Task<List<LeaveApplication>> GetLeaveApplications(DateOnly date);
    Task<List<LeaveApplication>> GetLeaveApplications(string status);
    Task<List<LeaveApplication>> GetLeaveApplications(int employeeId);
    Task<List<LeaveApplication>> GetLeaveApplications(int employeeId, string status);
    Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId, string status);
    Task<LeaveApplication> GetLeaveApplication(int id);
    Task<List<MonthlyLeaves>> GetAnnualLeavesCount(int employeeId,int year);
    Task<List<LeaveCount>> GetMonthlyLeaveCount(int employeeId,int month,int year);

    Task<AnnualLeaves> GetAnnualAvailableLeaves(int employeeId, int roleId, int year);
    Task<AnnualLeaves> GetAnnualConsumedLeaves(int employeeId, int year);
    Task<List<LeaveCount>> GetAnnualLeaves(int roleId, int year);

    Task<List<LeaveAllocation>> GetLeaveAllocations();
    Task<LeaveAllocation> GetRoleLeavesDetails(int id);
}
