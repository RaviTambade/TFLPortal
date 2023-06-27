// using TeamService.Models;
// using TeamService.Services.Interfaces;
// using Microsoft.AspNetCore.Mvc;

// namespace TeamService.Controllers;

// [ApiController]
// [Route("/api/[controller]")]
// public class TeamsController : ControllerBase
// {

//     private readonly ITeamService _service;

//     public TeamsController(ITeamService service)
//     {
//         _service = service;
//     }

//     [HttpGet]
//     [Route("getall")]
//     public IEnumerable<Team> GetAllTeams()
//     {

//         List<Team> teams = _service.GetAll();

//         return teams;

//     }

//     [HttpGet]
//     [Route("getbyid/{id}")]
//     public Team GetById(int id)
//     {
//         Team team = _service.GetById(id);


//         return team;
//     }

//     [HttpPost]
//     [Route("InsertTeam")]
//     public bool InsertTeam(Team team)
//     {
//         bool status = _service.Insert(team);


//         return status;
//     }

//     [HttpPut]
//     [Route("updateTeam/{id}")]

//     public bool UpdateTeam(Team team)
//     {
//         bool status = _service.Update(team);

//         return status;
//     }


//     [HttpDelete]
//     [Route("DeleteTeam/{id}")]
//     public bool DeleteTeam(int id)
//     {
//         bool status = _service.Delete(id);

//         return status;
//     }


   
// }



