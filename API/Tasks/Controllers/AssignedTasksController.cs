using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Tasks.Entities;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Services.Interfaces;
namespace Transflower.PMSApp.Tasks.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssignedTasksController : ControllerBase
    {
        private readonly IAssignedTaskService _assignedTaskService;
    
    public AssignedTasksController(IAssignedTaskService assignedTaskService){
        _assignedTaskService=assignedTaskService;
    }

    [HttpPost]
      public async Task<bool> Insert(AssignedTask assignedTask)
      {
        return await _assignedTaskService.Insert(assignedTask);
      }

    }
}