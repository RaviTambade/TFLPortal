
using TFLPortal.Models;

namespace TFLPortal.Services.Interfaces;

public interface ILeaveService
{
    Task<List<LeaveApplication>> GetLeaveApplications(); 
    Task<List<LeaveApplication>> GetLeaveApplications(DateOnly date);
    Task<List<LeaveApplication>> GetLeaveApplications(string status);
    Task<List<LeaveApplication>> GetLeaveApplications(int employeeId);
    Task<List<LeaveApplication>> GetLeaveApplications(int employeeId, string status);
    Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId, string status);
   
    Task<LeaveApplication> GetLeaveApplication(int id);
    Task<List<ConsumedLeaveDetails>> GetAnnualLeavesCount(int employeeId,int year);
    Task<ConsumedLeaveDetails> GetMonthlyLeaveCount(int employeeId,int month,int year);

    Task<LeavesCount> GetAnnualAvailableLeaves(int employeeId, int roleId, int year);
    Task<LeavesCount> GetAnnualConsumedLeaves(int employeeId, int roleId, int year);
    Task<LeavesCount> GetAnnualLeaves(int roleId, int year);

    Task<List<RoleBasedLeave>> GetRoleBasedLeaves();
    Task<RoleBasedLeave> GetRoleBasedLeaveDetails(int id);

    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewRoleBasedLeave(RoleBasedLeave roleBasedLeave);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveMaster(RoleBasedLeave roleBasedLeave);

    Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
    
}
