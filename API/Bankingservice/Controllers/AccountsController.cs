using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BankingService.Models;
using BankingService.Services;
using BankingService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace BankingService.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AccountsController : ControllerBase

    {
        private readonly IAccountService _accountsrv;
        public AccountsController(IAccountService accountsrv)
        {
            _accountsrv = accountsrv;
        }

        [HttpGet]
        [Route("getallaccounts")]
        public async Task<IEnumerable<Account>> GetAllAccount()
        {
            IEnumerable<Account> accounts =await _accountsrv.GetAll();
            return accounts;
        }

        [HttpGet]
        [Route("getaccountdetails/{id}")]
        public async Task<Account> GetById(int id)
        {
            Account account =await _accountsrv.GetById(id);
            return account;
        }



        //[Authorize(Roles = Role.Admin)]
        [HttpPost]
        [Route("addaccount")]
        public async Task<bool> Insert([FromBody] Account account)
        {
            bool status =await _accountsrv.Insert(account);
            return status;
        }

        //[Authorize(Roles = Role.Admin)]
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<bool> Delete(int id)
        {
            bool status =await _accountsrv.Delete(id);
            return status;
        }
        //[Authorize(Roles = Role.Admin)]
        [HttpPut]
        [Route("update")]
        public async  Task<bool> Update(Account account)
        {
            bool status =await _accountsrv.Update(account);
            return status;
        }
    }
    
    
}
