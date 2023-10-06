using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.BIService.Models;
using Transflower.PMSApp.BIService.Services.Interfaces;
namespace Transflower.PMSApp.BIService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamManagersBIController : ControllerBase
    {
         private readonly ITeamManagerService _service;
  public TeamManagersBIController(ITeamManagerService service)
  {
    _service = service;
  }
      [HttpGet]
        public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId)=>
        await _service.GetTotalProjectWorkHours(teamManagerId);
          
    }
}