using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;
public interface IProjectService{

    Task<List<Project>> GetAllProjects();
    Task<Project> GetProject(int projectId);
    Task<List<Project>> GetAllCurrentProjects(int memberId);
    Task<bool> AddProject(Project project);

}