using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Projects.Services.Interfaces;
using Transflower.PMSApp.Projects.Entities;
namespace Transflower.PMSApp.Projects.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectMembersController : ControllerBase
    {
        private readonly IProjectMemberService _projectMemberService;
        public ProjectMembersController(IProjectMemberService projectMemberService){
            _projectMemberService=projectMemberService;
        }
    
    [HttpPost]
    public async Task<bool> Insert(ProjectMember projectMember)
    {
        return await _projectMemberService.Insert(projectMember);
    }
    }
}