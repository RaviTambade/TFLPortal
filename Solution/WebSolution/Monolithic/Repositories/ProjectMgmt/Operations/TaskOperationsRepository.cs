using MySql.Data.MySqlClient;
using ProjectTask = Transflower.TFLPortal.Entities.ProjectMgmt.Task;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;


namespace Transflower.TFLPortal.Repositories.ProjectMgmt.Operations;

public class TaskOperationsRepository : ITaskOperationsRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TaskOperationsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> AddTask(ProjectTask task)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
            @"INSERT INTO tasks(title,tasktype,description,createdon,assignedon,startdate,duedate,assignedto,status,assignedby)
              VALUES(@title,@tasktype,@description,@createddate,@assigndate,@startdate,@duedate,@assignedTo,@status,@assignedBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@title", task.Title);
            cmd.Parameters.AddWithValue("@tasktype", task.TaskType);
            cmd.Parameters.AddWithValue("@description", task.Description);
            cmd.Parameters.AddWithValue("@createddate", task.CreatedOn);
            cmd.Parameters.AddWithValue("@assigndate", task.AssignedOn);
            cmd.Parameters.AddWithValue("@startdate", task.StartDate);
            cmd.Parameters.AddWithValue("@dueDate", task.DueDate);
            cmd.Parameters.AddWithValue("@assignedTo", task.AssignedTo);
            cmd.Parameters.AddWithValue("@status", task.Status);
            cmd.Parameters.AddWithValue("@assignedBy", task.AssignedBy);
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

    public async Task<bool> UpdateTask(int taskId, string status)
    {
        bool updateStatus = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "Update  tasks set startdate=@startdate,status=@status where id =@taskId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@startDate", DateTime.Now);
            cmd.Parameters.AddWithValue("@status", status);
            cmd.Parameters.AddWithValue("@taskId", taskId);

            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                updateStatus = true;
            }
            await connection.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return updateStatus;
    }

    public async Task<bool> Delete(int taskId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "delete from tasks where id= @taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", taskId);
            await connection.OpenAsync();
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
