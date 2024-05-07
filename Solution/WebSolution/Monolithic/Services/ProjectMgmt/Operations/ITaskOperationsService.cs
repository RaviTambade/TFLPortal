using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.TaskMgmt.Operations;

public interface ITaskOperationsService
{
    Task<bool> AddTask(ProjectTask task);
    Task<bool> UpdateTask(int taskId, string status);
    Task<bool> Delete(int taskId);
}
