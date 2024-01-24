using TFLPortal.Models.BI;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.Interfaces;

public interface ITaskService
{
    Task<List<ProjectTask>> GetAllEmployeeWork();
    Task<List<ProjectTask>> GetEmployeeWorkByProject(int projectId);
    Task<List<ProjectTask>> GetProjectEmployeeWorkByWorkType(int projectId, string ProjectWorkType);
    Task<List<ProjectTask>> GetProjectEmployeeWorks(int projectId, int employeeId);
    Task<List<ProjectTask>> GetProjectEmployeeWorks(int projectId, int employeeId, string status);
    Task<List<ProjectTask>> GetSprintEmployeeWorks(int sprintId, int employeeId, string status);
    Task<ProjectTask> GetEmployeeWorkDetails(int employeeWorkId);
    Task<bool> AddEmployeeWork(ProjectTask employeeWork);
    Task<bool> UpdateEmployeeWork(string status, int employeeWorkId);
    Task<List<ProjectTask>> GetAllEmployeeWorks(int employeeId);

    Task<List<ProjectTask>> GetAllEmployeesWorksBetweenDates(
        DateTime fromAssignedDate,
        DateTime toAssignedDate
    );

    Task<List<ProjectTask>> GetEmployeeWorksBetweenDates(
        int employeeId,
        DateTime fromAssignedDate,
        DateTime toAssignedDate
    );

    Task<List<ProjectTask>> GetAllEmployeeWorks(int projectId, int employeeId);

    Task<TaskStatusCount> GetEmployeesWorkCount();

    Task<List<ProjectTask>> GetTodayEmployeesWork(int projectId, DateTime date);
}
