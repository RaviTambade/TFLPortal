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

    public Client GetById(int id)=>_repo.GetById(id);

    public bool InsertClient(Client client)=>_repo.InsertClient(client);

    public bool UpdateClient(Client client)=>_repo.UpdateClient(client);

    public bool DeleteClient(int id)=>_repo.DeleteClient(id);


}