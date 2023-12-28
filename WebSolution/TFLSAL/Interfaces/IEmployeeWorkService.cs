using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IEmployeeWorkService
{
     public Task<List<EmployeeWork>> GetAllActivities();
     public Task<List<EmployeeWork>> GetActivitiesByProject(int projectId);
     public Task<List<EmployeeWork>> GetProjectActivitiesByType(int projectId, string activityType);
     public Task<List<EmployeeWork>> GetProjectActivitiesByEmployee(int projectId, int employeeId);
     public Task<List<EmployeeWork>> GetProjectActivitiesOfEmployee(int projectId, int employeeId, string status);
     public Task<EmployeeWorkDetails> GetActivityDetails(int activityId);
     public Task<bool> AddActivity(EmployeeWork activity);
     public Task<bool> UpdateActivity(string Status,int activityId);

     Task<List<EmployeeWork>> GetAllActivitiesOfEmployee(int employeeId);

     Task<List<EmployeeWork>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<EmployeeWork>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<EmployeeWorkDetails>> GetAllActivities(int projectId,int employeeId);

      Task<ActivityStatusCount> GetActivitiesCount();

     Task<List<EmployeeWork>> GetTodayActivities(int projectId,DateTime date);


}