using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IProjectMemberRepository{
 
     List<ProjectMember> GetAll();

      ProjectMember GetById(int id);

      bool Insert(ProjectMember task);

      bool Update(ProjectMember task);

      bool Delete(int id);
     
 }