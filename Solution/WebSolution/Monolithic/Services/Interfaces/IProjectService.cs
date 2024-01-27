using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;
public interface IProjectService{

    Task<List<Project>> GetAllProjects();
    Task<Project> GetProjectDetails(int projectId);
    Task<List<Project>> GetProjectsOfEmployee(int employeeId);
    Task<List<Project>> GetAllProjectsOfProjectManager(int managerId);
    Task<bool> AddProject(Project project);
    Task<List<int>> GetAllEmployees(int projectId);

}