using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IClientRepository{


     
     List<Client> GetAll();

     Client Get(int id);

     bool Insert(Client client);

     bool Update(Client client);

     bool Delete(int id);
     
 }
