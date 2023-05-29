
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

    [HttpGet ("getall")]
    public IEnumerable<User> GetAll()
    {

        List<User> users = _service.GetAll();

        return users;

    }

    [HttpGet ("get/{id}")]
    public User Get(int id)
    {
        User user = _service.Get(id);


        return user;
    }

    [HttpPost("User")]
    public bool Insert(User user)
    {
        bool status = _service.Insert(user);


        return status;
    }

    [HttpPut ("/{id}")]

    public bool Update(User user)
    {
        bool status = _service.Update(user);

        return status;
    }


    [HttpDelete ("/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }


   [HttpPost ("ValidateUser")]
   public bool ValidateUser(Credential user){
    bool status =_service.ValidateUser(user);
    if(status==true){
        Console.WriteLine("user is valid");
    }
    else{
           Console.WriteLine("Invalid User");              
        }
    return status;
   }

}



