using TFLPortal.Models;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Repositories.ProjectMgmt.Analytics;

public interface IProjectAnalyticsRepository
{
    Task<List<Project>> GetAllProjects();
    Task<Project> GetProject(int projectId);
    Task<ProjectAllocation> GetProjectMember(int projectId,int memberId);
    Task<List<Project>> GetAllCurrentProjects(int memberId);
    Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId, DateOnly date);
    Task<Sprint> GetSprint(int sprintId);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);

    Task<SprintTask> GetSprintOfTask(int taskId);
    Task<List<ProjectAllocation>> GetProjectMembers(int projectId);
}
