
namespace  TFLPortal.IProjectAnalyticsService;
public interface IProjectAnalyticsService{
     Task<List<Project>> GetAllProjects();
    Task<Project> GetProject(int projectId);
    Task<List<Project>> GetAllCurrentProjects(int memberId);
   
     Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId,DateOnly date);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);

     Task<List<Member>> GetProjectMembers(int projectId);
}