using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Repositories.ProjectMgmt.Analytics;
using ProjectTask=TFLPortal.Models.Task;


namespace TFLPortal.Services.ProjectMgmt.Analytics;

public class ProjectAnalyticsService:IProjectAnalyticsService
{


    private readonly IConfiguration _configuration;
    private readonly IProjectAnalyticsRepository _repository;



    public ProjectAnalyticsService(IProjectAnalyticsRepository repository ){
          
        _repository = repository;
    }
       public async Task<List<Project>> GetAllProjects(){
        return await _repository.GetAllProjects();
       }

    public async Task<List<Project>> GetAllCurrentProjects(int memberId)
    {
        return await _repository.GetAllCurrentProjects(memberId);
    } 


     public async Task<Project> GetProject(int projectId)
    {
       return await _repository.GetProject(projectId);
    }


       public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
       return await _repository.GetCurrentSprint(projectId,date);
    }

    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _repository.GetSprints(projectId);
    }

    public async Task<List<ProjectTask>> GetSprintTasks(int sprintId){
        return await _repository.GetSprintTasks(sprintId);
    }


  public async Task<List<ProjectAllocation>> GetProjectMembers(int projectId)
    {
       return await _repository.GetProjectMembers(projectId);
    }


    public async Task<ProjectAllocation> GetProjectMember(int projectId,int memberId)
    {
       return await _repository.GetProjectMember(projectId,memberId);
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