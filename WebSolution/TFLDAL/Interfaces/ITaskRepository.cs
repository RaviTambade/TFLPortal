namespace Transflower.TFLPortal.TFLDAL.Repositories.Interfaces;

public interface ITaskRepository
{
    public Task<List<Task>> GetTaskOfEmployee(int projectid, int assignedto);
}
