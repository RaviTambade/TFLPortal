using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services;
public class TimeSheetService : ITimeSheetService
{
private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimeSheetService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId)
    {
        List<TimeSheet> timesheets = new List<TimeSheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from timesheets where  employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime assigndate = DateTime.Parse(reader["assigneddate"].ToString());
                string status = reader["status"].ToString();
               
                TimeSheet timesheet = new TimeSheet()
                {
                    Id = id,
                    AssignDate=assigndate,
                    Status = status,
                    EmployeeId=employeeId,
                    
                };
                timesheets.Add(timesheet);
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
        return timesheets;
    }


    
}