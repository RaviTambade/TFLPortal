using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignMemberToProject(int employeeId,int projectId);

    Task<bool> ReleaseMemberFromProject(Member member);
  
    
 }