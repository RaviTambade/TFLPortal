using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Repositories.TaskMgmt.Operations;

public interface ITaskOperationsRepository
{
    Task<bool> AddTask(ProjectTask task);
    Task<bool> UpdateTask(int taskId, string status);
    Task<bool> Delete(int taskId);
}
