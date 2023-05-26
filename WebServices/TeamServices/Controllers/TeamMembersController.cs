using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace TeamService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TeamMembersController : ControllerBase
{

    private readonly ITeamMemberService _service;

    public TeamMembersController(ITeamMemberService service)
    {
        _service = service;
    }

    [HttpGet]
    [Route("getall")]
    public IEnumerable<TeamMember> GetAllTeamMembers()
    {

        List<TeamMember> teammembers = _service.GetAll();

        return teammembers;

    }

    // [HttpGet]
    // [Route("getbyid/{id}")]
    // public Team GetById(int id)
    // {
    //     Team team = _service.GetById(id);


    //     return team;
    // }

    // [HttpPost]
    // [Route("InsertTeam")]
    // public bool InsertTeam(Team team)
    // {
    //     bool status = _service.Insert(team);


    //     return status;
    // }

    // [HttpPut]
    // [Route("updateTeam/{id}")]

    // public bool UpdateTeam(Team team)
    // {
    //     bool status = _service.Update(team);

    //     return status;
    // }


    // [HttpDelete]
    // [Route("DeleteTeam/{id}")]
    // public bool DeleteTeam(int id)
    // {
    //     bool status = _service.Delete(id);

    //     return status;
    // }


   
}



