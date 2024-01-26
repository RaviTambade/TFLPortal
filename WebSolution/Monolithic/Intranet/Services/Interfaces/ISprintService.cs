
using TFLPortal.Models;
using ProjectTask= TFLPortal.Models.Task;
namespace TFLPortal.Services.Interfaces;

public interface ISprintService
{
    Task<List<Sprint>> GetSprints(int projectId);
    Task<Sprint> GetCurrentSprint(int projectId,DateOnly date);
    Task<List<ProjectTask>> GetSprintTasks(int sprintId);
    Task<bool> InsertSprint(Sprint theSprint);

    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId,Sprint theSprint);
}   