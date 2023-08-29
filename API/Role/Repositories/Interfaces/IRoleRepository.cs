
using Transflower.PMS.Models;

namespace Transflower.PMS.Repositories.Interfaces;
 
public interface IRoleRepository{
     
     Task<IEnumerable<Role>> GetAll();

     Task<Role> Get(int id);

     Task<bool> Insert(Role role);

     Task<bool> Update (Role role);

     Task<bool> Delete(int id);

     Task<List<string>> GetRolesOfUser(int id);
     
 }