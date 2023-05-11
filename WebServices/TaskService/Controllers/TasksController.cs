
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

    [HttpGet]
    [Route("getall")]
    public IEnumerable<Tasks> GetAll()
    {

        List<Tasks> tasks = _service.GetAll();

        return tasks;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public Tasks GetById(int id)
    {
        Tasks task = _service.GetById(id);
          Console.WriteLine(task);

        return task;
    }

    [HttpPost]
    [Route("Inserttask")]
    public bool Insert(Tasks task)
    {
        bool status = _service.Insert(task);


        return status;
    }

    [HttpPut]
    [Route("updateTask/{id}")]

    public bool Update(Tasks task)
    {
        bool status = _service.Update(task);

        return status;
    }


    [HttpDelete]
    [Route("Deletetask/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }


}



