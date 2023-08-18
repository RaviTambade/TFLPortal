using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;

namespace PMS.Services;

public class ProjectMemberService:IProjectMemberService{
    
    private readonly IProjectMemberRepository _repo;

    public ProjectMemberService (IProjectMemberRepository repo){
        this._repo=repo;
    }

    public async Task<IEnumerable<ProjectMember>> GetAll()=>await _repo.GetAll();
     public async Task<ProjectMember> GetById(int Id)=>await _repo.GetById(Id);

     public async Task<IEnumerable<ProjectMemberInfo>> Get(int projectId)=>await _repo.Get(projectId);
     public async Task<bool> Insert(ProjectMember projectMember)=>await _repo.Insert(projectMember);
      public async Task<bool> Update(ProjectMember projectMember)=>await _repo.Update(projectMember);
      public async Task<bool> Delete(int Id)=>await _repo.Delete(Id);




}