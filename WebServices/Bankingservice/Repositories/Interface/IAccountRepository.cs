using BankingService.Models;

namespace BankingService.Repositories.Interfaces;
public interface IAccountRepository{

    List<Account> GetAll();

    Account GetById(int accountId);

   bool Insert(Account account);
   bool Update(Account account);
   bool Delete(int accountId);
   
}