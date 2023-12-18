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
            string query = "select * from timesheets where  employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
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
        TimeSheet timeSheet = new TimeSheet();
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetentries.id as timesheetentryid,
                timesheetentries.work, timesheetentries.projectid,timesheetentries.workcategory,timesheetentries.description,timesheetentries.fromtime,timesheetentries.totime,
                projects.title as projectName,employees.userid
                FROM timesheets  
                LEFT JOIN  timesheetentries ON  timesheets.id= timesheetentries.timesheetid
                LEFT JOIN projects ON timesheetentries.projectid =projects.id
                INNER JOIN employees ON timesheets.employeeid =employees.id
                WHERE timesheets.timesheetdate = @timeSheetDate AND timesheets.employeeId = @employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetDate", date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int timeSheetId = int.Parse(reader["timesheetid"].ToString());
                int employeeUserId = int.Parse(reader["userid"].ToString());
                string status = reader["status"].ToString();
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                timeSheet = new TimeSheet()
                {
                    Id = timeSheetId,
                    Status = status,
                    TimeSheetDate = DateTime.Parse(date),
                    StatusChangedDate = statusChangedDate,
                    EmployeeId = employeeId,
                    Employee = new Employee { UserId = employeeUserId },
                    TimeSheetDetails = new List<TimeSheetEntry>()
                };
                do
                {
                    if (reader["timesheetentryid"] != DBNull.Value)
                    {
                        int timeSheetEntryId = int.Parse(reader["timesheetentryid"].ToString());
                        int projectId = int.Parse(reader["projectid"].ToString());
                        TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                        TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                        string work = reader["work"].ToString();
                        string WorkCategory = reader["workcategory"].ToString();
                        string description = reader["description"].ToString();
                        string projectName = reader["projectName"].ToString();

                        TimeSheetEntry timeSheetEntry = new TimeSheetEntry()
                        {
                            Id = timeSheetEntryId,
                            FromTime = fromtime,
                            ToTime = totime,
                            Work = work,
                            WorkCategory = WorkCategory,
                            Description = description,
                            ProjectId = projectId,
                            ProjectName = projectName
                        };
                        timeSheet.TimeSheetDetails.Add(timeSheetEntry);
                    }
                } while (await reader.ReadAsync());
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

    public async Task<bool> InsertTimeSheet(TimeSheet timeSheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "INSERT INTO timesheets(timesheetdate,employeeid) VALUES (@timesheetdate,@empid)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timesheetdate", timeSheet.TimeSheetDate);
            cmd.Parameters.AddWithValue("@empid", timeSheet.EmployeeId);
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

    public async Task<TimeSheetEntry> GetTimeSheetEntry(int timeSheetEntryId)
    {
        TimeSheetEntry timeSheetEntry = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT timesheetentries.*,projects.title as projectName  from timesheetentries 
            INNER JOIN projects ON timesheetentries.projectid =projects.id
            WHERE timesheetentries.id=@timeSheetEntryId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetEntryId", timeSheetEntryId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                string work = reader["work"].ToString();
                int projectId = int.Parse(reader["projectid"].ToString());
                string WorkCategory = reader["workcategory"].ToString();
                string description = reader["description"].ToString();
                string projectName = reader["projectName"].ToString();

                timeSheetEntry = new TimeSheetEntry()
                {
                    Id = timeSheetEntryId,
                    FromTime = fromtime,
                    ToTime = totime,
                    Work = work,
                    WorkCategory = WorkCategory,
                    Description = description,
                    ProjectId = projectId,
                    ProjectName = projectName,
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
        return timeSheetEntry;
    }

    public async Task<List<TimeSheetEntry>> GetTimeSheetEntries(int timeSheetId)
    {
        List<TimeSheetEntry> timeSheetEntries = new List<TimeSheetEntry>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "SELECT timesheetentries.*,projects.title as projectName  from timesheetentries  INNER JOIN projects ON timesheetentries.projectid =projects.id WHERE timesheetid=@timeSheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timeSheetId", timeSheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int timeSheetEntryId = int.Parse(reader["id"].ToString());
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                string projectName = reader["projectName"].ToString();

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
                    Description = description,
                    TimeSheetId = timeSheetId,
                    ProjectId = projectId,
                    ProjectName = projectName
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
            "INSERT INTO timesheetentries(work,workcategory,description,fromtime, totime, timesheetid,projectid) VALUES (@work,@workCategory,@Description , @FromTime, @ToTime, @TimeSheetId,@projectid)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@work", timeSheetEntry.Work);
            command.Parameters.AddWithValue("@workCategory", timeSheetEntry.WorkCategory);
            command.Parameters.AddWithValue("@Description", timeSheetEntry.Description);
            command.Parameters.AddWithValue("@FromTime", timeSheetEntry.FromTime);
            command.Parameters.AddWithValue("@ToTime", timeSheetEntry.ToTime);
            command.Parameters.AddWithValue("@TimeSheetId", timeSheetEntry.TimeSheetId);
            command.Parameters.AddWithValue("@projectid", timeSheetEntry.ProjectId);
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

    public async Task<bool> UpdateTimeSheetEntry(
        int timeSheetEntryId,
        TimeSheetEntry timeSheetEntry
    )
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "UPDATE  timesheetentries SET work=@work,workcategory=@workCategory,description=@Description,fromtime=@FromTime,totime=@ToTime ,projectid=@projectid WHERE id=@TimeSheetEntryId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@work", timeSheetEntry.Work);
            command.Parameters.AddWithValue("@workCategory", timeSheetEntry.WorkCategory);
            command.Parameters.AddWithValue("@Description", timeSheetEntry.Description);
            command.Parameters.AddWithValue("@FromTime", timeSheetEntry.FromTime);
            command.Parameters.AddWithValue("@ToTime", timeSheetEntry.ToTime);
            command.Parameters.AddWithValue("@projectid", timeSheetEntry.ProjectId);
            command.Parameters.AddWithValue("@TimeSheetEntryId", timeSheetEntryId);
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

    public async Task<bool> RemoveTimeSheetEntry(int timeSheetEntryId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetentries WHERE id=@TimeSheetEntryId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TimeSheetEntryId", timeSheetEntryId);
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

    public async Task<bool> RemoveAllTimeSheetEntry(int timeSheetId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetentries WHERE timesheetId=@TimeSheetId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TimeSheetId", timeSheetId);
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

   

    public async Task<List<WorkCategoryDetails>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    )
    {
        List<WorkCategoryDetails> workCategoryDetails = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "CALL getemployeeworkhoursbyactivity(@employee_id,@interval_type,@project_id)";
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
                string userstory = reader["userstory"].ToString();
                string label = reader["label"].ToString();
                string task = reader["task"].ToString();
                string bug = reader["bug"].ToString();
                string issues = reader["issues"].ToString();
                string meeting = reader["meeting"].ToString();
                string learning = reader["learning"].ToString();
                string mentoring = reader["mentoring"].ToString();
                string clientcall = reader["clientcall"].ToString();
                string other = reader["other"].ToString();

                WorkCategoryDetails workCategoryDetail = new WorkCategoryDetails()
                {
                    Label = label,
                    UserStory = userstory,
                    Task = task,
                    Bug = bug,
                    Issues = issues,
                    Meeting = meeting,
                    Learning = learning,
                    Mentoring = mentoring,
                    ClientCall = clientcall,
                    Other = other
                };
                workCategoryDetails.Add(workCategoryDetail);
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
        return workCategoryDetails;
    }
}
