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
    public List<User> GetAll()=>_repo.GetAll();

    public User Get(int id)=>_repo.Get(id);

    public bool Insert(User user)=>_repo.Insert(user);

    public bool Update(User user)=>_repo.Update(user);

    public bool Delete(int id)=>_repo.Delete(id);

    public bool ValidateUser(Credential user)=>_repo.ValidateUser(user);

}