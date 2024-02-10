using TFLPortal.Models;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.ProjectMgmt.Analytics;

public interface IProjectAnalyticsService
{
    Task<List<Project>> GetAllProjects();
    Task<Project> GetProject(int projectId);
    Task<List<Project>> GetAllCurrentProjects(int memberId);
    Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId, DateOnly date);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);

    Task<SprintTask> GetSprintOfTask(int taskId);
    Task<List<ProjectAllocation>> GetProjectMembers(int projectId);
}
