
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace roles.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class RoleController : ControllerBase
{

    private readonly IRoleServices _service;

    public RoleController(IRoleServices service)
    {
        _service = service;
    }

    [HttpGet ("getall")]
    public IEnumerable<Role> GetAll()
    {

        List<Role> roles = _service.GetAll();

        return roles;

    }

    [HttpGet("get/{id}")]
    public Role GetById(int id)
    {
        Role role = _service.Get(id);


        return role;
    }

    [HttpPost("Role")]
    public bool Insert(Role role)
    {
        bool status = _service.Insert(role);


        return status;
    }

    [HttpPut  ("{id}")]

    public bool Update(Role role)
    {
        bool status = _service.Update(role);

        return status;
    }


    [HttpDelete  ("{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }



}



