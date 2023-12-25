using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveManagementService
{
    Task<List<EmployeeLeave>> GetLeaveDetails(int employeeId);

    Task<List<EmployeeLeave>> GetTeamLeaveDetails(int projectId, string status);

    Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year);

    Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year);

    Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave);

    Task<bool> UpdateLeaveApplication(EmployeeLeave employeeLeave);


    
}
