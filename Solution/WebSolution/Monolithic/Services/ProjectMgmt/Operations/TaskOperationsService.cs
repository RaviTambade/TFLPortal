using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Services.ProjectMgmt.Operations;

public class TaskOperationsService : ITaskOperationsService
{
    private readonly ITaskOperationsRepository _repository;
   
    public TaskOperationsService(ITaskOperationsRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> AddTask(ProjectTask task)
    {
        return await _repository.AddTask(task);
    }

    public async Task<bool> UpdateTask(int taskId, string status)
    {
       return await _repository.UpdateTask(taskId, status);
    }

    public async Task<bool> Delete(int taskId)
    {
        return await _repository.Delete(taskId);
    }
}
