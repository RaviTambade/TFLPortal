using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignMemberToProject(int employeeId,int projectId,ProjectAllocation project);

    Task<bool> ReleaseMemberFromProject(int projectId,int employeeId);


  
    
 }