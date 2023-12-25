using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IActivityService
{
     public Task<List<Activity>> GetAllActivities();
     public Task<List<Activity>> GetActivitiesByProject(int projectId);
     public Task<List<Activity>> GetProjectActivitiesByType(int projectId, string activityType);
     public Task<List<Activity>> GetProjectActivitiesByEmployee(int projectId, int employeeId);
     public Task<List<Activity>> GetProjectActivitiesOfEmployee(int projectId, int employeeId, string activityType);
     public Task<ActivityDetails> GetActivityDetails(int activityId);
     public Task<bool> AddActivity(Activity activity);
     public Task<bool> UpdateActivity(string Status,int activityId);

     Task<List<Activity>> GetAllActivitiesOfEmployee(int employeeId);

     Task<List<Activity>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<Activity>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<ActivityDetails>> GetAllActivities(int projectId,int employeeId);

      Task<ActivityStatusCount> GetActivitiesCount();

     Task<List<Activity>> GetTodayActivities(int projectId,DateTime date);


}