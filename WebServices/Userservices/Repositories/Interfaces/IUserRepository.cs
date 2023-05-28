using UserServices.Models;

namespace UserServices.Repositories.Interfaces;
 
public interface IUserRepository{


     public bool ValidateUser(Credential user);
     
     List<User> GetAll();

     User Get(int id);

     bool Insert(User user);

     bool Update(User user);

     bool Delete(int id);
     
 }