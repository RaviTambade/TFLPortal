using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveManagementService
{
    Task<List<EmployeeLeave>> GetAllEmployeeLeaves();    
    Task<List<RoleBasedLeave>> GetAllRoleBasedLeaves();
    Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId);
    Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId, string status);
    Task<RoleBasedLeave> GetRoleBasedLeaveDetails(int Id);
    Task<EmployeeLeave> GetLeaveDetails(int leaveId);
    Task<List<EmployeeLeave>> GetTeamLeaveDetails(int projectId, string status);
    Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year);
    Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year);
    Task<PendingLeaveDetails> GetConsumedLeaves(int employeeId, int roleId, int year);
    Task<PendingLeaveDetails> GetTotalLeaves(int roleId, int year);
    Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave);
    Task<bool> AddNewRoleBasedLeave(RoleBasedLeave roleBasedLeave);
    Task<bool> UpdateRoleBasedLeave(RoleBasedLeave roleBasedLeave);
    Task<bool> UpdateLeaveApplication(EmployeeLeave employeeLeave);
    Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave);
    Task<bool> DeleteRoleBasedLeave(int id);
    Task<bool> DeleteEmployeeLeave(int id);
    
}
