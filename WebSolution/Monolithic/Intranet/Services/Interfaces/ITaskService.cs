using TFLPortal.Models.BI;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.Interfaces;

public interface ITaskService
{
    Task<List<ProjectTask>> GetAllTasks();
    Task<List<ProjectTask>> GetTasksByProject(int projectId);
    Task<List<ProjectTask>> GetProjectTasksByType(int projectId, string ProjectWorkType);
    Task<List<ProjectTask>> GetProjectTasks(int projectId, int employeeId);
    Task<List<ProjectTask>> GetProjectTasks(int projectId, int employeeId, string status);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId, int employeeId, string status);
    Task<ProjectTask> GetTaskDetails(int taskId);
    Task<bool> AddTask(ProjectTask theTask);
    Task<bool> UpdateTask(string status, int taskId);
    Task<List<ProjectTask>> GetAllTasks(int employeeId);

    Task<List<ProjectTask>> GetAllTasksBetweenDates(
        DateTime fromAssignedDate,
        DateTime toAssignedDate
    );

    Task<List<ProjectTask>> GetTasksBetweenDates(
        int employeeId,
        DateTime fromAssignedDate,
        DateTime toAssignedDate
    );

    Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId);

    Task<TaskStatusCount> GetTasksCount();

    Task<List<ProjectTask>> GetTodaysTasks(int projectId, DateTime date);
}
