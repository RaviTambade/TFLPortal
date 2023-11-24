using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface ITaskService{

     public Task<List<Transflower.TFLPortal.TFLOBL.Entities.Task>> GetTasksOfMember(int projectId, int memberId);
}