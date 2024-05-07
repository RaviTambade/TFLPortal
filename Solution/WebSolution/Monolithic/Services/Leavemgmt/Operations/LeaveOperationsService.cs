using MySql.Data.MySqlClient;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Entities.LeaveMgmt;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Repositories.LeaveMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.LeaveMgmt.Operations.Interfaces;
namespace Transflower.TFLPortal.Services.LeaveMgmt.Operations;

public class LeaveOperationsService : ILeaveOperationsService
{
    private readonly ILeaveOperationsRepository _repository;

    public LeaveOperationsService(ILeaveOperationsRepository repository)
    {
      _repository=repository;
    }


    public async Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication)
    {
       return await _repository.AddNewLeaveApplication(leaveApplication);
    }


    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        return await _repository.AddNewLeaveAllocation(leaveAllocation);
       
    }

    public async Task<bool> UpdateLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        return await _repository.UpdateLeaveAllocation(leaveAllocation);
        
    }

    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
        return await _repository.Update(leaveApplication);
        
    }

    public async Task<bool> DeleteLeaveMaster(int id)
    {
        return await _repository.DeleteLeaveMaster(id);
       
    }

    public async Task<bool> Delete(int leaveId)
    {
        return await _repository.Delete(leaveId);
       
    }

}
