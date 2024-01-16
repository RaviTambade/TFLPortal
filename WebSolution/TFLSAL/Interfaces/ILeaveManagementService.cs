using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveManagementService
{
    Task<List<EmployeeLeaveDetails>> GetAllEmployeeLeaves();    
    Task<List<RoleBasedLeave>> GetAllRoleBasedLeaves();
    Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId);
    Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId, string status);
    Task<RoleBasedLeave> GetRoleBasedLeaveDetails(int Id);
    Task<List<EmployeeLeaveDetails>> GetLeaveDetailsByDate(string date);
    Task<EmployeeLeaveDetails> GetLeaveDetails(int leaveId);
    Task<List<EmployeeLeaveDetails>> GetLeaveDetails(string leaveStatus);
    Task<List<EmployeeLeaveDetails>> GetTeamLeaveDetails(int projectId, string status);
    Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year);
    Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year);
    Task<PendingLeaveDetails> GetConsumedLeaves(int employeeId, int roleId, int year);
    Task<PendingLeaveDetails> GetTotalLeaves(int roleId, int year);
    Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave);
    Task<bool> AddNewRoleBasedLeave(RoleBasedLeave roleBasedLeave);
    Task<bool> UpdateRoleBasedLeave(RoleBasedLeave roleBasedLeave);
    Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus);
    Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave);
    Task<bool> DeleteRoleBasedLeave(int id);
    Task<bool> DeleteEmployeeLeave(int id);
    
}
