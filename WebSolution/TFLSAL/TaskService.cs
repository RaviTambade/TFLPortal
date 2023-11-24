using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;
public class TaskService : ITaskService
{
private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TaskService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Task>> GetTasksOfMember(int projectId, int memberId)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Task> tasks = new List<Transflower.TFLPortal.TFLOBL.Entities.Task>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from tasks where  projectid =@projectId and assignedto=@memberId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@memberId", memberId);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                Transflower.TFLPortal.TFLOBL.Entities.Task task = new Transflower.TFLPortal.TFLOBL.Entities.Task()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    DueDate=duedate,
                    AssignedTo=memberId,
                    Status = status,
                    AssignedBy=managerId,
                    
                };
                tasks.Add(task);
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
        return tasks;
    }


    public async Task<Transflower.TFLPortal.TFLOBL.Entities.Task> GetTaskDetails(int taskId)
    {
        Transflower.TFLPortal.TFLOBL.Entities.Task  task = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from tasks where id=@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", taskId);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int memberId = int.Parse(reader["assignedto"].ToString());
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                task = new Transflower.TFLPortal.TFLOBL.Entities.Task()
                {
                    Id = taskId,
                    Title = title,
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    AssignedTo=memberId,
                    AssignedBy=managerId,
                    DueDate=duedate,
                    Status = status,      
                };
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
        return task;
    }
}