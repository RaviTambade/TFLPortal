using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Services;
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Intranet.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;


    public ProjectsController(IProjectService service)
    {
        _service = service;
    }



   [HttpGet]
    public async Task<List<Project>> GetAllProject(){
        
        List<Project> projects= await _service.GetAllProject();
        return projects;
      }
    
}
