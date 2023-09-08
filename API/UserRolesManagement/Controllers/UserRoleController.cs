using Transflower.PMS.UserRolesManagement.Entities;
using Transflower.PMS.UserRolesManagement.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
namespace Transflower.PMS.UserRolesManagement.Controllers;
[ApiController]
[Route("/api/userroles/")]
public class UserRoleController : ControllerBase
{
    private readonly IUserRoleService _service;

    public UserRoleController(IUserRoleService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<List<UserRole>> GetAll()
    {
        return await _service.GetAll();
    }

    [HttpGet("{userRoleId}")]
    public async Task<UserRole?> GetById(int userRoleId)
    {
        return await _service.GetById(userRoleId);
    }

    [HttpGet("roles/{userId}")]
    public async Task<List<string>> GetRolesByUserId(int userId)
    {
        return await _service.GetRolesByUserId(userId);
    }

    [HttpPost]
    public async Task<bool> Insert(UserRole userRole)
    {
        return await _service.Insert(userRole);
    }

    [HttpGet("usersid/{role}")]
    public async Task<List<string>> GetUsersId(string role)
    {
        return await _service.GetUsersId(role);
    }

    [HttpPut]
    public async Task<bool> Update(UserRole userRole)
    {
        return await _service.Update(userRole);
    }

    [HttpDelete("{userRoleId}")]
    public async Task<bool> Delete(int userRoleId)
    {
        return await _service.Delete(userRoleId);
    }
}
