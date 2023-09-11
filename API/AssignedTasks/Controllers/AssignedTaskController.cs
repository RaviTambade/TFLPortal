using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.Helpers;
using Transflower.PMS.AssignedTask.Models;
using Transflower.PMS.AssignedTask.Services.Interfaces;

namespace Transflower.PMS.AssignedTask.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AssignedTaskController : ControllerBase
{

    private readonly IAssignedTaskService _service;
    public AssignedTaskController(IAssignedTaskService service)
    {
        _service = service;
    }
    
    // httpGet : http://localhost:5290/api/assignedtask/assignedtask
    //[Authorize]
    [HttpGet]
    [Route ("assignedtask")]
    public async Task<IEnumerable<Assignedtask>> GetAll()
    {
        IEnumerable<Assignedtask> assignedtasks =await _service.GetAll();
        return assignedtasks;
    }
   
    //httpGet  http://localhost:5290/api/assignedtask/2
    //[Authorize]
    [HttpGet] 
    [Route ("{id}")]
    public async Task<Assignedtask> GetById(int id)
    {
        Assignedtask assignedtask =await _service.GetById(id);
        return assignedtask;
    }

    //httpPost : http://localhost:5290/api/assignedtask/assignedtask
    //[Authorize]
    [HttpPost]
    [Route ("assignedtask")]
    public async Task<bool> Insert(Assignedtask director)
    {
        bool status =await _service.Insert(director);
        return status;
    }

    //httpPut : http://localhost:5290/api/assignedtask/6
    //[Authorize]
    [HttpPut]
    [Route ("{id}")]
    public async Task<bool> Update(Assignedtask assignedtask)
    {
        bool status =await _service.Update(assignedtask);
        return status;
    }

    //httpDelete : http://localhost:5290/api/assignedtask/6
    //[Authorize]
    [HttpDelete]
    [Route ("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }




    


}
