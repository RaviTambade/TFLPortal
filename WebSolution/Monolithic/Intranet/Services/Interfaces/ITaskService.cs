
using TFLPortal.Responses;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.Interfaces;

public interface ITaskService
{
    Task<List<ProjectTask>> GetAllTasks();
    Task<List<ProjectTask>> GetAllTasks(int projectId);
    Task<List<ProjectTask>> GetAllTasks(int projectId, string TaskType);
    Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId);
    Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId, string status);
    Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int employeeId, string status);
    Task<ProjectTask> GetTask(int taskId);
    Task<List<ProjectTask>> GetMemberTasks(int employeeId);
    Task<List<ProjectTask>> GetAllTasks(DateTime fromAssignedDate, DateTime toAssignedDate);
    Task<List<ProjectTask>> GetAllTasks(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);
    Task<ProjectTaskStatusCountResponse> GetTasksCount();
    Task<List<ProjectTask>> GetTodaysTasks(int projectId, DateTime date);
     Task<bool> AddTask(ProjectTask theTask);
    Task<bool> UpdateTask(string status, int taskId);
    Task<bool> Delete(int taskId);
}
