using Transflower.PMS.ProjectAPI.Models;

namespace Transflower.PMS.ProjectAPI.Repositories.Interfaces;
 
public interface IProjectMemberRepository{
 
     Task<IEnumerable<ProjectMember>> GetAll();
     Task<ProjectMember> GetById(int id);
     // Task<IEnumerable<ProjectMemberInfo>> Get(int projectId);
      Task<bool> Insert(ProjectMember task);
      Task<bool> Update(ProjectMember task);
      Task<bool> Delete(int id);
     
 }