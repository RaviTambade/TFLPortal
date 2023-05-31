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
    public List<Role> GetAll()=>_repo.GetAll();

    public Role Get(int id)=>_repo.Get(id);

    public bool Insert(Role role)=>_repo.Insert(role);

    public bool Update(Role role)=>_repo.Update(role);

    public bool Delete(int id)=>_repo.Delete(id);


}