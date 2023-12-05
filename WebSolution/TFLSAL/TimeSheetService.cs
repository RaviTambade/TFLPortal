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
                        Work = work,
                        WorkCategory = WorkCategory,
                        Description = description
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
            string query = "SELECT *  from timesheetentries WHERE timesheetid=@timeSheetId";
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
                    Work = work,
                    WorkCategory = WorkCategory,
                    Description = description
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

    public async Task<bool> InsertTimeSheetEntry(TimeSheetEntry timeSheetEntry)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "INSERT INTO timesheetentries(work,workcategory,description,fromtime, totime, timesheetid) VALUES (@work,@workCategory,@Description , @FromTime, @ToTime, @TimeSheetId)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@work", timeSheetEntry.Work);
            command.Parameters.AddWithValue("@workCategory", timeSheetEntry.WorkCategory);
            command.Parameters.AddWithValue("@Description", timeSheetEntry.Description);
            command.Parameters.AddWithValue("@FromTime", timeSheetEntry.FromTime);
            command.Parameters.AddWithValue("@ToTime", timeSheetEntry.ToTime);
            command.Parameters.AddWithValue("@TimeSheetId", timeSheetEntry.TimeSheetId);
            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
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
        return status;
    }

    public async Task<int> GetTimeSheetId(int employeeId, DateTime date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        int timesheetId = 0;
        try
        {
            MySqlCommand cmd = new MySqlCommand("getorcreatetimesheet", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@timesheetdate", date);
            cmd.Parameters.AddWithValue("@empid", employeeId);
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

    public async Task<bool> ChangeTimeSheetStatus(int timeSheetId, TimeSheet timeSheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "UPDATE timesheets SET status=@Status, StatusChangedDate=@StatusChangedDate WHERE id=@timesheetid ";
            command.Connection = connection;
            command.Parameters.AddWithValue("@StatusChangedDate", timeSheet.StatusChangedDate);
            command.Parameters.AddWithValue("@Status", timeSheet.Status);
            command.Parameters.AddWithValue("@timesheetid", timeSheetId);

            await connection.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            connection.Close();
        }
        return status;
    }
}
