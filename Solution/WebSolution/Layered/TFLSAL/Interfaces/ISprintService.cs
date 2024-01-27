
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ISprintService
{
    Task<List<Sprint>> GetSprints(int projectId);
    Task<List<Sprint>> GetOngoingSprints(int projectId,DateOnly date);
    Task<List<SprintDetails>> GetSprintWorks(int sprintId);
}   