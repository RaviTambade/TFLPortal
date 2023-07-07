using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace task.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TaskController : ControllerBase
{

    private readonly ITaskServices _service;
    private readonly ILogger<TaskController> _logger;

    public TaskController(ITaskServices service,ILogger<TaskController> logger)
    {
        _service = service;
        _logger=logger;
    }


    //http://localhost:5034/api/Task/getall
    [HttpGet ("getall")]
    public async Task<IEnumerable<Tasks>> GetAll()
    {

        IEnumerable<Tasks> tasks =await _service.GetAll();

        return tasks;

    }

     //http://localhost:5034/api/task/get/1
    [HttpGet ("get/{id}")]
    public async Task <Tasks> Get(int id)
    {
         Tasks task = await _service.Get(id);
         return task;
    }

    //http://localhost:5034/api/task/task
    [HttpPost ("task")]
    public async Task<bool> Insert(Tasks task)
    {
        bool status = await _service.Insert(task);


        return status;
    }
    
    //http://localhost:5034/api/task/1
    [HttpPut ("{id}")]
    public async Task<bool> Update(Tasks task)
    {
        bool status = await _service.Update(task);
        return status;
    }

    //http://localhost:5034/api/task/1
    [HttpDelete ("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);

        return status;
    }


}