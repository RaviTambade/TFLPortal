using TFLPortal.Models;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.SprintMgmt.Analytics;

public interface ISprintAnalyticsService
{
   Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId, DateOnly date);
    Task<Sprint> GetSprint(int sprintId);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);

    Task<SprintTask> GetSprintOfTask(int taskId);
}
