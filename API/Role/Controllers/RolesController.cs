
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

    // httpGet : http://localhost:5131/api/role/getall
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Role>> GetAll()
    {
        IEnumerable<Role> roles = await _service.GetAll();
        return roles;
    }

    // httpGet : http://localhost:5131/api/role/get/1
    [HttpGet]
    [Route("get/{id}")]
    public async Task<Role> GetById(int id)
    {
        Role role = await _service.Get(id);
        return role;
    }

    // httpPost : http://localhost:5131/api/role/get/1
    [HttpPost]
    [Route("Role")]
    public async Task<bool> Insert(Role role)
    {
        bool status = await _service.Insert(role);
        return status;
    }

    // httpPut : http://localhost:5131/api/role/1
    [HttpPut]
    [Route("{id}")]
    public async Task<bool> Update(Role role)
    {
        bool status = await _service.Update(role);
        return status;
    }

    // httpDelete : http://localhost:5131/api/role/1
    [HttpDelete]
    [Route("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }



}



