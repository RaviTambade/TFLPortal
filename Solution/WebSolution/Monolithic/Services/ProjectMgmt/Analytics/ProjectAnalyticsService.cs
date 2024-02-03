using MySql.Data.MySqlClient;
using TFLPortal.Models;
using ProjectTask=TFLPortal.Models.Task;


namespace TFLPortal.Services.ProjectMgmt.Analytics;

public class ProjectAnalyticsService:IProjectAnalyticsService
{


    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ProjectAnalyticsService(IConfiguration configuration ){
           _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }
       public async Task<List<Project>> GetAllProjects()
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from projects";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int managerId = int.Parse(reader["managerid"].ToString());
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["enddate"].ToString());

                Project project = new Project()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    Status = status,
                    StartDate = startdate,
                    EndDate = enddate,
                    ManagerId = managerId
                };
                projects.Add(project);
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
        return projects;
    }

    public async Task<List<Project>> GetAllCurrentProjects(int memberId)
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            // ptojects.id =9 because 9 number is other 
            string query =
                @"select * from projectmembers where employeeid=@employeeId  AND  projectid <> 9 AND status='yes'"; 
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", memberId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int managerId = int.Parse(reader["managerid"].ToString());
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["enddate"].ToString());

                Project project = new Project()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    Status = status,
                    StartDate = startdate,
                    EndDate = enddate,
                    ManagerId = managerId
                };
                projects.Add(project);
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
        return projects;
    } 


     public async Task<Project> GetProject(int projectId)
    {
        Project project = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from projects where id =@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int managerId = int.Parse(reader["managerid"].ToString());
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["enddate"].ToString());

                project = new Project
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    Status = status,
                    StartDate = startdate,
                    EndDate = enddate,
                    ManagerId = managerId
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
        return project;
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
                    CreatedOn = DateTime.Parse(reader["createddate"].ToString()),
                    AssignedTo = int.Parse(reader["assignedto"].ToString()),
                    AssignedBy= int.Parse(reader["assignedby"].ToString()),
                    AssignedOn = DateTime.Parse(reader["assigneddate"].ToString()),
                    StartDate = DateTime.Parse(reader["startdate"].ToString()),
                    DueDate = DateTime.Parse(reader["duedate"].ToString()),
                    Status = reader["status"].ToString(),
                 };
               tasks.Add(task);  
            }
        }
        catch(Exception ee){
            throw ee;
        }
        finally{
            connection.CloseAsync();
        }
        return tasks;
    }


  public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= new List<Member>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =@"Select * from projectallocations where projectid=@projectId and status=@status";
                
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