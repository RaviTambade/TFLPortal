using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ProjectAllocationService : IProjectAllocationService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ProjectAllocationService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

   
   

    public async Task<bool> AssignMemberToProject(int projectId,int employeeId,ProjectAllocation project){
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO projectallocations(projectid,employeeid,membership,assigndate,status) VALUES(@projectId,@employeeId,@membership,@assigndate,@status)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectId", projectId);
            cmd.Parameters.AddWithValue("@employeeId", employeeId);
            cmd.Parameters.AddWithValue("@membership", project.Membership);
            cmd.Parameters.AddWithValue("@assigndate", project.AssignDate);
              cmd.Parameters.AddWithValue("@status", project.Status);
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

    public async Task<bool> ReleaseMemberFromProject(int projectId ,int employeeId)
    {
        bool status=false;
        DateTime localDate = DateTime.Now;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectallocations set releasedate=@releasedate,status=@status where projectid=@projectId and employeeId=@employeeId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@releasedate", localDate);
            cmd.Parameters.AddWithValue("@status", "no");
            cmd.Parameters.AddWithValue("@projectId", projectId);
            cmd.Parameters.AddWithValue("@employeeId", employeeId);
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

  


