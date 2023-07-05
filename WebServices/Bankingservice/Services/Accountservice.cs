using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BankingService.Models;
using BankingService.Repositories.Interfaces;
using BankingService.Services.Interfaces;
namespace BankingService.Services;
public class AccountService:IAccountService{
private readonly IAccountRepository _repo;
public AccountService(IAccountRepository repo){
    this._repo=repo;

}
public async Task<IEnumerable<Account>> GetAll()=>await _repo.GetAll();
public async Task<Account> GetById(int accountId)=>await _repo.GetById(accountId);
public async Task<bool> Insert(Account account)=>await _repo.Insert(account);
public async Task<bool> Update(Account account)=>await _repo.Update(account);
public async Task<bool> Delete(Int32  accountId)=>await _repo.Delete(accountId);

}
