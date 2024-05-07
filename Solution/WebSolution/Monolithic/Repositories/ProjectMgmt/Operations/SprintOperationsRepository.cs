using MySql.Data.MySqlClient;
using Transflower.TFLPortal.Entities.ProjectMgmt;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Repositories.ProjectMgmt.Operations;
public class SprintOperationsRepository:ISprintOperationsRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public SprintOperationsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> Insert(Sprint theSprint)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();

        connection.ConnectionString = _connectionString;

        try
        {
            string query =
                "Insert into sprints(title,goal,startdate,enddate,projectid) values (@title,@goal,@startdate,@enddate,@projectId)";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@title", theSprint.Title);
            command.Parameters.AddWithValue("@goal", theSprint.Goal);
            command.Parameters.AddWithValue("@startdate", theSprint.StartDate);
            command.Parameters.AddWithValue("@enddate", theSprint.EndDate);
            command.Parameters.AddWithValue("@projectId", theSprint.ProjectId);
            int rowsAffected = await command.ExecuteNonQueryAsync();

            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            Console.WriteLine(ee.Message);
            throw ee;
        }
        finally
        {
            await connection.CloseAsync();
        }

        return status;
    }

    public async Task<bool> Delete(int sprintId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        try
        {
            string query = "delete from sprints where id = @sprintId ";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@sprintId", sprintId);

            int rowsAffected = await command.ExecuteNonQueryAsync();

            if (rowsAffected > 0)
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
            await connection.CloseAsync();
        }

        return status;
    }

    public async Task<bool> Update(int sprintId, Sprint theSprint)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        try
        {
            string query =
                "Update sprints set title=@title,startdate=@startdate,enddate=@enddate,projectid=@projectid where id = @sprintId ";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@sprintId", sprintId);
            command.Parameters.AddWithValue("@title", theSprint.Title);
            command.Parameters.AddWithValue("@goal", theSprint.Goal);
            command.Parameters.AddWithValue("@startdate", theSprint.StartDate);
            command.Parameters.AddWithValue("@enddate", theSprint.EndDate);
            command.Parameters.AddWithValue("@projectId", theSprint.ProjectId);

            int rowsAffected = await command.ExecuteNonQueryAsync();

            if (rowsAffected > 0)
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
            await connection.CloseAsync();
        }

        return status;
    }

  

   
}
