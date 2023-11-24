using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLDAL.Repositories.Interfaces;

public interface IMemberRepository
{
    Task<List<Member>> GetProjectMembers(int projectId);
}
