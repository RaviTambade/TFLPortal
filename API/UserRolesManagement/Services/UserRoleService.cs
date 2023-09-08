using Transflower.PMS.UserRolesManagement.Services.Interfaces;
using Transflower.PMS.UserRolesManagement.Repositories.Interfaces;
using Transflower.PMS.UserRolesManagement.Entities;
namespace Transflower.PMS.UserRolesManagement.Services;
public class UserRoleService : IUserRoleService
{
    private readonly IUserRoleRepository _repository;

    public UserRoleService(IUserRoleRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<UserRole>> GetAll()
    {
        return await _repository.GetAll();
    }

    public async Task<UserRole?> GetById(int userRoleId)
    {
        return await _repository.GetById(userRoleId);
    }

    public async Task<List<string>> GetRolesByUserId(int userId)
    {
        return await _repository.GetRolesByUserId(userId);
    }

    public async Task<List<string>> GetUsersId(string role)
    {
        return await _repository.GetUsersId(role);
    }

    public async Task<bool> Insert(UserRole userRole)
    {
        return await _repository.Insert(userRole);
    }

    public async Task<bool> Update(UserRole userRole)
    {
        return await _repository.Update(userRole);
    }

    public async Task<bool> Delete(int userRoleId)
    {
        return await _repository.Delete(userRoleId);
    }
}
