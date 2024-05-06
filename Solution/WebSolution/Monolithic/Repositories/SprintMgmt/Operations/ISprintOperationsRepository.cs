using TFLPortal.Models;

namespace TFLPortal.Repository.SprintMgmt.Operations;

public interface ISprintOperationsRepository
{
    Task<bool> Insert(Sprint theSprint);
    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId, Sprint theSprint);
}
