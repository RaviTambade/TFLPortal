
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
    public async Task<IEnumerable<Role>> GetAll()
    {
        IEnumerable<Role> roles =await _service.GetAll();
        return roles;
    }

    [HttpGet("get/{id}")]
    public async Task<Role> GetById(int id)
    {
        Role role =await _service.Get(id);
        return role;
    }

    [HttpPost("Role")]
    public async Task<bool> Insert(Role role)
    {
        bool status =await _service.Insert(role);
        return status;
    }

    [HttpPut  ("{id}")]

    public async Task<bool> Update(Role role)
    {
        bool status =await _service.Update(role);
        return status;
    }


    [HttpDelete  ("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }



}



