
using MySql.Data.MySqlClient;
using TFLPortal.Models;

namespace TFLPortal.Services.TimesheetMgmt.Operations;

public class TimesheetOperationsService:ITimesheetOperationsService
{
     private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimesheetOperationsService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }
    
     public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO timesheets(createdon,createdby) VALUES (@createdOn,@createdBy)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@createdOn", timesheet.CreatedOn);
            cmd.Parameters.AddWithValue("@createdBy", timesheet.CreatedBy);
            await connection.OpenAsync();
            int rowsAffected = await cmd.ExecuteNonQueryAsync();
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
            connection.Close();
        }
        return status;
    }

    public async Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "INSERT INTO timesheetentries(fromtime, totime, timesheetid,taskid) VALUES ( @fromTime, @toTime, @timesheetId,@taskId)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromTime", timesheetEntry.FromTime);
            command.Parameters.AddWithValue("@toTime", timesheetEntry.ToTime);
            command.Parameters.AddWithValue("@timesheetId", timesheetEntry.TimesheetId);
            command.Parameters.AddWithValue("@taskId", timesheetEntry.TaskId);

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

    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "UPDATE timesheets SET status=@status, modifiedon=@modifiedOn WHERE id=@timesheetId ";
            command.Connection = connection;
            command.Parameters.AddWithValue("@modifiedOn", timesheet.ModifiedOn);
            command.Parameters.AddWithValue("@status", timesheet.Status);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);

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
            connection.Close();
        }
        return status;
    }

    public async Task<bool> UpdateTimesheetEntry( int timesheetEntryId, TimesheetEntry timesheetEntry)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "UPDATE  timesheetentries SET fromtime=@fromTime,totime=@toTime,taskid=@taskId WHERE id=@timesheetEntryId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromTime", timesheetEntry.FromTime);
            command.Parameters.AddWithValue("@foTime", timesheetEntry.ToTime);
            command.Parameters.AddWithValue("@taskId", timesheetEntry.TaskId);
            command.Parameters.AddWithValue("@timesheetEntryId", timesheetEntryId);
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

    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetentries WHERE id=@timesheetEntryId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetEntryId", timesheetEntryId);
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

    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetentries WHERE timesheetId=@timesheetId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);
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
}