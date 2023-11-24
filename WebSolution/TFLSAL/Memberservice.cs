using Transflower.TFLPortal.TFLDAL.Repositories.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class MemberService : IMemberService
{
    private readonly IMemberRepository _repository;

    public MemberService(IMemberRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        return await _repository.GetProjectMembers(projectId);
    }
}
