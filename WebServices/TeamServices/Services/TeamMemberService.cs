using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;

namespace PMS.Services;

public class TeamMemberService:ITeamMemberService{
    
    private readonly ITeamMemberRepository _repo;

    public TeamMemberService(ITeamMemberRepository repo){
        this._repo=repo;
    }
    public List<TeamMember>GetAll()=>_repo.GetAll();

}