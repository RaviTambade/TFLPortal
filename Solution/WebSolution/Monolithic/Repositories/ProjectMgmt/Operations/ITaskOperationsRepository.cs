using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;

namespace Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;

public interface ITaskOperationsRepository
{
    Task<bool> AddTask(ProjectTask task);
    Task<bool> UpdateTask(int taskId, string status);
    Task<bool> Delete(int taskId);
}
