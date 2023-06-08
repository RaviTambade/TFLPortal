using PMS.Models;
using PMS.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace PMS.Repositories;

public class ClientRepository : IClientRepository
{


    private IConfiguration _configuration;
    private string _conString;

    public ClientRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }



    public List<Client> GetAll()
    {
        List<Client> clients = new List<Client>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from clients";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string clientName = reader["title"].ToString();
                string clientAddress = reader["address"].ToString();
                string clientdetails = reader["details"].ToString();
                string accountNumber = reader["accountnumber"].ToString();
                Client client = new Client
                {
                   ClientId=id,
                   ClientName=clientName,
                   ClientAddress=clientAddress,
                   ClientDetails=clientdetails,
                   AccountNumber=accountNumber
                 
                };

                clients.Add(client);

            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }

        finally
        {
            connection.Close();
        }


        return clients;
    }

    public Client Get(int id)
    {

        Client client = new Client();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from clients where id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {

                int clientid = Int32.Parse(reader["id"].ToString());
                string clientName = reader["title"].ToString();
                string clientAddress = reader["address"].ToString();
                string clientdetails = reader["details"].ToString();
                string accountNumber = reader["accountnumber"].ToString();
        

                client = new Client()
                {
                   ClientId=clientid,
                   ClientName=clientName,
                   ClientAddress=clientAddress,
                   ClientDetails=clientdetails,
                   AccountNumber=accountNumber
                };
            }
            reader.Close();
        }
        catch (Exception ee)
        {

            throw ee;

        }

        finally
        {
            connection.Close();
        }

        return client;
    }


    public bool Insert(Client client)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = "Insert into clients(title,address,details,accountnumber) values (@clientName,@clientaddress,@clientdetails,@accountnumber)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@clientName", client.ClientName);
            cmd.Parameters.AddWithValue("@clientaddress", client.ClientAddress);
            cmd.Parameters.AddWithValue("@clientdetails", client.ClientDetails);
            cmd.Parameters.AddWithValue("@accountnumber", client.AccountNumber);
            con.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
            if (rowsaffected > 0)
            {

                status = true;
            }
        }

        catch (Exception ee)
        {

            throw ee;
        }

        finally
        {

            con.Close();
        }

        return status;

    }

    public bool Update(Client client)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE clients SET title=@clientName,address =@clientaddress,details=@clientdetails,accountnumber=@accountnumber WHERE id=@clientId";
            MySqlCommand cmd = new MySqlCommand(query, connection); 
            cmd.Parameters.AddWithValue("@clientId", client.ClientId);
            cmd.Parameters.AddWithValue("@clientName", client.ClientName);
            cmd.Parameters.AddWithValue("@clientaddress", client.ClientAddress);
            cmd.Parameters.AddWithValue("@clientdetails", client.ClientDetails);
            cmd.Parameters.AddWithValue("@accountnumber", client.AccountNumber);
             connection.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
            if (rowsaffected > 0)
            {
                status = true;
            }

        }

        catch (Exception ee)
        {

            throw ee;

        }

        finally
        {

            connection.Close();
        }
        return status;
    }


    public bool Delete(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "delete from clients where id=@clientId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@clientId", id);
            connection.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
            if (rowsaffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {

            throw ee;
        }

        finally
        {
            connection.Close();
        }
        return status;
    }
}
