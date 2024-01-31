
using MySql.Data.MySqlClient;
using TFLPortal.Responses;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class TimesheetBIService : ITimesheetBIService
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimesheetBIService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }
   
    public async Task<List<MemberUtilization>> GetTaskWorkHoursOfEmployee(int employeeId,string intervalType,int projectId)
    {
        List<MemberUtilization> memberUtilizations = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "CALL getTaskWorkHoursOfEmployee(@employeeId,@intervalType,@projectId)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@intervalType", intervalType);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                MemberUtilization memberUtilization = new MemberUtilization()
                {
                    Label = reader.GetString("label"),
                    UserStory = reader.GetDouble("userstory"),
                    Task = reader.GetDouble("task"),
                    Bug = reader.GetDouble("bug"),
                    Issues = reader.GetDouble("issues"),
                    Meeting = reader.GetDouble("meeting"),
                    Learning = reader.GetDouble("learning"),
                    Mentoring = reader.GetDouble("mentoring"),
                    ClientCall = reader.GetDouble("clientcall"),
                    Other = reader.GetDouble("other")
                };
                memberUtilizations.Add(memberUtilization);
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
        return memberUtilizations;
    }

    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId,DateOnly from,DateOnly to)
    {
        List<ProjectWorkHours> projectsHoursList = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = @"CALL getEmployeeProjectWorkHours(@employeeId,@fromDate,@toDate)";
        try
        {
            string fromDate = from.ToString("yyyy-MM-dd");
            string toDate = to.ToString("yyyy-MM-dd");
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@fromDate", fromDate);
            command.Parameters.AddWithValue("@toDate", toDate);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectWorkHours projectHours = new ProjectWorkHours()
                {
                    ProjectId = reader.GetInt32("projectid"),
                    ProjectName = reader.GetString("projectname"),
                    Hours = reader.GetDouble("hours")
                };
                projectsHoursList.Add(projectHours);
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
        return projectsHoursList;
    }
}