using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

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

    [HttpGet]
    public async Task<List<Project>> GetAllProjects()
    {
        List<Project> projects = await _service.GetAllProjects();
        return projects;
    }
    [HttpGet("{projectId}")]
    public async Task<Project> GetProjectDetails(int projectId)
    {
        Project projects = await _service.GetProjectDetails(projectId);
        return projects;
    }

    [HttpGet("employees/{employeeid}")]
    public async Task<List<Project>> GetProjectsOfEmployee(int employeeid)
    {
        List<Project> projects = await _service.GetProjectsOfEmployee(employeeid);
        return projects;
    }


    [HttpGet("projectmanager/{managerId}")]
    public async Task<List<Project>> GetAllProjectsOfProjectManager(int managerId)
    {
        List<Project> projects = await _service.GetAllProjectsOfProjectManager(managerId);
        return projects;
    }

    [HttpPost]
    [Route ("addproject")]
    public async Task<bool> AddProject(Project project)
    {
        bool status =await _service.AddProject(project);
        return status;
    }


    [HttpGet("projectmanager/employees/{projectId}")]
    public async Task<List<int>> GetAllEmployee(int projectId)
    {
        List<int> projects = await _service.GetAllEmployees(projectId);
        
        return projects;
    }
}
