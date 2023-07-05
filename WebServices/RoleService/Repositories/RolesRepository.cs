using PMS.Models;
using PMS.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace PMS.Repositories;

public class RoleRepository : IRoleRepository
{


    private IConfiguration _configuration;
    private string _conString;

    public RoleRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }


    public async Task<IEnumerable<Role>> GetAll()
    {
        List<Role> roles = new List<Role>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from roles";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (await  reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string roleName = reader["rolename"].ToString();
            
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
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from roles where id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (await reader.ReadAsync())
            {
                string roleName = reader["rolename"].ToString();
    
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
        con.ConnectionString = _conString;
        try
        {
            string query = "Insert into roles (rolename) values (@roleName)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@roleName", role.RoleName);
       
            await con.OpenAsync();
            int rowsaffected =await cmd.ExecuteNonQueryAsync();
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
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE roles SET rolename=@roleName WHERE id=@roleId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@roleId", role.RoleId);
            cmd.Parameters.AddWithValue("@roleName", role.RoleName);
            await connection.OpenAsync();
            int rowsaffected =await cmd.ExecuteNonQueryAsync();
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
        connection.ConnectionString = _conString;
        try
        {
            string query = "delete from roles where id=@roleId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@roleId", id);
            await connection.OpenAsync();
            int rowsaffected = await cmd.ExecuteNonQueryAsync();
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