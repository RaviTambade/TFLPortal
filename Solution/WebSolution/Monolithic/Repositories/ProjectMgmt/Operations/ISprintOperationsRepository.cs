using Transflower.TFLPortal.Entities.ProjectMgmt;

namespace Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;

public interface ISprintOperationsRepository
{
    Task<bool> Insert(Sprint theSprint);
    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId, Sprint theSprint);
}
