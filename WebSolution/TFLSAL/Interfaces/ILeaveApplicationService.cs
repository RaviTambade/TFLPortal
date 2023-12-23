using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveApplicationService{

    Task<bool> AddLeave(Leave leave);

    Task<List<Leave>> GetEmployeeLeaves(int employeeId);

    Task<List<Leave>> GetProjectEmployeesLeavesByStatus(int projectId,string status);
    
    Task<bool> UpdateLeaveStatus(Leave leave);

    Task<List<LeaveCount>> GetMonthLeavesCount(int employeeId);

     public Task<RemainingLeaveDetails> GetPendingLeaves(int employeeId,int roleId,int year);


}