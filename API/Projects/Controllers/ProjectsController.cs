using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Models;
using Transflower.PMSApp.Projects.Services.Interfaces;
namespace Transflower.PMSApp.Projects.Controller;
[ApiController]
[Route("api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;
    public ProjectsController(IProjectService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<List<Project>> GetAll()
    {
        return await _service.GetAll();
    }

    [HttpGet("{projectId}")]
    public async Task<Project> GetById(int projectId)
    {
        return await _service.GetById(projectId);
    }

    [HttpPost("addproject")]
    public async Task<bool> Insert(Project project)
    {
        return await _service.Insert(project);
    }

    [HttpPut]
    public async Task<bool> Update(Project project)
    {
        return await _service.Update(project);
    }

    [HttpDelete]
    public async Task<bool> Delete(int projectId)
    {
        return await _service.Delete(projectId);
    }

    [HttpGet("list")]
    public async Task<List<ProjectList>> GetProjects(){
        return await _service.GetProjects();
    }
}