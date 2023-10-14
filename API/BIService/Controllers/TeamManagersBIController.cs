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

        [HttpPost("projectwork/{teamManagerId}")]
        public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(
            int teamManagerId,
            [FromBody] DateFilter dateFilter
        ) => await _service.GetTotalProjectWorkHours(teamManagerId, dateFilter);

        [HttpGet("projectstatuscount/{teamManagerId}")]
        public async Task<List<ProjectTaskStatus>> GetProjectStatusCount(int teamManagerId) =>
            await _service.GetProjectStatusCount(teamManagerId);

        [HttpPost("allocatedtasks/{teamMemberId}")]
        public async Task<List<AllocatedTaskOverview>> GetAllocatedTaskOverview(
            string teamMemberId
        ) => await _service.GetAllocatedTaskOverview(teamMemberId);

        [HttpPost("totaltimespend/{teamMemberId}")]
        public async Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(
            string teamMemberId,
            [FromBody] DateFilter dateFilter
        ) => await _service.GetTotalTimeSpendByMembers(teamMemberId, dateFilter);

        [HttpGet("projectpercentage/{projectId}")]
        public async Task<List<ProjectPercentage>> GetCompletionPercentage(string projectId) =>
            await _service.GetCompletionPercentage(projectId);

        
        [HttpGet("memberworkhours/{projectId}/{givenDate}/{dateRange}")]
           public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourOfMembers(int projectId,DateTime givenDate,string dateRange)=>
       await _service.GetTotalProjectWorkHourOfMembers(projectId,givenDate,dateRange);
        
    }
}
