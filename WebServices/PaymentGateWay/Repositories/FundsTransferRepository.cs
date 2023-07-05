using API.Models;
using API.Repositories.Interfaces;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace API.Repositories;

//Saving and Restoring logic into json file
public class PaymentGatewayRepo:IPaymentGatewayRepo
{
    private IConfiguration _configuration;
    private string _conString;
    public PaymentGatewayRepo(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public async Task<int> FundTransfer(PaymentGateWay info)
    {
        int transactionId=0;
        MySqlConnection con = new MySqlConnection(_conString);
        //Create Command Object
        try{
            await con.OpenAsync();
            MySqlCommand cmd = new MySqlCommand("fundtransfer", con as MySqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@fromaccountnumber",info.FromAcct);
            cmd.Parameters.AddWithValue("@toaccountnumber",info.ToAcct);
            cmd.Parameters.AddWithValue("@amount",info.Amount);
            cmd.Parameters.AddWithValue("@fromifsccode",info.FromIfsc);
            cmd.Parameters.AddWithValue("@toifsccode",info.ToIfsc);
            cmd.Parameters.AddWithValue("@transactionId", MySqlDbType.Int32);
            cmd.Parameters["@transactionId"].Direction=ParameterDirection.Output;
            int rowsAffected =await cmd.ExecuteNonQueryAsync();
            transactionId=(int)cmd.Parameters["@transactionId"].Value;
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return transactionId;
    }
}