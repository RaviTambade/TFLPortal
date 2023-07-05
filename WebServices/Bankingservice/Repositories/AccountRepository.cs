using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using BankingService.Models;
using BankingService.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace BankingService.Repositories;
public class AccountRepository : IAccountRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public AccountRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public async Task<IEnumerable<Account>> GetAll()
    {
        List<Account> accounts = new List<Account>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM accounts";
            MySqlCommand command = new MySqlCommand(query, con);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int accountId = int.Parse(reader["account_id"].ToString());
                string accountNumber = reader["account_number"].ToString();
                string ifscCode = reader["ifsc_code"].ToString();
                DateTime registerDate = Convert.ToDateTime(reader["register_date"].ToString());
                double accountBalance = double.Parse(reader["balance"].ToString());
                Account account = new Account
                {
                    AccountId = accountId,
                    AccountNumber = accountNumber,
                    IFSCCode = ifscCode,
                    RegisterDate = registerDate.ToShortDateString(),
                    Balance = accountBalance
                };
                accounts.Add(account);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return accounts;
    }

    public async Task<Account> GetById(int accountId)
    {
        Account account = new Account();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM accounts where account_Id =@accountId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@accountId", accountId);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int accountid = int.Parse(reader["account_id"].ToString());
                string accountNumber =reader["account_number"].ToString();
                string ifscCode = reader["ifsc_code"].ToString();
                DateTime registerDate = Convert.ToDateTime(reader["register_date"].ToString());
                double accountBalance = double.Parse(reader["balance"].ToString());
                account = new Account
                {
                    AccountId = accountid,
                    AccountNumber = accountNumber,
                    IFSCCode = ifscCode,
                    RegisterDate = registerDate.ToShortDateString(),
                    Balance = accountBalance
                };
            }
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return account;
    }

    public async Task<bool> Insert(Account account)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES(@accountNumber,@ifscCode,@registerDate,@balance)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@accountNumber", account.AccountNumber);
            command.Parameters.AddWithValue("@ifscCode", account.IFSCCode);
            command.Parameters.AddWithValue("@registerDate", account.RegisterDate);
            command.Parameters.AddWithValue("@balance", account.Balance);

            await con.OpenAsync();
             int rowsAffected=await command.ExecuteNonQueryAsync();
            if(rowsAffected >0){
             status=true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return status;

    }
    public async Task<bool> Update(Account account)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update accounts SET account_number =@accountNumber,ifsc_code =@ifscCode,register_date=@registerDate,balance=@balance WHERE account_id=@accountId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@accountNumber", account.AccountNumber);
            command.Parameters.AddWithValue("@ifscCode", account.IFSCCode);
            command.Parameters.AddWithValue("@registerDate", account.RegisterDate);
            command.Parameters.AddWithValue("@balance", account.Balance);
            command.Parameters.AddWithValue("@accountId", account.AccountId);
            await con.OpenAsync();
             int rowsAffected=await command.ExecuteNonQueryAsync();
            if(rowsAffected >0){
             status=true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return status;

    }
    public async Task<bool> Delete(Int32 accountId)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM accounts WHERE account_id=@accountId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@accountId", accountId);
            await con.OpenAsync();
             int rowsAffected=await command.ExecuteNonQueryAsync();
            if(rowsAffected >0){
             status=true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return status;

    }
}
