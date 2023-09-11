using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.Helpers;
using Transflower.PMS.Director.Models;
using Transflower.PMS.Director.Services.Interfaces;

namespace Transflower.PMS.Director.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class DirectorController : ControllerBase
{

    private readonly IDirectorService _service;
    public DirectorController(IDirectorService service)
    {
        _service = service;
    }
    
    // httpGet : http://localhost:5096/api/director/directors
    //[Authorize]
    [HttpGet]
    [Route ("directors")]
    public async Task<IEnumerable<Directors>> GetAll()
    {
        IEnumerable<Directors> directors =await _service.GetAll();
        return directors;
    }
   
    //httpGet http://localhost:5096/api/director/2
    //[Authorize]
    [HttpGet] 
    [Route ("{id}")]
    public async Task<Directors> GetById(int id)
    {
        Directors directors =await _service.GetById(id);
        return directors;
    }

    //httpPost : http://localhost:5096/api/director/Director
    //[Authorize]
    [HttpPost]
    [Route ("Director")]
    public async Task<bool> Insert(Directors director)
    {
        bool status =await _service.Insert(director);
        return status;
    }

    //httpPut : http://localhost:5096/api/director/1
    //[Authorize]
    [HttpPut]
    [Route ("{id}")]
    public async Task<bool> Update(Directors director)
    {
        bool status =await _service.Update(director);
        return status;
    }

    //httpDelete : http://localhost:5096/api/director/6
    //[Authorize]
    [HttpDelete]
    [Route ("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }




    


}
