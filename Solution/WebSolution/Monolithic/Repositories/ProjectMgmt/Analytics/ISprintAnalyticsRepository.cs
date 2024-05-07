using TFLPortal.Models;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Repositories.SprintMgmt.Analytics;

public interface ISprintAnalyticsRepository
{
    Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId, DateOnly date);
    Task<Sprint> GetSprint(int sprintId);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);
    Task<SprintTask> GetSprintOfTask(int taskId);
}
