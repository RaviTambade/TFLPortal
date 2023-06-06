using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IProjectMemberRepository{
 
     List<ProjectMember> GetAll();

     ProjectMember GetById(int id);
     List<ProjectMemberInfo>Get(int projectId);

      bool Insert(ProjectMember task);

      bool Update(ProjectMember task);

      bool Delete(int id);
     
 }