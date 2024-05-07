using Transflower.TFLPortal.Entities.ProjectMgmt;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Services.ProjectMgmt.Operations;

public class SprintOperationsService:ISprintOperationsService
{
    private readonly ISprintOperationsRepository _repository;
   

    public SprintOperationsService(ISprintOperationsRepository repository)
    {
        _repository= repository;
    }

    public async Task<bool> Insert(Sprint theSprint)
    {
        return await _repository.Insert(theSprint);
    }

    public async Task<bool> Delete(int sprintId)
    {
        return await _repository.Delete(sprintId);
    }

    public async Task<bool> Update(int sprintId, Sprint theSprint)
    {
        return await _repository.Update(sprintId, theSprint);
    }

   
}
