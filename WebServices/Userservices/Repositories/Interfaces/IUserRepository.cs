using UserServices.Models;

namespace UserServices.Repositories.Interfaces;

public interface IUserRepository
{
    Task<bool> ValidateUser(Credential user);
    Task<IEnumerable<User>> GetAll();
    Task<User> Get(int id);
    Task<bool> Insert(User user);
    Task<bool> Update(User user);
    Task<bool> Delete(int id);

}