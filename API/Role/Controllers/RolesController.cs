
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PMS.Helpers;

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
   // [Authorize]
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Role>> GetAll()
    {
        IEnumerable<Role> roles = await _service.GetAll();
        return roles;
    }

    // httpGet : http://localhost:5131/api/role/get/{id}
    //   [Authorize]
    [HttpGet]
    [Route("get/{id}")]
    public async Task<Role> GetById(int id)
    {
        Role role = await _service.Get(id);
        return role;
    }

    // httpPost : http://localhost:5131/api/role/role
     //  [Authorize]
    [HttpPost]
    [Route("Role")]
    public async Task<bool> Insert(Role role)
    {
        bool status = await _service.Insert(role);
        return status;
    }

    // httpPut : http://localhost:5131/api/role/1
       //   [Authorize]
    [HttpPut]
    [Route("{id}")]
    public async Task<bool> Update(Role role)
    {
        bool status = await _service.Update(role);
        return status;
    }

    // httpDelete : http://localhost:5131/api/role/1
       //  [Authorize]
    [HttpDelete]
    [Route("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }
    // httpDelete : http://localhost:5131/api/role/user/{id}
      [HttpGet("user/{id}")]
    public  async Task<List<string>> GetRolesOfUser(int id)
    {
        List<string> roles = await  _service.GetRolesOfUser(id);

        return roles;
    }
























    // // httpPut : http://localhost:5131/api/role/1
    //    //   [Authorize]
    // [HttpPut]
    // [Route("{id}")]
    // public async Task<bool> Update(Role role)
    // {
    //     bool status = await _service.Update(role);
    //     return status;
    // }

    // // httpDelete : http://localhost:5131/api/role/1
    //    //  [Authorize]
    // [HttpDelete]
    // [Route("{id}")]
    // public async Task<bool> Delete(int id)
    // {
    //     bool status = await _service.Delete(id);
    //     return status;
    // }
    // // httpDelete : http://localhost:5131/api/role/user/{id}
    //   [HttpGet("user/{id}")]
    // public  async Task<List<string>> GetRolesOfUser(int id)
    // {
    //     List<string> roles = await  _service.GetRolesOfUser(id);

    //     return roles;
    // }


}



