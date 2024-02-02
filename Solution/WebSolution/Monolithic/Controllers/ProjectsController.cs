using Microsoft.AspNetCore.Mvc;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;

    public ProjectsController(IProjectService service)
    {
        _service = service;
    }


    
    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet]
    
    public async Task<List<Project>> GetAllProjects()
    {
        List<Project> projects = await _service.GetAllProjects();
        return projects;
    }

    
    [Authorize(RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("{projectId}")]
    public async Task<Project> GetProject(int projectId)
    {
        Project projects = await _service.GetProject(projectId);
        return projects;
    }

   
    [Authorize(RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("members/{memberId}")]
    public async Task<List<Project>> GetAllCurrentProjects(int memberId)
    {
        List<Project> projects = await _service.GetAllCurrentProjects(memberId);
        return projects;
    }



    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> AddProject(Project project)
    {
        bool status =await _service.AddProject(project);
        return status;
    } 
}
