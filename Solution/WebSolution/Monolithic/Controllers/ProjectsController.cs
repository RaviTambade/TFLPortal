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


    
    //http://localhost:8989/api/projects
    [HttpGet]
    public async Task<List<Project>> GetAllProjects()
    {
        List<Project> projects = await _service.GetAllProjects();
        return projects;
    }

    
    //http://localhost:8989/api/projects/project/453
    [HttpGet("{projectId}")]
    public async Task<Project> GetProject(int projectId)
    {
        Project projects = await _service.GetProject(projectId);
        return projects;
    }

   
    
    [HttpGet("projectmanager/{memberId}")]
    public async Task<List<Project>> GetAllCurrentProjects(int memberId)
    {
        List<Project> projects = await _service.GetAllCurrentProjects(memberId);
        return projects;
    }



    // http://localhost:8989/api/projects
    [HttpPost]
    [Route ("addproject")]
    public async Task<bool> AddProject(Project project)
    {
        bool status =await _service.AddProject(project);
        return status;
    }


    
}
