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
        public IEnumerable<Account> GetAllAccount()
        {
            List<Account> accounts = _accountsrv.GetAll();
            return accounts;
        }

        [HttpGet]
        [Route("getaccountdetails/{id}")]
        public Account GetById(int id)
        {
            Account account = _accountsrv.GetById(id);
            return account;
        }



        //[Authorize(Roles = Role.Admin)]
        [HttpPost]
        [Route("addaccount")]
        public bool Insert([FromBody] Account account)
        {
            bool status = _accountsrv.Insert(account);
            return status;
        }

        //[Authorize(Roles = Role.Admin)]
        [HttpDelete]
        [Route("delete/{id}")]
        public bool Delete(int id)
        {
            bool status = _accountsrv.Delete(id);
            return status;
        }
        //[Authorize(Roles = Role.Admin)]
        [HttpPut]
        [Route("update/{id}")]
        public bool Update(Account account)
        {
            bool status = _accountsrv.Update(account);
            return status;
        }
    }
    
    
}
