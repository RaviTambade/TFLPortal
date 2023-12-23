using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveManagementService
{
    Task<List<LeaveApplication>> GetLeaveDetails(int employeeId);

    Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId, string status);

    Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year);

    Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year);

    Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication);

    Task<bool> UpdateLeaveApplication(LeaveApplication leaveApplication);
}
