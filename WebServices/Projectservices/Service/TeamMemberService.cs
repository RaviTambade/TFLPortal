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
     public TeamMember GetById(int Id)=>_repo.GetById(Id);
     public bool Insert(TeamMember teamMember)=>_repo.Insert(teamMember);
      public bool Update(TeamMember teamMember)=>_repo.Update(teamMember);
      public bool Delete(int Id)=>_repo.Delete(Id);




}