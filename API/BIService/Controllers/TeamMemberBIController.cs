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
    public class TeamMemberBIController : ControllerBase
    {
        private readonly ITeamMemberService _service;

        public TeamMemberBIController(ITeamMemberService service)
        {
            _service = service;
        }


        [HttpPost("totaltimespend/{teamMemberId}")]
        public async Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(
            string teamMemberId,
            [FromBody] DateFilter dateFilter
        ) => await _service.GetTotalTimeSpendByMembers(teamMemberId, dateFilter);

        
        
    }
}
