using UserServices.Models;
using UserServices.Repositories.Interfaces;
using UserServices.Services.Interfaces;
namespace UserServices.Services;


public class UserService : IUserServices
{

     private readonly IUserRepository _repo ;
   
    public UserService(IUserRepository repo){
        _repo=repo;
    }
    public async Task<IEnumerable<User>> GetAll()=>await _repo.GetAll();

    public async Task<User> Get(int id)=>await _repo.Get(id);

    public async Task<bool> Insert(User user)=>await _repo.Insert(user);

    public async Task<bool> Update(User user)=>await _repo.Update(user);

    public async Task<bool> Delete(int id)=>await _repo.Delete(id);

    public async Task<bool> ValidateUser(Credential user)=>await _repo.ValidateUser(user);

}