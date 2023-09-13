using Transflower.PMSApp.Projects.Entities;
namespace Transflower.PMSApp.Projects.Repositories.Interfaces;
public interface IProjectRepository{
    Task<List<Project>> GetAll();
    Task<Project> GetById(int projectId);
    Task<bool> Insert(Project project);
    Task<bool> Update(Project project);
    Task<bool> Delete(int projectId);
}