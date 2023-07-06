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
    public async Task<IEnumerable<Client>> GetAll() =>await _repo.GetAll();


     public async Task <Client>Get(int id)=>await _repo.Get(id);

     public async Task<bool> Insert(Client client)=>await _repo.Insert(client);

    public async Task<bool> Update(Client client)=>await _repo.Update(client);

    public async Task<bool> Delete(int id)=>await _repo.Delete(id);


}
