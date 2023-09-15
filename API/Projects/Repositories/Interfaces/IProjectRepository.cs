using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Models;
namespace Transflower.PMSApp.Projects.Repositories.Interfaces;
public interface IProjectRepository{
    Task<List<Project>> GetAll();
    Task<Project> GetById(int projectId);
    Task<List<ProjectList>> GetProjects();
    Task<bool> Insert(Project project);
    Task<bool> Update(Project project);
    Task<bool> Delete(int projectId);
}