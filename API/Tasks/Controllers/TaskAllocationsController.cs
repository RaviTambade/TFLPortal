using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Tasks.Entities;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Services.Interfaces;
namespace Transflower.PMSApp.Tasks.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskAllocationsController : ControllerBase
    {
        private readonly ITaskAllocationService _taskAllocationService;
    
    public TaskAllocationsController(ITaskAllocationService taskAllocationService){
        _taskAllocationService=taskAllocationService;
    }

    [HttpPost]
      public async Task<bool> Insert(TaskAllocation taskAllocation)
      {
        return await _taskAllocationService.Insert(taskAllocation);
      }

    }
}