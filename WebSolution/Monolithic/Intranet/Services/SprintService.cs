using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using TFLPortal.Models;
using ProjectTask= TFLPortal.Models.Task;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class SprintService : ISprintService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public SprintService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    // public async  Task<bool> UpdateSprint(sprintid, Sprint){

    //}

    //insert sprint

    //remove (Cancel Sprint)
    public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
        Sprint sprint = null;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            string query = "SELECT * FROM sprintmaster WHERE projectid=@projectid AND sprintmaster.startdate<=@date AND sprintmaster.enddate>=@date";
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
        catch (Exception)
        {
            throw;
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
            string query = "SELECT sprintmaster.* FROM sprintmaster where projectid=@projectid";
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
;
            string query =@"select employeework.* , employees.userid  from employeework 
                           INNER join sprintmaster on employeework.sprintid=sprintmaster.id
                           INNER join employees ON employeework.assignedto=employees.id
                           WHERE sprintmaster.id=@sprintId;";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@sprintId",sprintId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader) await command.ExecuteReaderAsync();
            while( await reader.ReadAsync()){
              
                 ProjectTask task=new ProjectTask(){
                    TaskId = int.Parse(reader["id"].ToString()),
                    Title = reader["title"].ToString(),
                    TaskType = reader["projectworktype"].ToString(),
                    SprintId = int.Parse(reader["sprintid"].ToString()),
                    Description = reader["description"].ToString(),
                    CreatedDate = DateTime.Parse(reader["createddate"].ToString()),
                    AssignedTo = int.Parse(reader["assignedto"].ToString()),
                    AssignedBy= int.Parse(reader["assignedby"].ToString()),
                    AssignDate = DateTime.Parse(reader["assigneddate"].ToString()),
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


    public async Task<bool> InsertSprint(Sprint theSprint){

        bool status=false;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;

        try{

            string query ="Insert into sprints(title,goal,startdate,enddate,projectid) values (@title,@goal,@startdate,@enddate,@projectId)";
            MySqlCommand command = new MySqlCommand(query,connection);

            command.Parameters.AddWithValue("@title",theSprint.Title);
            command.Parameters.AddWithValue("@goal",theSprint.Goal);
            command.Parameters.AddWithValue("@startdate",theSprint.StartDate);
            command.Parameters.AddWithValue("@enddate",theSprint.EndDate);
            command.Parameters.AddWithValue("@projectId",theSprint.ProjectId);
            connection.OpenAsync();
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


    public async Task<bool> Delete(int sprintId){

        bool status=false;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;

        try{

            string query ="delete from sprints where id = @sprintId ";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@sprintId",sprintId);
            connection.OpenAsync();
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
