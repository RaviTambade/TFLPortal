
using TFLPortal.Models;
using TFLPortal.Responses;

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
    Task<List<ConsumedLeaveDetailResponse>> GetAnnualLeavesCount(int employeeId,int year);
    Task<List<ConsumedLeaveDetailResponse>> GetMonthlyLeaveCount(int employeeId,int month,int year);

    Task<LeavesCountResponse> GetAnnualAvailableLeaves(int employeeId, int roleId, int year);
    Task<LeavesCountResponse> GetAnnualConsumedLeaves(int employeeId, int roleId, int year);
    Task<LeavesCountResponse> GetAnnualLeaves(int roleId, int year);

    Task<List<RoleLeavesCount>> GetRoleLeavesCount();
    Task<RoleLeavesCount> GetRoleLeavesDetails(int id);

    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewRoleLeavesCount(RoleLeavesCount roleLeaveCount);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveMaster(RoleLeavesCount roleLeaveCount);

    Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
    
}
