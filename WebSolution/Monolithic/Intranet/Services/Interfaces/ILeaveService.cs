
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
    Task<List<ConsumedLeaveResponse>> GetAnnualLeavesCount(int employeeId,int year);
    Task<List<ConsumedLeaveResponse>> GetMonthlyLeaveCount(int employeeId,int month,int year);

    Task<LeavesCountResponse> GetAnnualAvailableLeaves(int employeeId, int roleId, int year);
    Task<LeavesCountResponse> GetAnnualConsumedLeaves(int employeeId, int roleId, int year);
    Task<LeavesCountResponse> GetAnnualLeaves(int roleId, int year);

    Task<List<LeaveAllocation>> GetLeaveAllocation();
    Task<LeaveAllocation> GetRoleLeavesDetails(int id);

    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveMaster(LeaveAllocation roleLeaveCount);

    Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
    
}
