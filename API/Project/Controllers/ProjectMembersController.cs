//using PMS.Models;
//using PMS.Services.Interfaces;
//using Microsoft.AspNetCore.Mvc;

//namespace  Transflower.PMS.TeamService.Controllers;

//[ApiController]
//[Route("/api/[controller]")]
//public class ProjectMembersController : ControllerBase
//?{
  //  private readonly IProjectMemberService _service;
//    public ProjectMembersController(IProjectMemberService service)
//    {
//        _service = service;
//    }
//   
//    //httpGet :  http://localhost:5294/api/ProjectMembers/ProjectMembers
//    [HttpGet]
//    [Route("ProjectMembers")]
 //   public async Task<IEnumerable<ProjectMember>> GetAllTeamMembers()
//    {
 //       IEnumerable<ProjectMember> projectmembers =await _service.GetAll();
 //       return projectmembers;
//    }

 //   //httpGet : http://localhost:5294/api/ProjectMembers/1
//    [HttpGet ]
//    [Route ("{id}")]
//    public async Task<ProjectMember> GetById(int id)
//    {
//        ProjectMember projectmember =await _service.GetById(id);
//        return projectmember;
//    }
   
//     //httpGet : http://localhost:5294/api/ProjectMembers/project/1
//     [HttpGet]
//    [Route ("project/{projectId}")]
//    public async Task<IEnumerable<ProjectMemberInfo>> Get(int projectId)
 //   {
//        IEnumerable<ProjectMemberInfo> projectmembers =await _service.Get(projectId);
//        return projectmembers;
//    }

//    //httpPost:  http://localhost:5294/api/ProjectMembers/ProjectMember
//    [HttpPost ]
//    [Route ("ProjectMember")]
//    public async Task<bool> Insert(ProjectMember projectMember)
//    {
 //        bool status =await _service.Insert(projectMember);
//        return status;
//    }
    
//    //httpPut : http://localhost:5294/api/ProjectMembers/17
//    [HttpPut ]
//    [Route("{id}")]
//    public async Task<bool> Update(ProjectMember projectMember)
//    {
//        bool status =await _service.Update(projectMember);
//        return status;
//    }

//    //httpDelete : http://localhost:5294/api/ProjectMembers/17
//    [HttpDelete ]
//    [Route("{id}")]
 //    public async Task<bool> Delete(int id)
 //   {
 //       bool status =await _service.Delete(id);
//        return status;
//    }
//

   
//}



