using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IActivityService{

     public Task<List<TFLOBL.Entities.Activity>> GetTasksOfMember(int projectId, int memberId);

     public Task<TFLOBL.Entities.Activity> GetTaskDetails(int activityId);

     public Task<bool> Insert(TFLOBL.Entities.Activity activity);
}