using ProjectAPI.Models;

namespace ProjectAPI.Repository.Interface;
public interface IProjectsRepository
{

    List<Project> GetAll();
    Project GetById(int projId);
    Project Get(string name);
    bool Insert(Project projects);
    bool Update(Project projects);
    bool Delete(int projId);
    List<Project> GetByProject(Date date);
}