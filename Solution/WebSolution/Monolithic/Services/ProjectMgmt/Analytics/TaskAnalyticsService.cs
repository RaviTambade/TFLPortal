using TFLPortal.Responses;
using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Analytics.Interfaces;


namespace Transflower.TFLPortal.Services.ProjectMgmt.Analytics;

public class TaskAnalyticsService:ITaskAnalyticsService
{

    private readonly ITaskAnalyticsRepository _repository;
    

    public TaskAnalyticsService(ITaskAnalyticsRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<ProjectTask>> GetAllTasks()
    {
        return await _repository.GetAllTasks(); 
    }
    public async Task<List<ProjectTask>> GetAllTasks(int projectId)
    {
       return await _repository.GetAllTasks(projectId);
    }
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, string taskType)
    {
       return await _repository.GetAllTasks(projectId,taskType);
    }

    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId)
    {
       return await _repository.GetAllTasks(projectId,memberId);
    }
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId, string status)
    {
      return await _repository.GetAllTasks(projectId, memberId, status);
    }

     public async Task<List<ProjectTask>> GetAllTasksByStatus(int projectId, string status)
    {
       return await _repository.GetAllTasksByStatus(projectId,status);
    }
    public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status)
    {
        return await _repository.GetAllSprintTasks(sprintId,memberId,status);
    }
     public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status, string taskType)
    {
       return await _repository.GetAllSprintTasks(sprintId,memberId,status,taskType);
    }
    public async Task<ProjectTask> GetTask(int taskId)
    {
      return await _repository.GetTask(taskId);
    }
     public async Task<List<ProjectTask>> GetMemberTasks(int memberId)
     {
       return await _repository.GetMemberTasks(memberId);
     }
    public async Task<List<ProjectTask>> GetAllTasks(DateTime from,DateTime to)
    {
        return await _repository.GetAllTasks(from,to);
    } 
    public async Task<List<ProjectTask>> GetAllTasks(int memberId,DateTime from,DateTime to)
    {
        return await _repository.GetAllTasks(memberId,from,to);
    } 
    
    public async Task<ProjectTaskCount> GetTasksCount(int projectId)
    {
      return await _repository.GetTasksCount(projectId);
    }


  public async Task<ProjectTaskCount> GetTasksCount(int projectId,int memberId)
    {
      return await _repository.GetTasksCount(projectId,memberId);
    }
    public async Task<List<ProjectTask>> GetTodaysTasks(int projectId,DateTime date)
    {
        return await _repository.GetTodaysTasks(projectId,date);
    }

   
}