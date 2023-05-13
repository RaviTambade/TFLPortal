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
            string query = "select * from client";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["client_id"].ToString());
                string clientName = reader["clt_name"].ToString();
                string clientAddress = reader["clt_address"].ToString();
                string clientdetails = reader["clt_details"].ToString();
                string accountNumber = reader["account_number"].ToString();
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

    public Client GetById(int id)
    {

        Client client = new Client();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from client where client_id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {

                int clientid = Int32.Parse(reader["client_id"].ToString());
                string clientName = reader["clt_name"].ToString();
                string clientAddress = reader["clt_address"].ToString();
                string clientdetails = reader["clt_details"].ToString();
                string accountNumber = reader["account_number"].ToString();
        

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


    public bool InsertClient(Client client)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = "Insert into client(clt_name,clt_address,clt_details,account_number) values (@clientName,@clientaddress,@clientdetails,@accountnumber)";
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

    public bool UpdateClient(Client client)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE client SET clt_name=@clientName,clt_address =@clientaddress,clt_details=@clientdetails,account_number=@accountnumber WHERE client_id=@clientId";
            MySqlCommand command = new MySqlCommand(query, connection); 
            command.Parameters.AddWithValue("@clientId", client.ClientId);
            command.Parameters.AddWithValue("@clientName", client.ClientName);
            command.Parameters.AddWithValue("@clientaddress", client.ClientAddress);
            command.Parameters.AddWithValue("@clientdetails", client.ClientDetails);
            command.Parameters.AddWithValue("@accountnumber", client.AccountNumber);
             connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
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


    public bool DeleteClient(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "delete from client where client_id=@clientId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@clientId", id);
            connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
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