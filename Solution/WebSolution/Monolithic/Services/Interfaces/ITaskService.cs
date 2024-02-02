using TFLPortal.Responses;
using ProjectTask = TFLPortal.Models.Task;
namespace TFLPortal.Services.Interfaces;
public interface ITaskService
{
    Task<List<ProjectTask>> GetAllTasks();
    Task<List<ProjectTask>> GetAllTasks(int projectId);
    Task<List<ProjectTask>> GetAllTasks(int projectId, string TaskType);
    Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId);
    Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId, string status);
    Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status);
    Task<ProjectTask> GetTask(int taskId);
    Task<List<ProjectTask>> GetMemberTasks(int memberId);
    Task<List<ProjectTask>> GetAllTasks(DateTime from, DateTime to);
    Task<List<ProjectTask>> GetAllTasks(int employeeId,DateTime from,DateTime to);
    Task<ProjectTaskCount> GetTasksCount(int projectId);
    Task<ProjectTaskCount> GetTasksCount(int projectId,int memberId);
    Task<List<ProjectTask>> GetTodaysTasks(int projectId, DateTime date);
     Task<bool> AddTask(ProjectTask task);
    Task<bool> UpdateTask(int taskId,string status);
    Task<bool> Delete(int taskId);
}
