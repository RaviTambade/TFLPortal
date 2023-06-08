using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class ClientServices : IClientServices
{

     private readonly IClientRepository _repo ;
   
    public ClientServices(IClientRepository repo){
        _repo=repo;
    }
    public List<Client> GetAll()=>_repo.GetAll();

    public Client Get(int id)=>_repo.Get(id);

    public bool Insert(Client client)=>_repo.Insert(client);

    public bool Update(Client client)=>_repo.Update(client);

    public bool Delete(int id)=>_repo.Delete(id);


}
