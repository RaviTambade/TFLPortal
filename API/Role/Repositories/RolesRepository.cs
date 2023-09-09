
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using Transflower.PMS.Models;
using Transflower.PMS.Repositories.Interfaces;

namespace Transflower.PMS.Repositories;

public class RoleRepository : IRoleRepository
{


    private IConfiguration _configuration;
    private string _connectionString;

    public RoleRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = this._configuration.GetConnectionString("DefaultConnection");
    }


    public async Task<IEnumerable<Role>> GetAll()
    {
        List<Role> roles = new List<Role>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from roles";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = command.ExecuteReader();
            while (await  reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string roleName = reader["name"].ToString();
            
                Role role = new Role
                {
                    RoleId = id,
                    RoleName = roleName,           
                };
              roles.Add(role);
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
        return roles;
    }

    public async Task<Role> Get(int id)
    {

        Role role = new Role();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from roles where id =" + id;
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                string roleName = reader["name"].ToString();
    
                role = new Role()
                {
                    RoleId = id,
                    RoleName = roleName,
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
        return role;
    }


    public async Task<bool> Insert(Role role)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            string query = "Insert into roles (name) values (@name)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@name", role.RoleName);
       
            await con.OpenAsync();
            int rowsaffected =await command.ExecuteNonQueryAsync();
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

    public async Task<bool> Update(Role role)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "UPDATE roles SET name=@name WHERE id=@roleId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@roleId", role.RoleId);
            command.Parameters.AddWithValue("@name", role.RoleName);
            await connection.OpenAsync();
            int rowsaffected =await command.ExecuteNonQueryAsync();
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


    public async Task<bool> Delete(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "delete from roles where id=@roleId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@roleId", id);
            await connection.OpenAsync();
            int rowsaffected = await command.ExecuteNonQueryAsync();
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

    public async Task<List<string>> GetRolesOfUser(int id)
     {
        List<string> roles = new List<string>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select  roles.name from roles inner join userroles on roles.id= userroles.roleid where userroles.userid=@userId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@userId", id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while(await reader.ReadAsync())
            {
                string role = reader["name"].ToString();
                 roles.Add(role);
            }
            await reader.CloseAsync();
        }

        catch (Exception ee)
        {
            throw ee;
        }

        finally
        {

           await connection.CloseAsync();
        }

        return roles;
    }
}