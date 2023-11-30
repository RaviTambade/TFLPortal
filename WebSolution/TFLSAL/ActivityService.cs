using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using System.Diagnostics;

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

    public async Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId)
    {
        List<TFLOBL.Entities.Activity> activities = new List<TFLOBL.Entities.Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from activities where  projectid =@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
           
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
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                TFLOBL.Entities.Activity act = new TFLOBL.Entities.Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType=activitytype,
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    DueDate=duedate,
                    AssignedTo=1,
                    Status = status,
                    AssignedBy=managerId,
                    
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

    public async Task<List<TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId,string activityType){

        List<TFLOBL.Entities.Activity> activities = new List<TFLOBL.Entities.Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from activities where  projectid =@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType1 = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
                
                TFLOBL.Entities.Activity act = new TFLOBL.Entities.Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType="",
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    DueDate=duedate,
                    AssignedTo=1,
                    Status = status,
                    AssignedBy=managerId,
                    
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

    public async Task<List<TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId, int assignedTo){

        List<TFLOBL.Entities.Activity> activities = new List<TFLOBL.Entities.Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from activities where  projectid =@projectId and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
         
            command.Parameters.AddWithValue("@assignedto", assignedTo);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                TFLOBL.Entities.Activity act = new TFLOBL.Entities.Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType="activitytype",
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    DueDate=duedate,
                    AssignedTo=1,
                    Status = status,
                    AssignedBy=managerId,
                    
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
    public async Task<List<TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId, int assignedTo,string activityType){

        List<TFLOBL.Entities.Activity> activities = new List<TFLOBL.Entities.Activity>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from activities where  projectid =@projectId and activitytype=@activityType and assignedto=@assignedto";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@activityType", activityType);
            command.Parameters.AddWithValue("@assignedto", assignedTo);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string activityType1 = reader["activitytype"].ToString();
                string description = reader["description"].ToString();
                DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                int assignedto = int.Parse(reader["assignedto"].ToString());
                int assignedby = int.Parse(reader["assignedby"].ToString());
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                TFLOBL.Entities.Activity act = new TFLOBL.Entities.Activity
                {
                    Id = id,
                    Title = title,
                    ActivityType="activitytype",
                    Description = description,
                    ProjectId=projectId,
                    AssignDate=assigndate,
                    StartDate=startdate,
                    DueDate=duedate,
                    AssignedTo=1,
                    Status = status,
                    AssignedBy=managerId,
                    
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

    public async Task<TFLOBL.Entities.Activity> GetActivityDetails(int activityId)
    {
        TFLOBL.Entities.Activity  activity = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from activities where id=@activityId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@activityId", activityId);
           
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string activitytype = reader["activitytype"].ToString();
                 DateTime createdate = DateTime.Parse(reader["createddate"].ToString());
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime duedate = DateTime.Parse(reader["duedate"].ToString());
                string status = reader["status"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                int memberId = int.Parse(reader["assignedto"].ToString());
                int managerId = int.Parse(reader["assignedby"].ToString());
               
                activity = new TFLOBL.Entities.Activity()
                {
                    Id = activityId,
                    ActivityType=activitytype,
                    Title = title,
                    CreatedDate=createdate,
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
        return activity;
    }

    public async Task<bool> Insert(TFLOBL.Entities.Activity  activity)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO tasks(title,activitytype,description,createddate,assigndate,startdate,duedate,assignedto,projectid,status,assignedby)    VALUES(@title,@acivitytype,@description,@createdDate,@assignDate,@startDate,@dueDate,@assignedTo,@projectId,@status,@assignedBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@title", activity.Title);
            cmd.Parameters.AddWithValue("@acivitytype", activity.ActivityType);
            cmd.Parameters.AddWithValue("@description", activity.Description);
            cmd.Parameters.AddWithValue("@createddate", activity.CreatedDate);
            cmd.Parameters.AddWithValue("@assigndate", activity.AssignDate);
            cmd.Parameters.AddWithValue("@startDate", activity.StartDate);
            cmd.Parameters.AddWithValue("@dueDate", activity.DueDate);
            cmd.Parameters.AddWithValue("@assignTo", activity.AssignedTo);
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

    public Task<List<TFLOBL.Entities.Activity>> GetTasksOfMember(int projectId, int memberId)
    {
        throw new NotImplementedException();
    }

    public Task<TFLOBL.Entities.Activity> GetTaskDetails(int activityId)
    {
        throw new NotImplementedException();
    }
}