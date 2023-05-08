using UserServices.Models;

namespace UserServices.Repositories.Interfaces;
 
public interface IUserRepository{

     List<User> GetAllUsers();

     User GetById(int id);

     bool InsertUser(User user);

     bool UpdateUser(User user);

     bool DeleteUser(int id);
 }