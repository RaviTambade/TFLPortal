using Microsoft.AspNetCore.Mvc;
using TFLPortal.Models;
using TFLPortal.Helpers;
using TFLPortal.Services.ProjectMgmt.Analytics;
using TFLPortal.Services.ProjectMgmt.Operations;
using ProjectTask=TFLPortal.Models.Task;
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
    [HttpGet("projects/{projectId}")]
    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _analyticsSvc.GetSprints(projectId);
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("projects/{projectId}/date/{date}")]
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


    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> Insert(Sprint theSprint)
    {
        bool status = await _operationsSvc.Insert(theSprint);
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
    public async Task<bool> Update(int sprintId,Sprint theSprint)
    {
        bool status = await _operationsSvc.Update(sprintId,theSprint);
        return status;
    }



       // [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> Assign(Member member)
    {
        bool status= await _operationsSvc.Assign(member);
        return status;
    }


    // [Authorize(RoleTypes.ProjectManager)]
    [HttpPut]
    public async Task<bool> Release(Member member)
    {
        bool status= await _operationsSvc.Release(member);
        return status;
    }


    // [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("projects/{projectId}")]
    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= await _analyticsSvc.GetProjectMembers(projectId);
        return members;
    }
}
