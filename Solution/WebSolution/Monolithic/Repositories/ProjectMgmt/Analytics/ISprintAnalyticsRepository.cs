using Transflower.TFLPortal.Entities.ProjectMgmt;

using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;


namespace Transflower.TFLPortal.Repositories.ProjectMgmt.Analytics.Interfaces;

public interface ISprintAnalyticsRepository
{
    Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId, DateOnly date);
    Task<Sprint> GetSprint(int sprintId);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);
    Task<SprintTask> GetSprintOfTask(int taskId);
}
