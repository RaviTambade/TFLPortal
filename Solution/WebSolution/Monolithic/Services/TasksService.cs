using MySql.Data.MySqlClient;
using TFLPortal.Services.Interfaces;
using ProjectTask= TFLPortal.Models.Task;
using System.Data;
using TFLPortal.Responses;

namespace TFLPortal.Services;
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
                int projectId = int.Parse(reader["projectid"].ToString());
                int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * from tasks where  projectid =@projectId";
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id= id,
                    Title = title,
                    TaskType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * from tasks where  projectid =@projectId and tasktype=@tasktype";
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
                int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * from tasks where  projectid =@projectId and assignedto=@assignedto";
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask act = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * from tasks where  projectid =@projectId and status=@status and assignedto=@assignedto";
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string taskType = reader["tasktype"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo= memberId,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * from tasks where  sprintid =@sprintid and status=@status and assignedto=@assignedto";
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
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string taskType = reader["tasktype"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select tasks.* ,e1.userid as assignbyuserid,e2.userid as assigntouserid,projects.title as projectname from tasks INNER JOIN employees e1  on tasks.assignedto =e1.id INNER JOIN employees e2   on  tasks.assignedby=e2.id INNER JOIN projects ON tasks.projectid =projects.id WHERE tasks.id=@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", taskId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string taskType = reader["tasktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int memberId = int.Parse(reader["assignedto"].ToString());
                int managerId = int.Parse(reader["assignedby"].ToString());
                int assignToUserId = int.Parse(reader["assigntouserid"].ToString());
                int assignByUserId = int.Parse(reader["assignbyuserid"].ToString());
                string projectName = reader["projectname"].ToString();
                task = new ProjectTask()
                {
                    Id = taskId,
                    TaskType = taskType,
                    Title = title,
                    CreatedOn = createdOn,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    AssignedTo = memberId,
                    AssignedBy = managerId,
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
    public async Task<bool> AddTask(ProjectTask task)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO tasks(title,tasktype,description,createddate,assigneddate,startdate,duedate,assignedto,projectid,sprintid,status,assignedby) VALUES(@title,@tasktype,@description,@createddate,@assigndate,@startdate,@duedate,@assignedTo,@projectId,@sprintId,@status,@assignedBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@title", task.Title);
            cmd.Parameters.AddWithValue("@tasktype", task.TaskType);
            cmd.Parameters.AddWithValue("@description", task.Description);
            cmd.Parameters.AddWithValue("@createddate", task.CreatedOn);
            cmd.Parameters.AddWithValue("@assigndate", task.AssignedOn);
            cmd.Parameters.AddWithValue("@startdate", task.StartDate);
            cmd.Parameters.AddWithValue("@dueDate", task.DueDate);
            cmd.Parameters.AddWithValue("@assignedTo", task.AssignedTo);
            cmd.Parameters.AddWithValue("@projectId", task.ProjectId);
            cmd.Parameters.AddWithValue("@sprintId", task.SprintId);
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * FROM tasks where assigneddate BETWEEN @from AND @to ORDER BY assigneddate";
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
                int employeeId = int.Parse(reader["assignedto"].ToString());


                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

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
            string query = "select * FROM tasks where assigneddate BETWEEN @fromAssignedDate AND @toAssignedDate And assignedto=@assignedto ORDER BY assigneddate";
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
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignedOn = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
            
                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    AssignedOn = assignedOn,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = memberId,
                    Status = status,
                    AssignedBy = managerId,

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
    public async Task<bool> UpdateTask(string taskStatus,int taskId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update  tasks set startdate=@startdate,status=@status where id =@taskId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@startDate", DateTime.Now);
            cmd.Parameters.AddWithValue("@status", taskStatus);
            cmd.Parameters.AddWithValue("@taskId",taskId );
    
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
    public async Task<AllTaskCount> GetTasksCount()
    {
    AllTaskCount countSp = null;
    MySqlConnection con = new MySqlConnection();
    con.ConnectionString = _connectionString;
    try
    {
        await con.OpenAsync();

        MySqlCommand cmd = new MySqlCommand("getActivityCounts", con);
        cmd.CommandType = CommandType.StoredProcedure;

        cmd.Parameters.AddWithValue("@todo", MySqlDbType.Int32);
        cmd.Parameters["@todo"].Direction = ParameterDirection.Output;

        cmd.Parameters.AddWithValue("@inprogress", MySqlDbType.Int32);
        cmd.Parameters["@inprogress"].Direction = ParameterDirection.Output;

        cmd.Parameters.AddWithValue("@completed", MySqlDbType.Int32);
        cmd.Parameters["@completed"].Direction = ParameterDirection.Output;

        await cmd.ExecuteNonQueryAsync();

        int todo = Convert.ToInt32(cmd.Parameters["@todo"].Value);
        int inprogress = Convert.ToInt32(cmd.Parameters["@inprogress"].Value);
        int completed = Convert.ToInt32(cmd.Parameters["@completed"].Value);

        countSp = new AllTaskCount()
        {
            Todo = todo,
            InProgress = inprogress,
            Completed = completed
        };
    }
    catch (Exception)
    {
        throw;
    }
    finally
    {
        await con.CloseAsync();
    }

    return countSp;
}
    public async Task<List<ProjectTask>> GetTodaysTasks(int projectId,DateTime date)
    {
        List<ProjectTask> tasks = new List<ProjectTask>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks where  projectid =@projectId and assigneddate=@date";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@date", date);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string taskType = reader["tasktype"].ToString();
                 int sprintId = int.Parse(reader["sprintid"].ToString());
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                ProjectTask task = new ProjectTask
                {
                    Id = id,
                    Title = title,
                    TaskType = taskType,
                    Description = description,
                    ProjectId = projectId,
                    SprintId=sprintId,
                    StartDate = startdate,
                    DueDate = duedate,
                    AssignedTo = assignedto,
                    Status = status,
                  AssignedBy = managerId,

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
    public async Task<bool> Delete(int taskId){
        bool status =false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            string query="delete from tasks where id= @taskId";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@taskId",taskId);
           await connection.OpenAsync();
            int rowsAffected= await command.ExecuteNonQueryAsync();
            if(rowsAffected>0){
               status=true;
            }
        }
        catch(Exception ee){
         throw ee;
        }
        finally{
            await connection.CloseAsync();
        }

        return status;
    }
}