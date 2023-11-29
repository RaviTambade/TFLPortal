using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ProjectPlanningService : IProjectPlanningService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ProjectPlanningService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    // string connectionString="server=localhost;port=3306;user=root;password=password;database=pms";
   

    public async Task<List<UserStories>> GetAllUserStories(int projectId)
    {
        List<UserStories> userStories = new List<UserStories>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from userstories where projectid=@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                int assignedTo = int.Parse(reader["assignedto"].ToString());
                int assignedBy = int.Parse(reader["assignedby"].ToString());
                DateTime createdDate = DateTime.Parse(reader["createddate"].ToString());

                UserStories userstory = new UserStories()
                {
                    Id = id,
                    Title = title,
                    Description = description,
                    ProjectId=projectId,
                    AssignedTo=assignedTo,
                    AssignedBy=assignedBy,
                    CreatedDate=createdDate
                };
                userStories.Add(userstory);
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
        return userStories;
    }

}
