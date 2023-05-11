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
public List<Account> GetAll()=>_repo.GetAll();
public Account GetById(int accountId)=>_repo.GetById(accountId);
public bool Insert(Account account)=>_repo.Insert(account);
public bool Update(Account account)=>_repo.Update(account);
public bool Delete(Int32  accountId)=>_repo.Delete(accountId);

}
