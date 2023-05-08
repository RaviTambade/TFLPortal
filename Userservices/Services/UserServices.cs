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
    public List<User> GetAllUsers()=>_repo.GetAllUsers();

    public User GetById(int id)=>_repo.GetById(id);

    public bool InsertUser(User user)=>_repo.InsertUser(user);

    public bool UpdateUser(User user)=>_repo.UpdateUser(user);

    public bool DeleteUser(int id)=>_repo.DeleteUser(id);

    public bool ValidateUser(Credential user)=>_repo.ValidateUser(user);

}