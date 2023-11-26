using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface ITaskService{

     public Task<List<Transflower.TFLPortal.TFLOBL.Entities.Task>> GetTasksOfMember(int projectId, int memberId);

     public Task<Transflower.TFLPortal.TFLOBL.Entities.Task> GetTaskDetails(int taskId);

     public Task<bool> Insert(Transflower.TFLPortal.TFLOBL.Entities.Task task);
}