using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IProjectService{

    Task<List<Project>> GetAllProjects();
    Task<Project> GetProjectDetails(int projectId);
    Task<List<Project>> GetProjectsOfEmployee(int employeeid);
    Task<bool> AddProject(Project project);

}