using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IMemberService {



    Task<Member> GetMember(int projectId,int employeeId);
    Task<List<Member>> GetProjectMembers(int projectid);

    Task<bool> AssignMemberToProject(Member member);

    Task<bool> DeleteMemberFromProject(int id);
    
 }
