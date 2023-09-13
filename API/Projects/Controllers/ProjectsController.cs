using Microsoft.AspNetCore.Mvc;
using Transflower.EAgroServices.Merchants.Services;

namespace Transflower.PMSApp.Projects.Controller;
[ApiController]
[Route("api/projects")]
public class ProjectsController:ControllerBase{
    private readonly ProjectService _service;
    public ProjectsController(ProjectService service){
        _service=service;
    }
}