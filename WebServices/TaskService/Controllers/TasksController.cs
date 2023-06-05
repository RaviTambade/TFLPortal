using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace task.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TaskController : ControllerBase
{

    private readonly ITaskServices _service;

    public TaskController(ITaskServices service)
    {
        _service = service;
    }


    //http://localhost:5034/api/Task/getall
    [HttpGet ("getall")]
    public IEnumerable<Tasks> GetAll()
    {

        List<Tasks> tasks = _service.GetAll();

        return tasks;

    }

     //http://localhost:5034/api/task/get/1
    [HttpGet ("get/{id}")]
    public Tasks GetById(int id)
    {
        Tasks task = _service.GetById(id);
          Console.WriteLine(task);

        return task;
    }

    //http://localhost:5034/api/task/task
    [HttpPost ("task")]
    public bool Insert(Tasks task)
    {
        bool status = _service.Insert(task);


        return status;
    }
    
    //http://localhost:5034/api/task/1
    [HttpPut ("{id}")]
    public bool Update(Tasks task)
    {
        bool status = _service.Update(task);
        return status;
    }

    //http://localhost:5034/api/task/1
    [HttpDelete ("{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }


}