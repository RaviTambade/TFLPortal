using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Entities.ProjectMgmt;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations.Interfaces;
using ProjectTask=Transflower.TFLPortal.Entities.ProjectMgmt.Task;
namespace TFLPortal.Controllers;

[ApiController]
[Route("/api/sprints")]
public class SprintsController : ControllerBase
{
    private readonly ISprintAnalyticsService _analyticsSvc;
    private readonly ISprintOperationsService _operationsSvc;

    public SprintsController(ISprintAnalyticsService analyticsSvc,ISprintOperationsService operationsSvc )
    {
        _analyticsSvc = analyticsSvc;
        _operationsSvc= operationsSvc;
    }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("project/{projectId}/sprints")]
    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _analyticsSvc.GetSprints(projectId);
    }

    [HttpGet("{sprintId}")]
    public async Task<Sprint> GetSprint(int sprintId)
    {
        return await _analyticsSvc.GetSprint(sprintId);
    }


    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("project/{projectId}/sprints/date/{date}")]
    public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
        return await _analyticsSvc.GetCurrentSprint(projectId, date);
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{sprintId}/tasks")]
    public async Task<List<ProjectTask>> GetSprintTasks(int sprintId)
    {
        List<ProjectTask> tasks = await _analyticsSvc.GetSprintTasks(sprintId);
        return tasks;
    }

   [HttpGet("tasks/{taskId}")]
   public async Task<SprintTask> GetSprintOfTask(int taskId)
   {
    return await _analyticsSvc.GetSprintOfTask(taskId);
   }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> Insert(Sprint sprint)
    {
        bool status = await _operationsSvc.Insert(sprint);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpDelete]
    public async Task<bool> Delete(int sprintId)
    {
        bool status = await _operationsSvc.Delete(sprintId);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpPut]
    public async Task<bool> Update(int sprintId,Sprint sprint)
    {
        bool status = await _operationsSvc.Update(sprintId,sprint);
        return status;
    }
}
