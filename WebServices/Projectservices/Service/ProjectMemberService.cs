using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;

namespace PMS.Services;

public class ProjectMemberService:IProjectMemberService{
    
    private readonly IProjectMemberRepository _repo;

    public ProjectMemberService (IProjectMemberRepository repo){
        this._repo=repo;
    }

    public List<ProjectMember>GetAll()=>_repo.GetAll();
     public ProjectMember GetById(int Id)=>_repo.GetById(Id);

    public List<ProjectMemberInfo>Get(int projectId)=> _repo.Get(projectId);
     public bool Insert(ProjectMember projectMember)=>_repo.Insert(projectMember);
      public bool Update(ProjectMember projectMember)=>_repo.Update(projectMember);
      public bool Delete(int Id)=>_repo.Delete(Id);




}