using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveApplicationService{

    Task<bool> AddLeave(Leave leave);

    Task<PendingLeave> GetPendingLeaves(int employeeId);

    Task<List<Leave>> GetEmployeeLeaves(int employeeId);

    Task<List<Leave>> GetEmployeeAppliedLeaves(int projectId,string status);

    Task<bool> UpdateLeaveStatus(Leave leave);

}