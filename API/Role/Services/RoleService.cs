using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class RoleServices : IRoleServices
{

     private readonly IRoleRepository _repo ;
   
    public RoleServices(IRoleRepository repo){
        _repo=repo;
    }
    public async Task<IEnumerable<Role>> GetAll()=>await _repo.GetAll();

    public async Task<Role> Get(int id)=>await _repo.Get(id);

    public async Task<bool> Insert(Role role)=>await _repo.Insert(role);

    public async Task<bool> Update(Role role)=>await _repo.Update(role);

    public async Task<bool> Delete(int id)=>await _repo.Delete(id);

    public Task<List<string>> GetRolesOfUser(int id )=>_repo.GetRolesOfUser(id);

}