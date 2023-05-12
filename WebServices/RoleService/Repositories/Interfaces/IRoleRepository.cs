using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IRoleRepository{


     
     List<Role> GetAllRoles();

     Role GetById(int id);

     bool InsertRole(Role role);

     bool UpdateRole(Role role);

     bool DeleteRole(int id);
     
 }