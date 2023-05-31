
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

<<<<<<< HEAD
    [HttpGet ("getall")]
=======
    [HttpGet("getall")]
>>>>>>> 5585513fea03976cc5c07705413e392be7d34990
    public IEnumerable<Tasks> GetAll()
    {

        List<Tasks> tasks = _service.GetAll();

        return tasks;

    }

<<<<<<< HEAD
    [HttpGet ("get/{id}")]
=======
    [HttpGet("get/{id}")]
>>>>>>> 5585513fea03976cc5c07705413e392be7d34990
    public Tasks GetById(int id)
    {
        Tasks task = _service.GetById(id);
          Console.WriteLine(task);

        return task;
    }

<<<<<<< HEAD
    [HttpPost ("task")]
=======
    [HttpPost("task")]
>>>>>>> 5585513fea03976cc5c07705413e392be7d34990
    public bool Insert(Tasks task)
    {
        bool status = _service.Insert(task);


        return status;
    }

<<<<<<< HEAD
    [HttpPut ("id")]
=======
    [HttpPut("{id}")]
>>>>>>> 5585513fea03976cc5c07705413e392be7d34990

    public bool Update(Tasks task)
    {
        bool status = _service.Update(task);

        return status;
    }


<<<<<<< HEAD
    [HttpDelete ("id")]
=======
    [HttpDelete("{id}")]
>>>>>>> 5585513fea03976cc5c07705413e392be7d34990
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }


}
