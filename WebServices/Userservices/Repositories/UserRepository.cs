using UserServices.Models;
using UserServices.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace UserServices.Repositories;

public class UserRepository : IUserRepository
{


    private IConfiguration _configuration;
    private string _conString;

    public UserRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }

    public bool ValidateUser(Credential user)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_conString);
        try
        {
            MySqlCommand cmd = new MySqlCommand();
            cmd.CommandText = "SELECT EXISTS(SELECT * FROM users where email=@email and password=@password)";
            cmd.Connection = connection;
            cmd.Parameters.AddWithValue("@email", user.Email);
            cmd.Parameters.AddWithValue("@password", user.Password);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            if ((Int64)reader[0] == 1)
            {
                status = true;
            }
       
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            connection.Close();
        }
        return status;

    }

    public List<User> GetAll()
    {
        List<User> users = new List<User>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from users";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string email = reader["email"].ToString();
                string password = reader["password"].ToString();
                


                User user = new User
                {
                    UserId = id,
                    Email = email,
                    Password = password,
                 
                };

                users.Add(user);

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


        return users;
    }

    public User Get(int id)
    {

        User user = new User();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from users where id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {


                string email = reader["email"].ToString();
                string password = reader["password"].ToString();
                

                user = new User()
                {
                    UserId = id,
                    Email = email,
                    Password = password,
                    

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

        return user;
    }


    public bool Insert(User user)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = "Insert into users(email,password) values (@email,@password)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@email", user.Email);
            cmd.Parameters.AddWithValue("@password", user.Password);

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

    public bool Update(User user)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE users SET email=@email,password=@password WHERE id=@userId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@userId", user.UserId);
            cmd.Parameters.AddWithValue("@email", user.Email);
            cmd.Parameters.AddWithValue("@password", user.Password);
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

            string query = "delete from users where id=@userId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@userId", id);
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