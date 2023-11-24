using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;

    public ProjectsController(IProjectService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<List<Project>> GetAllProject()
    {
        List<Project> projects = await _service.GetAllProject();
        return projects;
    }

    [HttpGet("employees/{employeeid}")]
    public async Task<List<Project>> GetProjectsOfEmployee(int employeeid)
    {
        List<Project> projects = await _service.GetProjectsOfEmployee(employeeid);
        return projects;
    }
}
