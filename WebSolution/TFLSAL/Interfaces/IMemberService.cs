using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IMemberService {

    Task<List<Member>> GetProjectMembers(int projectId);
 }
