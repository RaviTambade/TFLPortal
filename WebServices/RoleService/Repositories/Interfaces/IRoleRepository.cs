using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IRoleRepository{


     
     List<Role> GetAll();

     Role Get(int id);

     bool Insert(Role role);

     bool Update (Role role);

     bool Delete(int id);
     
 }