using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace TeamService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ProjectMembersController : ControllerBase
{

    private readonly IProjectMemberService _service;

    public ProjectMembersController(IProjectMemberService service)
    {
        _service = service;
    }
   
    //http://localhost:5294/api/ProjectMembers/ProjectMembers
    [HttpGet ("ProjectMembers")]
    //[Route("getall")]
    public async Task<IEnumerable<ProjectMember>> GetAllTeamMembers()
    {
        IEnumerable<ProjectMember> projectmembers =await _service.GetAll();
        return projectmembers;
    }

    //http://localhost:5294/api/ProjectMembers/1
    [HttpGet ("{id}")]
    //[Route("getbyid/{id}")]
    public async Task<ProjectMember> GetById(int id)
    {
        ProjectMember projectmember =await _service.GetById(id);
        return projectmember;
    }
   
     //http://localhost:5294/api/ProjectMembers/project/1
     [HttpGet ("project/{projectId}")]
    //[Route("getbyid/{id}")]
    public async Task<IEnumerable<ProjectMemberInfo>> Get(int projectId)
    {
        IEnumerable<ProjectMemberInfo> projectmembers =await _service.Get(projectId);
        return projectmembers;
    }

    //http://localhost:5294/api/ProjectMembers/ProjectMember
    [HttpPost ("ProjectMember")]
    //[Route("Insert")]
    public async Task<bool> Insert(ProjectMember projectMember)
    {
        bool status =await _service.Insert(projectMember);
        return status;
    }
    
    //http://localhost:5294/api/ProjectMembers/17
    [HttpPut ("{id}")]
    //[Route("update/{id}")]
    public async Task<bool> Update(ProjectMember projectMember)
    {
        bool status =await _service.Update(projectMember);
        return status;
    }

    //http://localhost:5294/api/ProjectMembers/17
    [HttpDelete ("{id}")]
    //[Route("Delete/{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }


   
}



