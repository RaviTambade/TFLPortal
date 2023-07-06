using ProjectAPI.Models;

namespace ProjectAPI.Repository.Interface;
public interface IProjectsRepository
{

    Task<IEnumerable<Project>> GetAll();
    Task<Project> GetById(int projId);
    Task<Project> Get(string name);
    Task<bool> Insert(Project projects);
    Task<bool> Update(Project projects);
    Task<bool> Delete(int projId);
    Task<IEnumerable<Project>> GetByProject(Date date);
}