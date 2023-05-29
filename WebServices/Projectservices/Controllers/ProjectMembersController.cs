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

    [HttpGet ("ProjectMembers")]
    //[Route("getall")]
    public IEnumerable<ProjectMember> GetAllTeamMembers()
    {
        List<ProjectMember> projectmembers = _service.GetAll();
        return projectmembers;
    }

    [HttpGet ("{id}")]
    //[Route("getbyid/{id}")]
    public ProjectMember GetById(int id)
    {
        ProjectMember projectmember = _service.GetById(id);
        return projectmember;
    }

    [HttpPost ("ProjectMember")]
    //[Route("Insert")]
    public bool Insert(ProjectMember projectMember)
    {
        bool status = _service.Insert(projectMember);
        return status;
    }

    [HttpPut ("{id}")]
    //[Route("update/{id}")]
    public bool Update(ProjectMember projectMember)
    {
        bool status = _service.Update(projectMember);
        return status;
    }


    [HttpDelete ("{id}")]
    //[Route("Delete/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);
        return status;
    }


   
}



