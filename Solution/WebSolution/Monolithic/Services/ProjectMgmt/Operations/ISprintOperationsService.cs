using TFLPortal.Models;

namespace TFLPortal.Services.SprintMgmt.Operations;

public interface ISprintOperationsService
{
    Task<bool> Insert(Sprint theSprint);
    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId, Sprint theSprint);
}
