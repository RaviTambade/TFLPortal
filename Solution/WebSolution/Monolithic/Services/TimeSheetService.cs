using MySql.Data.MySqlClient;
using TFLPortal.Services.Interfaces;
using TFLPortal.Models;
using TFLPortal.Responses;
using System.Data;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class TimesheetService : ITimesheetService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimesheetService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Timesheet>> GetTimesheets(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string fromdate = fromDate.ToString("yyyy-MM-dd");
            string todate = toDate.ToString("yyyy-MM-dd");

            string query =
                @"  SELECT timesheets.* , COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour from timesheets
                    LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
                    WHERE  createdby =@employeeId AND createdon BETWEEN @fromdate AND @todate 
                    GROUP BY createdon";
            MySqlCommand command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                Timesheet timesheet = new Timesheet()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    CreatedBy = employeeId,
                    CreatedOn = reader.GetDateTime("createdon"),
                    ModifiedOn = reader.GetDateTime("modifiedon"),
                    TotalHours = reader.GetDouble("time_in_hour"),
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

    public async Task<List<Timesheet>> GetTimeSheetsForApproval(
        int projectManagerId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string fromdate = fromDate.ToString("yyyy-MM-dd");
            string todate = toDate.ToString("yyyy-MM-dd");
            string query =
                @"SELECT timesheets.* ,SUM(timesheetentries.durationinhours) AS time_in_hour  FROM timesheets
                INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
                INNER JOIN employees ON timesheets.createdby =employees.id
                WHERE  status =@status AND createdon BETWEEN @fromdate AND @todate  AND  timesheets.createdby IN (
                SELECT projectmembers.employeeid from projectmembers
                INNER JOIN projects on projectmembers.projectid=projects.id
                WHERE projects.managerid=@projectmanagerId AND projectmembers.status='yes'
                )GROUP BY createdon";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectmanagerId", projectManagerId);
            command.Parameters.AddWithValue("@status", "submitted");
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                Timesheet timesheet = new Timesheet()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    CreatedOn = reader.GetDateTime("createdon"),
                    ModifiedOn = reader.GetDateTime("modifiedon"),
                    CreatedBy = reader.GetInt32("createdby"),
                    TotalHours = reader.GetDouble("time_in_hour"),
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

    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        Timesheet timesheet = new();
        try
        {
            string query =
                @"SELECT *, COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour
                FROM timesheets
                LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
                WHERE timesheets.createdon = @timesheetDate AND timesheets.createdby = @employeeId";
        MySqlCommand command = new MySqlCommand(query, connection);
            string formatedDate = date.ToString("yyyy-MM-dd");
            command.Parameters.AddWithValue("@timesheetDate", formatedDate);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync() && reader["id"] != DBNull.Value)
            {
                timesheet = new Timesheet()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    CreatedOn = reader.GetDateTime("createdon"),
                    CreatedBy = employeeId,
                    TotalHours = reader.GetDouble("time_in_hour"),
                    ModifiedOn = reader.GetDateTime("modifiedon"),
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
        return timesheet;
    }

    public async Task<Timesheet> GetTimesheet(int timesheetId)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        Timesheet timesheet = null;
        try
        {
            string query =
                @"SELECT timesheets.*, COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour
                  FROM timesheets
                  INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
                  WHERE timesheets.id = @timesheetid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetid", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync() && reader["id"] != DBNull.Value)
            {
                timesheet = new Timesheet()
                {
                    Id = timesheetId,
                    Status = reader.GetString("status"),
                    CreatedOn = reader.GetDateTime("createdon"),
                    CreatedBy = reader.GetInt32("createdby"),
                    ModifiedOn = reader.GetDateTime("modifiedon"),
                    TotalHours = reader.GetDouble("time_in_hour"),
                };
                await reader.CloseAsync();
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

        return timesheet;
    }

    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
    {
        List<TimesheetEntry> timesheetEntries = new();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT * FROM timesheetentries
                 WHERE timesheetentries.timesheetid=@timesheetid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetid", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                TimesheetEntry timesheetEntry = new TimesheetEntry()
                {
                    Id = reader.GetInt32("id"),
                    FromTime = TimeOnly.Parse(reader.GetTimeSpan("fromtime").ToString()),
                    ToTime = TimeOnly.Parse(reader.GetTimeSpan("totime").ToString()),
                    TaskId = reader.GetInt32("taskid"),
                    TimesheetId = reader.GetInt32("timesheetid"),
                    DurationInHours = reader.GetDouble("durationinhours")
                };
                timesheetEntries.Add(timesheetEntry);
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
        return timesheetEntries;
    }

    public async Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId)
    {
        TimesheetEntry timesheetEntry = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT * FROM timesheetentries
                 WHERE timesheetentries.id=@timesheetEntryId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetEntryId", timesheetEntryId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                timesheetEntry = new TimesheetEntry()
                {
                    Id = reader.GetInt32("id"),
                    FromTime = TimeOnly.Parse(reader.GetTimeSpan("fromtime").ToString()),
                    ToTime = TimeOnly.Parse(reader.GetTimeSpan("totime").ToString()),
                    TaskId = reader.GetInt32("taskid"),
                    TimesheetId = reader.GetInt32("timesheetid"),
                    DurationInHours = reader.GetDouble("durationinhours")
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
        return timesheetEntry;
    }

    public async Task<List<MemberUtilizationResponse>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    )
    {
        List<MemberUtilizationResponse> memberUtilizations = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "CALL getemployeeworkhoursbyactivity(@employee_id,@interval_type,@project_id)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_id", employeeId);
            command.Parameters.AddWithValue("@interval_type", intervalType);
            command.Parameters.AddWithValue("@project_id", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                MemberUtilizationResponse memberUtilization = new MemberUtilizationResponse()
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

    public async Task<List<ProjectWorkHoursResponse>> GetProjectWiseTimeSpentByEmployee(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<ProjectWorkHoursResponse> projectsHoursList = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = @"CALL getprojectwiseemployeeworkhours(@employee_id,@fromdate,@todate)";
        try
        {
            string fromdate = fromDate.ToString("yyyy-MM-dd");
            string todate = toDate.ToString("yyyy-MM-dd");
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_id", employeeId);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);

            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectWorkHoursResponse projectHours = new ProjectWorkHoursResponse()
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

    public async Task<int> GetEmployeeWorkingDaysInMonth(int employeeId, int year, int month)
    {
        int workingDays = 0;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            @"SELECT COUNT(*) AS WorkingDays FROM timesheets WHERE createdby=@employee_id
            AND status='approved' AND MONTH(createdon)=@month AND YEAR(createdon)=@year";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_id", employeeId);
            command.Parameters.AddWithValue("@year", year);
            command.Parameters.AddWithValue("@month", month);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                workingDays = reader.GetInt32("WorkingDays");
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
        return workingDays;
    }

    public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO timesheets(createdon,createdby) VALUES (@createdon,@empid)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@createdon", timesheet.CreatedOn);
            cmd.Parameters.AddWithValue("@empid", timesheet.CreatedBy);
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
            "INSERT INTO timesheetentries(fromtime, totime, timesheetid,taskid) VALUES ( @FromTime, @ToTime, @TimesheetId,@TaskId)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@FromTime", timesheetEntry.FromTime);
            command.Parameters.AddWithValue("@ToTime", timesheetEntry.ToTime);
            command.Parameters.AddWithValue("@TimesheetId", timesheetEntry.TimesheetId);
            command.Parameters.AddWithValue("@TaskId", timesheetEntry.TaskId);

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
                "UPDATE timesheets SET status=@Status, modifiedon=@ModifiedOn WHERE id=@timesheetid ";
            command.Connection = connection;
            command.Parameters.AddWithValue("@ModifiedOn", timesheet.ModifiedOn);
            command.Parameters.AddWithValue("@Status", timesheet.Status);
            command.Parameters.AddWithValue("@timesheetid", timesheetId);

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

    public async Task<bool> UpdateTimesheetEntry(
        int timesheetEntryId,
        TimesheetEntry timesheetEntry
    )
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "UPDATE  timesheetentries SET fromtime=@FromTime,totime=@ToTime,taskid=@taskid WHERE id=@timesheetEntryId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@FromTime", timesheetEntry.FromTime);
            command.Parameters.AddWithValue("@ToTime", timesheetEntry.ToTime);
            command.Parameters.AddWithValue("@taskid", timesheetEntry.TaskId);
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

        string query = "DELETE FROM timesheetentries WHERE timesheetId=@Id";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", timesheetId);
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
