
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

    [HttpGet]
    [Route("getall")]
    public IEnumerable<Role> GetAll()
    {

        List<Role> roles = _service.GetAllRoles();

        return roles;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public Role GetById(int id)
    {
        Role role = _service.GetById(id);


        return role;
    }

    [HttpPost]
    [Route("InsertRole")]
    public bool InsertRole(Role role)
    {
        bool status = _service.InsertRole(role);


        return status;
    }

    [HttpPut]
    [Route("updateRole/{id}")]

    public bool UpdateRole(Role role)
    {
        bool status = _service.UpdateRole(role);

        return status;
    }


    [HttpDelete]
    [Route("DeleteRole/{id}")]
    public bool DeleteRole(int id)
    {
        bool status = _service.DeleteRole(id);

        return status;
    }



}



