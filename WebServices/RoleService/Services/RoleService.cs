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
    public List<Role> GetAllRoles()=>_repo.GetAllRoles();

    public Role GetById(int id)=>_repo.GetById(id);

    public bool InsertRole(Role role)=>_repo.InsertRole(role);

    public bool UpdateRole(Role role)=>_repo.UpdateRole(role);

    public bool DeleteRole(int id)=>_repo.DeleteRole(id);


}