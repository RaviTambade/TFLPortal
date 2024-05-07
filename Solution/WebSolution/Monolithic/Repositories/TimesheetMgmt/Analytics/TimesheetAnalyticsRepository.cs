using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Entities.TimesheetMgmt;
using Transflower.TFLPortal.Repositories.TimesheetMgmt.Analytics.Interfaces;

namespace Transflower.TFLPortal.Repositories.TimesheetMgmt.Analytics;

public class TimesheetAnalyticsRepository:ITimesheetAnalyticsRepository
{ 

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimesheetAnalyticsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Timesheet>> GetTimesheets(int employeeId, DateOnly from, DateOnly to )
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
              @"SELECT timesheets.* , COALESCE(SUM(timesheetentries.hours),0) AS totalhours from timesheets
                LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
                WHERE  createdby =@employeeId AND createdon BETWEEN @fromDate AND @toDate 
                GROUP BY createdon";
            MySqlCommand command = new MySqlCommand(query, connection);
            string fromDate = from.ToString("yyyy-MM-dd");
            string toDate = to.ToString("yyyy-MM-dd");

            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@fromDate", fromDate);
            command.Parameters.AddWithValue("@toDate", toDate);
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
                    TotalHours = reader.GetDouble("totalhours"),
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

    public async Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId,DateOnly from,DateOnly to)
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string fromDate = from.ToString("yyyy-MM-dd");
            string toDate = to.ToString("yyyy-MM-dd");
            string query =
                @"SELECT timesheets.* ,COALESCE(SUM(timesheetentries.hours),0) AS totalhours  FROM timesheets
                INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
                WHERE  status ='submitted' AND createdon BETWEEN @fromDate AND @toDate
                AND  timesheets.createdby IN (
                SELECT projectallocations.employeeid from projectallocations
                WHERE projectallocations.status='yes'  
                AND projectid IN (SELECT projectid from projectallocations WHERE employeeid=@projectManagerId 
                AND title='manager' ))GROUP BY createdon";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectManagerId", projectManagerId);
            command.Parameters.AddWithValue("@fromDate", fromDate);
            command.Parameters.AddWithValue("@toDate", toDate);
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
                    TotalHours = reader.GetDouble("totalhours"),
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
                @"SELECT *, COALESCE(SUM(timesheetentries.hours),0) AS totalhours
                FROM timesheets
                LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
                WHERE timesheets.createdon = @timesheetDate AND timesheets.createdby = @employeeId
                GROUP BY timesheetid";
        MySqlCommand command = new MySqlCommand(query, connection);
            string formatedDate = date.ToString("yyyy-MM-dd");
            command.Parameters.AddWithValue("@timesheetDate", formatedDate);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync() )
            {
                timesheet = new Timesheet()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    CreatedOn = reader.GetDateTime("createdon"),
                    CreatedBy = employeeId,
                    TotalHours = reader.GetDouble("totalhours"),
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
                @"SELECT timesheets.*, COALESCE(SUM(timesheetentries.hours),0) AS totalhours
                  FROM timesheets
                  INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
                  WHERE timesheets.id = @timesheetId GROUP BY timesheetid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync() )
            {
                timesheet = new Timesheet()
                {
                    Id = timesheetId,
                    Status = reader.GetString("status"),
                    CreatedOn = reader.GetDateTime("createdon"),
                    CreatedBy = reader.GetInt32("createdby"),
                    ModifiedOn = reader.GetDateTime("modifiedon"),
                    TotalHours = reader.GetDouble("totalhours"),
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
        List<TimesheetEntry> timesheetEntries = new List<TimesheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =@"SELECT * FROM timesheetentries WHERE timesheetentries.timesheetid=@timesheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);
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
                    Hours = reader.GetDouble("hours")
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
                    Hours = reader.GetDouble("hours")
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

    public async Task<MemberPerformence> GetWorkUtilization(int employeeId, DateOnly from, DateOnly to, int projectId)
    {
        MemberPerformence memberPerformence=new MemberPerformence();
        memberPerformence.Works=new List<Work>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "CALL spGetWorkUtilization(@employeeId,@fromDate,@toDate,@projectId)";
        try
        {
            string fromDate = from.ToString("yyyy-MM-dd");
            string toDate = to.ToString("yyyy-MM-dd");
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@fromDate", fromDate);
            command.Parameters.AddWithValue("@toDate", toDate);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Work work = new Work()
                {
                    Activity = reader.GetString("tasktype"),
                    Duration = reader.GetDouble("hours")
                };
                memberPerformence.Works.Add(work);
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
        return memberPerformence;
    }

    public async Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId,DateOnly from,DateOnly to)
    {
        List<ProjectWorkHours> projectsHoursList = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = @"CALL spGetHoursWorkedForEachProject(@employeeId,@fromDate,@toDate)";
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
