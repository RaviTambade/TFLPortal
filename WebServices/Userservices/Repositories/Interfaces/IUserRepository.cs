using UserServices.Models;

namespace UserServices.Repositories.Interfaces;
 
public interface IUserRepository{


     public bool ValidateUser(Credential user);
     
     List<User> GetAllUsers();

     User GetById(int id);

     bool InsertUser(User user);

     bool UpdateUser(User user);

     bool DeleteUser(int id);
     
 }