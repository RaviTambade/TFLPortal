using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;
using System.Text;
using System.Diagnostics.Metrics;
using System.Data;

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
            string query = "select * from timesheets where  employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime date = DateTime.Parse(reader["date"].ToString());
                string status = reader["status"].ToString();

                TimeSheet timesheet = new TimeSheet()
                {
                    Id = id,
                    Date = date,
                    Status = status,
                    EmployeeId = employeeId,
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

    public async Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId)
    {
        List<TimeSheetEntry> timeSheetEntries = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from timesheetentries where  timesheetid =@timeSheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetId", timeSheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                string description = reader["description"].ToString();

                TimeSheetEntry timesheet = new TimeSheetEntry()
                {
                    Id = id,
                    Description = description,
                    FromTime = fromtime,
                    ToTime = totime,
                };
                timeSheetEntries.Add(timesheet);
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
        return timeSheetEntries;
    }

    public async Task<List<TimeSheetEntry>> GetDatewiseTimeSheetsOfEmployee(
        DateTime date,
        int employeeId
    )
    {
        List<TimeSheetEntry> timesheets = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from TimeSheetEntries inner join timesheets on timesheets.id=TimeSheetEntries.timesheetid where date=@date and employeeid=@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@date", date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                string description = reader["description"].ToString();

                TimeSheetEntry timesheet = new TimeSheetEntry()
                {
                    Id = id,
                    Description = description,
                    FromTime = fromtime,
                    ToTime = totime,
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

    public async Task<bool> InsertTimeSheet(TimeSheet timeSheet)
    {
        int timeSheetId = await GetTimeSheetId(timeSheet);

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
  

        var query = new StringBuilder("INSERT INTO timesheetentries(description, fromtime, totime, timesheetid) VALUES ");
        var parameters = new List<MySqlParameter>();

        for (int i = 0; i < timeSheet.TimeSheetEntries.Count; i++)
        {
            var timeSheetEntry = timeSheet.TimeSheetEntries[i];

            query.Append($"(@Description{i}, @FromTime{i}, @ToTime{i}, @TimeSheetId{i}), ");

            parameters.Add(new MySqlParameter($"@Description{i}",timeSheetEntry.Description ));
            parameters.Add(new MySqlParameter($"@FromTime{i}",timeSheetEntry.FromTime ));
            parameters.Add(new MySqlParameter($"@ToTime{i}",timeSheetEntry.ToTime ));
            parameters.Add(new MySqlParameter($"@TimeSheetId{i}",  timeSheetId ));
        }

        query.Length -= 2;

        Console.WriteLine(query.ToString());
        try
        {
            MySqlCommand command = new MySqlCommand(query.ToString(), connection);
            command.Parameters.AddRange(parameters.ToArray());
            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return true;
    }

    public async Task<int> GetTimeSheetId(TimeSheet timeSheet)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        int timesheetId = 0;
        try
        {
            MySqlCommand cmd = new MySqlCommand("getorcreatetimesheet", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@timesheetdate", timeSheet.Date);
            cmd.Parameters.AddWithValue("@empid", timeSheet.EmployeeId);
            cmd.Parameters.AddWithValue("@timesheetid", MySqlDbType.Int32);
            cmd.Parameters["@timesheetid"].Direction = ParameterDirection.Output;
            await connection.OpenAsync();

            cmd.ExecuteNonQuery();
            timesheetId = (int)cmd.Parameters["@timesheetid"].Value;
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            connection.Close();
        }
        return timesheetId;
    }
}
