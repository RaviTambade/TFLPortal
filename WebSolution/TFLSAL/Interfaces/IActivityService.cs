using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IActivityService
{
     public Task<List<TFLOBL.Entities.Activity>> GetAllActivities();
     public Task<List<TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId);
     public Task<List<TFLOBL.Entities.Activity>> GetProjectActivitiesByType(int projectId, string activityType);
     public Task<List<TFLOBL.Entities.Activity>> GetProjectActivitiesByEmployee(int projectId, int employeeId);
     public Task<List<TFLOBL.Entities.Activity>> GetProjectActivitiesOfEmployee(int projectId, int employeeId, string activityType);
     public Task<ActivityDetails> GetActivityDetails(int activityId);
     public Task<bool> AddActivity(TFLOBL.Entities.Activity activity);
     public Task<bool> UpdateActivity(string Status,int activityId);

     Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesOfEmployee(int employeeId);

     Task<List<TFLOBL.Entities.Activity>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<TFLOBL.Entities.Activity>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<ActivityDetails>> GetAllActivities(int projectId,int employeeId);

     public Task<ActivityCountSp> GetActivitiesCount();

      Task<List<TFLOBL.Entities.Activity>> GetTodayActivities(int projectId,DateTime date);


}