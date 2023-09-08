using Transflower.PMS.UserRolesManagement.Entities;
using Transflower.PMS.UserRolesManagement.Repositories.Interfaces;
using  Transflower.PMS.UserRolesManagement.Repositories.Contexts;
using Microsoft.EntityFrameworkCore;
namespace Transflower.PMS.UserRolesManagement.Repositories;

public class UserRoleRepository : IUserRoleRepository
{
    private readonly UserRoleContext _context;

    public UserRoleRepository(UserRoleContext context)
    {
        _context = context;
    }

    public async Task<List<UserRole>> GetAll()
    {
        try
        {
            var userRoles = await _context.UserRoles.ToListAsync();
            return userRoles;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<UserRole?> GetById(int userRoleId)
    {
        try
        {
            var userRole = await _context.UserRoles.FindAsync(userRoleId);
            return userRole;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<string>> GetRolesByUserId(int userId)
    {
        try
        {
            var roles = await (
                from role in _context.Roles
                join userRoles in _context.UserRoles on role.Id equals userRoles.RoleId
                where userRoles.UserId == userId
                select role.Name
            ).ToListAsync();
            return roles;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<string>> GetUsersId(string roleName)
    {
        try
        {
            List<int> userIds = await (
                from role in _context.Roles
                join userRoles in _context.UserRoles on role.Id equals userRoles.RoleId
                where role.Name == roleName
                select userRoles.UserId
            ).ToListAsync();

            string userIdString = string.Join(",", userIds);
            List<string> userIdStringList = new List<string> { userIdString };
            return userIdStringList;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<bool> Insert(UserRole userRole)
    {
        bool status = false;
        try
        {
            await _context.UserRoles.AddAsync(userRole);
            status = await SaveChanges(_context);
        }
        catch (Exception)
        {
            throw;
        }
        return status;
    }

    public async Task<bool> Update(UserRole userRole)
    {
        bool status = false;
        try
        {
            var oldMerchant = await _context.UserRoles.FindAsync(userRole.Id);
            if (oldMerchant is not null)
            {
                oldMerchant.UserId = userRole.UserId;
                oldMerchant.RoleId = userRole.RoleId;
                status = await SaveChanges(_context);
            }
        }
        catch (Exception)
        {
            throw;
        }
        return status;
    }

    public async Task<bool> Delete(int userRoleId)
    {
        bool status = false;
        try
        {
            var userRole = await _context.UserRoles.FindAsync(userRoleId);
            if (userRole is not null)
            {
                _context.UserRoles.Remove(userRole);
                status = await SaveChanges(_context);
            }
        }
        catch (Exception)
        {
            throw;
        }
        return status;
    }

    private async Task<bool> SaveChanges(UserRoleContext _context)
    {
        int rowsAffected = await _context.SaveChangesAsync();
        return rowsAffected > 0;
    }
}
