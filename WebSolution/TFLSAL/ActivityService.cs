using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
// using System.Diagnostics;
using Transflower.TFLPortal.TFLOBL.Entities;
using System.Data;

namespace Transflower.TFLPortal.TFLSAL.Services;
public class ActivityService : IActivityService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ActivityService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Activity>> GetAllActivities(){
        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }
    public async Task<List<Activity>> GetActivitiesByProject(int projectId)
    {
        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  projectid =@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }

    public async Task<List<Activity>> GetProjectActivitiesByType(int projectId, string activityType)
    {

        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  projectid =@projectId and activitytype=@activitytype";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@activitytype", activityType);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = assignedTo,
                    Status = status,
                    AssignedBy = managerId,

                };

                activities.Add(act);
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
        return activities;
    }

    public async Task<List<Activity>> GetProjectActivitiesByEmployee(int projectId, int employeeId)
    {

        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  projectid =@projectId and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);

            command.Parameters.AddWithValue("@assignedto", employeeId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }
    public async Task<List<Activity>> GetProjectActivitiesOfEmployee(int projectId, int employeeId, string activityType)
    {

        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  projectid =@projectId and activitytype=@activityType and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@activityType", activityType);
            command.Parameters.AddWithValue("@assignedto", employeeId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }

    public async Task<ActivityDetails> GetActivityDetails(int activityId)
    {
       ActivityDetails activity = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select activities.* ,e1.userid as assignbyuserid,e2.userid as assigntouserid,projects.title as projectname from activities INNER JOIN employees e1  on activities.assignedto =e1.id INNER JOIN employees e2   on  activities.assignedby=e2.id INNER JOIN projects ON activities.projectid =projects.id WHERE activities.id=@activityId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@activityId", activityId);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string activityType = reader["activitytype"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int memberId = int.Parse(reader["assignedto"].ToString());
                int managerId = int.Parse(reader["assignedby"].ToString());
                int assignToUserId = int.Parse(reader["assigntouserid"].ToString());
                int assignByUserId = int.Parse(reader["assignbyuserid"].ToString());
                string projectName = reader["projectname"].ToString();
                activity = new ActivityDetails()
                {
                    Id = activityId,
                    ActivityType = activityType,
                    Title = title,
                    CreatedDate = createDate,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    AssignedTo = memberId,
                    AssignedBy = managerId,
                    DueDate = dueDate,
                    Status = status,
                    AssignByEmployee = new Employee
                    {
                        UserId = assignByUserId,

                    },
                    AssigntoEmployee = new Employee
                    {
                        UserId = assignToUserId
                    },

                    Project = new Project
                    {
                        Title = title
                    }
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
        return activity;
    }

    public async Task<bool> AddActivity(Activity activity)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO activities(title,activitytype,description,createddate,assigneddate,startdate,duedate,assignedto,projectid,status,assignedby) VALUES(@title,@activityType,@description,@createdDate,@assignDate,@startDate,@dueDate,@assignedTo,@projectId,@status,@assignedBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@title", activity.Title);
            cmd.Parameters.AddWithValue("@activityType", activity.ActivityType);
            cmd.Parameters.AddWithValue("@description", activity.Description);
            cmd.Parameters.AddWithValue("@createddate", activity.CreatedDate);
            cmd.Parameters.AddWithValue("@assigndate", activity.AssignDate);
            cmd.Parameters.AddWithValue("@startDate", activity.StartDate);
            cmd.Parameters.AddWithValue("@dueDate", activity.DueDate);
            cmd.Parameters.AddWithValue("@assignedTo", activity.AssignedTo);
            cmd.Parameters.AddWithValue("@projectId", activity.ProjectId);
            cmd.Parameters.AddWithValue("@status", activity.Status);
            cmd.Parameters.AddWithValue("@assignedBy", activity.AssignedBy);
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

     public async Task<List<Activity>> GetAllActivitiesOfEmployee(int employeeId){
      List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  assignedto =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }

    public async Task<List<Activity>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM activities where assigneddate BETWEEN @fromAssignedDate AND @toAssignedDate ORDER BY assigneddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
                int employeeId = int.Parse(reader["assignedto"].ToString());


                Activity activity = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(activity);
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
        return activities;
    } 


    public async Task<List<Activity>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * FROM activities where assigneddate BETWEEN @fromAssignedDate AND @toAssignedDate And assignedto=@assignedto ORDER BY assigneddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
             command.Parameters.AddWithValue("@assignedto", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
            
                Activity activity = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(activity);
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
        return activities;
    } 


    public async Task<bool> UpdateActivity(string Status,int activityId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update  activities set startdate=@startdate,status=@status where id =@activityId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@startDate", DateTime.Now);
            cmd.Parameters.AddWithValue("@status", Status);
            cmd.Parameters.AddWithValue("@activityId",activityId );
    
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



     public async Task<List<ActivityDetails>> GetAllActivities(int projectId,int employeeId){
      List<ActivityDetails> activities = new List<ActivityDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select activities.*,projects.title as projectname from activities INNER JOIN projects on projects.id=activities.projectid  where  activities.assignedto =@employeeId and activities.projectid=@projectId and activities.status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@status","todo");
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createDate = DateTime.Parse(reader["createddate"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime assignDate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startDate = DateTime.Parse(reader["startdate"].ToString());
                DateTime dueDate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
                string projectName = reader["projectname"].ToString();

                ActivityDetails act = new ActivityDetails
                {
                    Id = id,
                    Title = title,
                    ActivityType = activityType,
                    Description = description,
                    ProjectId = projectId,
                    AssignDate = assignDate,
                    StartDate = startDate,
                    DueDate = dueDate,
                    AssignedTo = employeeId,
                    Status = status,
                    AssignedBy = managerId,
                    ProjectName=projectName,
                };
                activities.Add(act);
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
        return activities;
    }

    public async Task<ActivityStatusCount> GetActivitiesCount()
    {
    ActivityStatusCount countSp = null;
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

        countSp = new ActivityStatusCount()
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


public async Task<List<Activity>> GetTodayActivities(int projectId,DateTime date)
    {
        List<Activity> activities = new List<Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from activities where  projectid =@projectId and assigneddate=@date";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@date", date);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activitytype = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
               // DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());

                Activity act = new Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType = activitytype,
                    Description = description,
                    ProjectId = projectId,
                    //AssignDate = assigndate,
                    StartDate = startdate,
                    DueDate = duedate,
                    AssignedTo = assignedto,
                    Status = status,
                    AssignedBy = managerId,

                };
                activities.Add(act);
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
        return activities;
    }

}