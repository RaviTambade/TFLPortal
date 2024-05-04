using TFLPortal.Models;

namespace TFLPortal.Repositories.LeaveMgmt.Operations;
public interface ILeaveOperationsRepository
{
    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
}