using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IActivityService
{

     public Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId);
     public Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId, string activityType);
     public Task<List<TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId, int assignedTo);
     public Task<List<TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId, int assignedTo, string activityType);
     public Task<TFLOBL.Entities.Activity> GetActivityDetails(int activityId);
     public Task<bool> Insert(TFLOBL.Entities.Activity activity);

     Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesOfEmployee(int employeeId);

     Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);


}