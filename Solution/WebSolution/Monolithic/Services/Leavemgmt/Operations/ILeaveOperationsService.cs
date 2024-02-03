using TFLPortal.Models;

namespace TFLPortal.Services.LeaveMgmt.Operations;
public interface ILeaveOperationsService
{
    Task<bool> AddNewLeaveApplication(LeaveApplication employeeLeave);
    Task<bool> AddNewLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Update(LeaveApplication leaveApplication);
    Task<bool> UpdateLeaveAllocation(LeaveAllocation roleLeaveCount);
    Task<bool> Delete(int leaveId);
    Task<bool> DeleteLeaveMaster(int id);
}