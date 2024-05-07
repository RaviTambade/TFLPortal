using  Transflower.TFLPortal.Entities.LeaveMgmt;

namespace Transflower.TFLPortal.Repositories.LeaveMgmt.Operations.Interfaces;
public interface ILeaveOperationsRepository
{
    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
}