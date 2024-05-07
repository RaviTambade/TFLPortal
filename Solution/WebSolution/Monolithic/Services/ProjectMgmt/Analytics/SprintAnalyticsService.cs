using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;
using Transflower.TFLPortal.Entities.ProjectMgmt;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Analytics.Interfaces;


namespace Transflower.TFLPortal.Services.ProjectMgmt.Analytics;

public class SprintAnalyticsService:ISprintAnalyticsService
{

    private readonly ISprintAnalyticsRepository _repository;
    

    public SprintAnalyticsService(ISprintAnalyticsRepository repository )
    {
         _repository = repository;
    }
     
       public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
        return await _repository.GetCurrentSprint(projectId, date);
    }

    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _repository.GetSprints(projectId);
    }

    public async Task<List<ProjectTask>> GetSprintTasks(int sprintId)
    {
        return await _repository.GetSprintTasks(sprintId);
    }

    public async Task<SprintTask> GetSprintOfTask(int taskId)
    {
        return await _repository.GetSprintOfTask(taskId);
    }

    public async Task<Sprint> GetSprint(int sprintId)
    {
        return await _repository.GetSprint(sprintId);
    }
}