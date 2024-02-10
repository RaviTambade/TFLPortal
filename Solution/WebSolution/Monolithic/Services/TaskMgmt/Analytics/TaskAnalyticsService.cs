using MySql.Data.MySqlClient;
using TFLPortal.Responses;
using ProjectTask = TFLPortal.Models.Task;

namespace TFLPortal.Services.TaskMgmt.Analytics;

public class TaskAnalyticsService:ITaskAnalyticsService
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TaskAnalyticsService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<ProjectTask>> GetAllTasks(){
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllTasks(int projectId)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, string taskType)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=@projectId and tasks.tasktype=@tasktype";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@tasktype", taskType);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.assignedto = @assignedto and sprints.projectid=@projectId";

            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);

            command.Parameters.AddWithValue("@assignedto", memberId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();

                ProjectTask act = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = assignedBy,

                };
                tasks.Add(act);
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
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId, string status)
    {

        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.status=@status and sprints.projectid=@projectId and tasks.assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@assignedto", memberId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string taskType = reader["tasktype"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo= memberId,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.status=@status and sprints.id=@sprintid and tasks.assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@sprintid", sprintId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@assignedto", memberId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string taskType = reader["tasktype"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = assignedBy,

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
     public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status, string taskType)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = 
            @"select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
             INNER join sprints on sprints.id=sprinttasks.sprintid 
             WHERE tasks.status=@status and sprints.id=@sprintid and tasks.assignedto=@assignedto and tasks.tasktype=@tasktype";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@sprintid", sprintId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@assignedto", memberId);
            command.Parameters.AddWithValue("@tasktype", taskType);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string type = reader["tasktype"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = type,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<ProjectTask> GetTask(int taskId)
    {
       ProjectTask task = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks where id =@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", taskId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string taskType = reader["tasktype"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int memberId = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                task = new ProjectTask()
                {
                    Id = taskId,
                    TaskType = taskType,
                    Title = title,
                    CreatedOn = createdOn,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    AssignedTo = memberId,
                    AssignedBy = assignedBy,
                    DueDate = dueDate,
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
     public async Task<List<ProjectTask>> GetMemberTasks(int memberId){
      List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks where  assignedto =@memberId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@memberId", memberId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllTasks(DateTime from,DateTime to)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM tasks where assignedon BETWEEN @from AND @to ORDER BY assignedon";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@from", from);
            command.Parameters.AddWithValue("@to", to);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int employeeId = int.Parse(reader["assignedto"].ToString());


                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = assignedBy,

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
    public async Task<List<ProjectTask>> GetAllTasks(int memberId,DateTime from,DateTime to)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM tasks where assignedon BETWEEN @from AND @to And assignedto=@assignedto ORDER BY assignedon";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@from", from);
            command.Parameters.AddWithValue("@to", to);
             command.Parameters.AddWithValue("@assignedto", memberId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assignedon"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
            
                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = assignedBy,

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
    
    public async Task<ProjectTaskCount> GetTasksCount(int projectId)
    {
      ProjectTaskCount taskCount=null;
       MySqlConnection con = new MySqlConnection();
       con.ConnectionString = _connectionString;
    try
    {
        await con.OpenAsync();
        string query="SELECT COUNT(CASE WHEN status = 'todo' THEN 1 END) AS todo,COUNT(CASE WHEN status = 'inprogress' THEN 1 END) AS inprogress,COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed FROM tasks INNER join sprinttasks on sprinttasks.taskid=tasks.id INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=@projectId;";
        MySqlCommand cmd = new MySqlCommand(query, con);
        cmd.Parameters.AddWithValue("@projectId",projectId);
         MySqlDataReader reader = cmd.ExecuteReader();
         if(await reader.ReadAsync()){
            
           int todo = int.Parse(reader["todo"].ToString());
           int inprogress =int.Parse(reader["inprogress"].ToString());
           int completed = int.Parse(reader["completed"].ToString());
            taskCount = new ProjectTaskCount()
        {
            Todo = todo,
            InProgress = inprogress,
            Completed = completed
        };

         }
       
    }
    catch (Exception)
    {
        throw;
    }
    finally
    {
        await con.CloseAsync();
    }

    return taskCount;
}


  public async Task<ProjectTaskCount> GetTasksCount(int projectId,int memberId)
    {
      ProjectTaskCount taskCount=null;
       MySqlConnection con = new MySqlConnection();
       con.ConnectionString = _connectionString;
    try
    {
        await con.OpenAsync();
        string query="SELECT COUNT(CASE WHEN status = 'todo' THEN 1 END) AS todo,COUNT(CASE WHEN status = 'inprogress' THEN 1 END) AS inprogress,COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed FROM tasks INNER join sprinttasks on sprinttasks.taskid=tasks.id INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=@projectId  and tasks.assignedto=@memberId";
        MySqlCommand cmd = new MySqlCommand(query, con);
        cmd.Parameters.AddWithValue("@projectId",projectId);
        cmd.Parameters.AddWithValue("@memberId",memberId);
         MySqlDataReader reader = cmd.ExecuteReader();
         if(await reader.ReadAsync()){
            
           int todo = int.Parse(reader["todo"].ToString());
           int inprogress =int.Parse(reader["inprogress"].ToString());
           int completed = int.Parse(reader["completed"].ToString());
            taskCount = new ProjectTaskCount()
        {
            Todo = todo,
            InProgress = inprogress,
            Completed = completed
        };

         }
       
    }
    catch (Exception)
    {
        throw;
    }
    finally
    {
        await con.CloseAsync();
    }

    return taskCount;
}
    public async Task<List<ProjectTask>> GetTodaysTasks(int projectId,DateTime date)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = $"select * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=@projectId and tasks.assignedon<=@date and tasks.status=@inprogress OR tasks.status=@todo";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@inprogress", "inprogress");
             command.Parameters.AddWithValue("@todo", "todo");
              command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@date", date);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createdon"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int assignedBy = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    StartDate = startdate,
                    DueDate = duedate,
                    AssignedTo = assignedto,
                    Status = status,
                  AssignedBy = assignedBy,

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

   
}