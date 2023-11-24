using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLDAL.Repositories.Interfaces;
public class TaskRepository : ITaskRepository
{
private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TaskRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Task>> GetTaskOfEmployee(int projectid, int assignedto)
    {
        List<Task> tasks = new List<Task>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from tasks where  projectid =@projectid   and assignedto=@assignto  ";
            MySqlCommand command = new MySqlCommand(query, connection);
             command.Parameters.AddWithValue("@projectid", projectid);
            command.Parameters.AddWithValue("@assignto", assignedto);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["teammanagerid"].ToString());
                DateTime assigndate = DateTime.Parse(reader["startdate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["startdate"].ToString());
                int assignedTo = int.Parse(reader["teammanagerid"].ToString());
                string status = reader["status"].ToString();
               
               
                // Task task = new Task();
                // {
                //     Id = id,
                //     Title = title,
                //     Description = description,
                //     ProjectId=projectId,
                //     AssignDate=assigndate,
                //     StartDate=startdate,
                //     DueDate=duedate,
                //     AssignedTo=assignedTo,
                //     Status = status,
                    
                // };
                // tasks.Add(task);
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
}