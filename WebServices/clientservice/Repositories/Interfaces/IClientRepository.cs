using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IClientRepository{


     
     List<Client> GetAll();

     Client GetById(int id);

     bool InsertClient(Client client);

     bool UpdateClient(Client client);

     bool DeleteClient(int id);
     
 }