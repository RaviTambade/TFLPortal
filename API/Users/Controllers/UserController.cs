
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

    //httpget : http://localhost:5084/api/users/getall
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<User>> GetAll()
    {
        IEnumerable<User> users = await _service.GetAll();
        return users;
    }

    //httpGet : http://localhost:5084/api/users/get/1
    [HttpGet]
    [Route("get/{id}")]
    public async Task<User> Get(int id)
    {
        User user = await _service.Get(id);
        return user;
    }

    //httpPost : http://localhost:5084/api/users/user
    [HttpPost]
    [Route("User")]
    public async Task<bool> Insert(User user)
    {
        bool status = await _service.Insert(user);
        return status;
    }

    //httpPut : http://localhost:5084/api/users/1
    [HttpPut]
    [Route("/{id}")]
    public async Task<bool> Update(User user)
    {
        bool status = await _service.Update(user);
        return status;
    }

    //httpDelete : http://localhost:5084/api/users/1
    [HttpDelete]
    [Route("/{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }

    //httpPost : http://localhost:5084/api/users/validateuser
    [HttpPost]
    [Route("ValidateUser")]
    public async Task<bool> ValidateUser(Credential user)
    {
        bool status = await _service.ValidateUser(user);
        if (status == true)
        {
            Console.WriteLine("user is valid");
        }
        else
        {
            Console.WriteLine("Invalid User");
        }
        return status;
    }
}



