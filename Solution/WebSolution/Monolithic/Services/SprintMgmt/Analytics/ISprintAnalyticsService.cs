using MySql.Data.MySqlClient;
using TFLPortal.Models;
using ProjectTask=TFLPortal.Models.Task;


namespace TFLPortal.Services.SprintMgmt.Analytics;

public class SprintAnalyticsService:ISprintAnalyticsService
{


    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public SprintAnalyticsService(IConfiguration configuration ){
           _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }
     
       public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
        Sprint sprint = null;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            string query = "SELECT * FROM sprints WHERE projectid=@projectid AND sprints.startdate<=@date AND sprints.enddate>=@date";
            Console.WriteLine(query);
            MySqlCommand command = new MySqlCommand(query, connection);
            string formattedDate=date.ToString("yyyy-MM-dd");
            command.Parameters.AddWithValue("@projectid", projectId);
            command.Parameters.AddWithValue("@date", formattedDate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                 sprint = new Sprint()
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    Title = reader.GetString("title"),
                    Goal = reader.GetString("title"),
                    StartDate = reader.GetDateTime("startdate"),
                    EndDate = reader.GetDateTime("enddate"),
                };
            }
             await reader.CloseAsync();
        }
        catch (Exception ee)
        {

        Console.WriteLine(ee.Message);
       }
        finally
        {
            await connection.CloseAsync();
        }
        return sprint;
    }

    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        List<Sprint> sprints = new List<Sprint>();
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            string query = "SELECT * FROM sprints where projectid=@projectid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectid", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                Sprint sprint = new Sprint()
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    Title = reader.GetString("title"),
                    Goal = reader.GetString("title"),
                    StartDate = reader.GetDateTime("startdate"),
                    EndDate = reader.GetDateTime("enddate"),
                };
                sprints.Add(sprint);
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
        return sprints;
    }

    public async Task<List<ProjectTask>> GetSprintTasks(int sprintId){
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            string query =@"select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
             INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.id=sprintId;";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@sprintId",sprintId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader) await command.ExecuteReaderAsync();
            while( await reader.ReadAsync()){
              
                 ProjectTask task=new ProjectTask(){
                    Id = int.Parse(reader["id"].ToString()),
                    Title = reader["title"].ToString(),
                    TaskType = reader["tasktype"].ToString(),
                    Description = reader["description"].ToString(),
                    CreatedOn = DateTime.Parse(reader["createdon"].ToString()),
                    AssignedTo = int.Parse(reader["assignedto"].ToString()),
                    AssignedBy= int.Parse(reader["assignedby"].ToString()),
                    AssignedOn = DateTime.Parse(reader["assignedon"].ToString()),
                    StartDate = DateTime.Parse(reader["startdate"].ToString()),
                    DueDate = DateTime.Parse(reader["duedate"].ToString()),
                    Status = reader["status"].ToString(),
                 };
               tasks.Add(task);  
            }
             await reader.CloseAsync(); 
        }
        catch(Exception ee){
            throw ee;
        }
        finally{
          await connection.CloseAsync();
        }
        return tasks;
    }


 
    public async Task<SprintTask> GetSprintOfTask(int taskId)
    {
        SprintTask task =null;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            string query =@"select * from sprinttasks INNER JOIN tasks on tasks.id=sprinttasks.taskid
                            WHERE tasks.id=@taskId;";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@taskId",taskId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader) await command.ExecuteReaderAsync();
            if( await reader.ReadAsync()){
              
                task=new SprintTask()
              {
                Id = reader.GetInt32("id"),
                SprintId=reader.GetInt32("sprintid"),
                TaskId=reader.GetInt32("taskid")
              };
            }
             await reader.CloseAsync();
        }
        catch(Exception ){
            throw ;
        }
        finally{
            await connection.CloseAsync();
        }
        return task;
    }

    public async Task<Sprint> GetSprint(int sprintId)
    {
        Sprint sprint =null;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            string query =@"select * from sprints where id=@sprintId";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@sprintId",sprintId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader) await command.ExecuteReaderAsync();
            if( await reader.ReadAsync()){
              
                sprint=new Sprint()
              {
                Id = reader.GetInt32("id"),
                ProjectId = reader.GetInt32("projectid"),
                Title = reader.GetString("title"),
                Goal = reader.GetString("title"),
                StartDate = reader.GetDateTime("startdate"),
                EndDate = reader.GetDateTime("enddate"),
              };
            }
             await reader.CloseAsync();
        }
        catch(Exception ){
            throw ;
        }
        finally{
            await connection.CloseAsync();
        }
        return sprint;
    }
}