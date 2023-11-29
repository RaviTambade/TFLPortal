using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/ProjectPlanning")]
public class ProjectPlanningController : ControllerBase
{
    private readonly IProjectPlanningService _service;
    private readonly IHttpClientFactory _httpClientFactory;

    public ProjectPlanningController(IProjectPlanningService service)
    {
        _service = service;
    }

   [HttpGet("userstories/{projectId}")]
   public async Task<List<UserStories>> GetAllUserStories(int projectId){
    List<UserStories> userStories=await _service.GetAllUserStories(projectId);
    return userStories;
   }
    
}
