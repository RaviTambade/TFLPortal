using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Entities.ProjectMgmt;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations.Interfaces;
using ProjectTask=Transflower.TFLPortal.Entities.ProjectMgmt.Task;
namespace TFLPortal.Controllers;

[ApiController]
[Route("/api/projectmgmt/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectAnalyticsService _analyticsSvc;
    private readonly IProjectOperationsService _operationsSvc;

    public ProjectsController(IProjectAnalyticsService analyticsSvc,IProjectOperationsService operationsSvc )
    {
        _analyticsSvc = analyticsSvc;
        _operationsSvc= operationsSvc;
    }


    
    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet]
    public async Task<List<Project>> GetAllProjects()
    {
        List<Project> projects = await _analyticsSvc.GetAllProjects();
        return projects;
    }

    
    [Authorize(RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("{projectId}")]
    public async Task<Project> GetProject(int projectId)
    {
        Project projects = await _analyticsSvc.GetProject(projectId);
        return projects;
    }

   
    [Authorize(RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("members/{memberId}")]
    public async Task<List<Project>> GetAllCurrentProjects(int memberId)
    {
        List<Project> projects = await _analyticsSvc.GetAllCurrentProjects(memberId);
        return projects;
    }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> AddProject(Project project)
    {
        bool status =await _operationsSvc.AddProject(project);
        return status;
    } 



    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{projectId}/sprints")]
    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _analyticsSvc.GetSprints(projectId);
    }

    [HttpGet("sprints/{sprintId}")]
    public async Task<Sprint> GetSprint(int sprintId)
    {
        return await _analyticsSvc.GetSprint(sprintId);
    }


    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{projectId}/sprints/date/{date}")]
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

   [HttpGet("sprints/tasks/{taskId}")]
   public async Task<SprintTask> GetSprintOfTask(int taskId)
   {
    return await _analyticsSvc.GetSprintOfTask(taskId);
   }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost("addsprint")]
    public async Task<bool> Insert(Sprint sprint)
    {
        bool status = await _operationsSvc.Insert(sprint);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpDelete("deleteSprint")]
    public async Task<bool> Delete(int sprintId)
    {
        bool status = await _operationsSvc.Delete(sprintId);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpPut("updateSprint")]
    public async Task<bool> Update(int sprintId,Sprint sprint)
    {
        bool status = await _operationsSvc.Update(sprintId,sprint);
        return status;
    }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost("member/assign")]
    public async Task<bool> Assign(ProjectAllocation projectAllocation)
    {
        bool status= await _operationsSvc.Assign(projectAllocation);
        return status;
    }


     [Authorize(RoleTypes.ProjectManager)]
    [HttpPut("relese/Member")]
    public async Task<bool> Release(ProjectAllocation projectAllocation)
    {
        bool status= await _operationsSvc.Release(projectAllocation);
        return status;
    }


     [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{projectId}/members")]
    public async Task<List<ProjectAllocation>> GetProjectMembers(int projectId)
    {
        List<ProjectAllocation> members= await _analyticsSvc.GetProjectMembers(projectId);
        return members;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{projectId}/member/{memberId}")]
    public async Task<ProjectAllocation> GetProjectMember(int projectId,int memberId)
    {
        ProjectAllocation member = await _analyticsSvc.GetProjectMember(projectId,memberId);
        return member;
    }


}
