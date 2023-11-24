using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

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
    public async Task<List<Project>> GetAllProject()
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
                int teamManagerId = int.Parse(reader["teammanagerid"].ToString());
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["startdate"].ToString());

                Project project = new Project()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    Status = status,
                    StartDate = startdate,
                    EndDate = enddate,
                    TeamManagerId = teamManagerId
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
            string query =
                "select * from projects inner join members on projects.id=members.projectid where members.employeeid=@employeeid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeid", employeeid);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int teamManagerId = int.Parse(reader["teammanagerid"].ToString());
                string status = reader["status"].ToString();
                DateTime startdate = DateTime.Parse(reader["startdate"].ToString());
                DateTime enddate = DateTime.Parse(reader["startdate"].ToString());

                Project project = new Project()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    Status = status,
                    StartDate = startdate,
                    EndDate = enddate,
                    TeamManagerId = teamManagerId
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
}
