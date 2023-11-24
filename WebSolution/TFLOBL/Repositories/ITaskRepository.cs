namespace Transflower.TFLPortal.TFLOBL.Repositories;
public interface ITaskRepository{
    public Task<List<Task>> GetTaskOfEmployee(int projectid,int assignedto);
}