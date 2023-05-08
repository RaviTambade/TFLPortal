
using UserServices.Models;
using UserServices.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace users.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UsersController : ControllerBase
{

    private readonly IUserServices _service;

    public UsersController(IUserServices service)
    {
        _service = service;
    }

    [HttpGet]
    [Route("getall")]
    public IEnumerable<User> GetAll()
    {

        List<User> users = _service.GetAllUsers();

        return users;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public User GetById(int id)
    {
        User user = _service.GetById(id);


        return user;
    }

    [HttpPost]
    [Route("InsertUser")]
    public bool InsertUser(User user)
    {
        bool status = _service.InsertUser(user);


        return status;
    }

    [HttpPut]
    [Route("updateUser/{id}")]

    public bool UpdateUser(User user)
    {
        bool status = _service.UpdateUser(user);

        return status;
    }


    [HttpDelete]
    [Route("DeleteUser/{id}")]
    public bool DeleteUser(int id)
    {
        bool status = _service.DeleteUser(id);

        return status;
    }
}
