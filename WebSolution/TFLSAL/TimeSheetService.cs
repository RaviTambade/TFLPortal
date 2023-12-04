using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;
using System.Text;
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
                string status = reader["status"].ToString();
                DateTime timesheetDate = DateTime.Parse(reader["timesheetdate"].ToString());
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                TimeSheet timesheet = new TimeSheet()
                {
                    Id = id,
                    TimeSheetDate = timesheetDate,
                    Status = status,
                    EmployeeId = employeeId,
                    StatusChangedDate = statusChangedDate,
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

    public async Task<TimeSheet> GetTimeSheetOfEmployee(int employeeId, string date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        TimeSheet timeSheet = null;
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetentries.id as timesheetentryid,
                timesheetentries.work,timesheetentries.workcategory,timesheetentries.description,timesheetentries.fromtime,timesheetentries.totime
                FROM timesheetentries 
                INNER JOIN timesheets  ON timesheetentries.timesheetid = timesheets.id
                WHERE timesheets.timesheetdate = @timeSheetDate AND timesheets.employeeId = @employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetDate", date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int timeSheetId = int.Parse(reader["timesheetid"].ToString());
                string status = reader["status"].ToString();
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                timeSheet = new TimeSheet()
                {
                    Id = timeSheetId,
                    Status = status,
                    TimeSheetDate = DateTime.Parse(date),
                    StatusChangedDate = statusChangedDate,
                    EmployeeId = employeeId,
                    TimeSheetEntries = new List<TimeSheetEntry>()
                };
                while (await reader.ReadAsync())
                {
                    int timeSheetEntryId = int.Parse(reader["timesheetentryid"].ToString());
                    TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                    TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                    string work = reader["work"].ToString();
                    string WorkCategory = reader["workcategory"].ToString();
                    string description = reader["description"].ToString();

                    TimeSheetEntry timeSheetEntry = new TimeSheetEntry()
                    {
                        Id = timeSheetEntryId,
                        FromTime = fromtime,
                        ToTime = totime,
                        Work=work,
                        WorkCategory=WorkCategory,
                        Description=description
                    };

                    timeSheet.TimeSheetEntries.Add(timeSheetEntry);
                }
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
        return timeSheet;
    }

    public async Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId)
    {
        List<TimeSheetEntry> timeSheetEntries = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "SELECT *  from timesheetentries WHERE timesheetid=@timeSheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetId", timeSheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                    int timeSheetEntryId = int.Parse(reader["id"].ToString());
                    TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                    TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                    string work = reader["work"].ToString();
                    string WorkCategory = reader["workcategory"].ToString();
                    string description = reader["description"].ToString();

                TimeSheetEntry timesheet = new TimeSheetEntry()
                {
                    Id = timeSheetEntryId,
                    FromTime = fromtime,
                    ToTime = totime,
                    Work=work,
                    WorkCategory=WorkCategory,
                    Description=description
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

    public async Task<bool> InsertTimeSheet(TimeSheet timeSheet)
    {
        int timeSheetId = await GetTimeSheetId(timeSheet);

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        var query = new StringBuilder(
            "INSERT INTO timesheetentries(work,workcategory,description,fromtime, totime, timesheetid) VALUES "
        );
        var parameters = new List<MySqlParameter>();

        for (int i = 0; i < timeSheet.TimeSheetEntries.Count; i++)
        {
            var timeSheetEntry = timeSheet.TimeSheetEntries[i];

            query.Append($"( @work{i},@workCategory{i},@Description{i} , @FromTime{i}, @ToTime{i}, @TimeSheetId{i}), ");

            parameters.Add(new MySqlParameter($"@work{i}", timeSheetEntry.Work));
            parameters.Add(new MySqlParameter($"@workCategory{i}", timeSheetEntry.WorkCategory));
            parameters.Add(new MySqlParameter($"@Description{i}", timeSheetEntry.Description));
            parameters.Add(new MySqlParameter($"@FromTime{i}", timeSheetEntry.FromTime));
            parameters.Add(new MySqlParameter($"@ToTime{i}", timeSheetEntry.ToTime));
            parameters.Add(new MySqlParameter($"@TimeSheetId{i}", timeSheetId));
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

    private async Task<int> GetTimeSheetId(TimeSheet timeSheet)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        int timesheetId = 0;
        try
        {
            MySqlCommand cmd = new MySqlCommand("getorcreatetimesheet", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@timesheetdate", timeSheet.TimeSheetDate);
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
