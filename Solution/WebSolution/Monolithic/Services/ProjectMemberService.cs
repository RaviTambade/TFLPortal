using MySql.Data.MySqlClient;
using TFLPortal.Models;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class ProjectMemberService : IProjectMemberService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public ProjectMemberService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> Assign(Member member){
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO projectmembers(projectid,employeeid,title,assignedon,status) VALUES(@projectId,@employeeId,@title,@assignedOn,@status)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectId", member.ProjectId);
            cmd.Parameters.AddWithValue("@employeeId", member.EmployeeId);
            cmd.Parameters.AddWithValue("@title", member.Title);
            cmd.Parameters.AddWithValue("@assignedOn",member.AssignedOn);
            cmd.Parameters.AddWithValue("@status", member.Status);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }
    }

    public async Task<bool> Release(Member member)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectmembers set releasedon=@releasedOn,status=@status where id=@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@releasedOn", member.ReleasedOn);
            cmd.Parameters.AddWithValue("@status", member.Status);
            cmd.Parameters.AddWithValue("@Id", member.Id);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

 
    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= new List<Member>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =@"Select * from projectmembers where projectid=@projectId and status=@status";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", "yes");
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Member member = new Member
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Title = reader.GetString("title"),
                    AssignedOn = reader.GetDateTime("assignedon"),
                };
                members.Add(member);
            }
            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return members;
    }

       


}  

  


