using BankingService.Models;

namespace BankingService.Repositories.Interfaces;
public interface IAccountRepository
{

    Task<IEnumerable<Account>> GetAll();
    Task<Account> GetById(int accountId);
    Task<bool> Insert(Account account);
    Task<bool> Update(Account account);
    Task<bool> Delete(int accountId);

}