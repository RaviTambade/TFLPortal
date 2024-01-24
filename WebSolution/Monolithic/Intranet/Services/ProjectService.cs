using MySql.Data.MySqlClient;
using TFLPortal.Models;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class ProjectService : IProjectService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ProjectService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    // string connectionString="server=localhost;port=3306;user=root;password=password;database=pms";
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
                    ProjectId = id,
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

    public async Task<List<Project>> GetProjectsOfEmployee(int employeeid)
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            // ptojects.id =9 because 10 number is other 
            string query =
                @"SELECT * FROM projects WHERE projects.id=9 OR
                id IN( SELECT DISTINCT projectid FROM projectmembership WHERE projectmembership.employeeid=@employeeid )"; 
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeid", employeeid);
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
                    ProjectId = id,
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



  public async Task<bool> AddProject(Project project){
        bool status = false;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            
            MySqlCommand command= new MySqlCommand();
            command.CommandText="Insert into projects (title,startdate,enddate,description,managerid,status) values(@title,@startdate,@enddate,@description,@managerid,@status)";
            command.Connection=connection; 
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@title",project.Title);
            command.Parameters.AddWithValue("@startdate",project.StartDate);
            command.Parameters.AddWithValue("@enddate",project.EndDate);
            command.Parameters.AddWithValue("@description",project.Description);
            command.Parameters.AddWithValue("@managerid",project.ManagerId);
            command.Parameters.AddWithValue("@status",project.Status);
          
          int rowsAffected = await command.ExecuteNonQueryAsync(); // Execute the query asynchronously

        if (rowsAffected > 0)
        {
            status = true;
        }
        }
        catch(Exception ee){
            throw ee;

        }
        finally{
            connection.Close();
        }

        return status;
    }


    public async Task<Project> GetProjectDetails(int projectId)
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
                    ProjectId = id,
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



    public async Task<List<Project>> GetAllProjectsOfProjectManager(int managerId)
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            // ptojects.id =9 because 10 number is other 
            string query = "select * from projects where managerid=@managerId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@managerId", managerId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["enddate"].ToString());

                Project project = new Project()
                {
                    ProjectId = id,
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


    public async Task<List<int>> GetAllEmployees(int projectId)
{
    List<int> employeeIds = new List<int>();
    MySqlConnection connection = new MySqlConnection();
    connection.ConnectionString = _connectionString;
    try
    {
        string query = "SELECT DISTINCT(employees.userid) as userid FROM employees INNER JOIN projectmembership ON employees.id = projectmembership.employeeid WHERE projectmembership.projectid = @projectId;";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@projectId", projectId);
        await connection.OpenAsync();
        MySqlDataReader reader = command.ExecuteReader();
        while (await reader.ReadAsync())
        {
            int id = int.Parse(reader["userid"].ToString());
            employeeIds.Add(id);
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
    return employeeIds; 
}

}
