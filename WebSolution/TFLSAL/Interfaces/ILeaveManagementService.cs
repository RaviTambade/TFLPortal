using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveManagementService
{
    Task<List<EmployeeLeave>> GetAllEmployeeLeaves();    
    Task<List<RoleBasedLeave>> GetAllRoleBasedLeaves();
    Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId);
    Task<EmployeeLeave> GetLeaveDetails(int leaveId);
    Task<List<EmployeeLeave>> GetTeamLeaveDetails(int projectId, string status);
    Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year);
    Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year);

    Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave);

    Task<bool> UpdateLeaveApplication(EmployeeLeave employeeLeave);

    Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave);
    Task<bool> DeleteEmployeeLeave(int id);
    
}
