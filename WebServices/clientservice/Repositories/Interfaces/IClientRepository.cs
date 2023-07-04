using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IClientRepository{


     Task<IEnumerable<Client>> GetAll();
     Task<Client> Get(int id);

     Task<bool> Insert(Client client);

     Task<bool> Update(Client client);

     Task <bool> Delete(int id);
     
 }
