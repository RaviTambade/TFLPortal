using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class TimesheetService : ITimesheetService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TimesheetService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<TimesheetDuration>> GetTimesheets(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<TimesheetDuration> timesheets = new List<TimesheetDuration>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string fromdate = fromDate.ToString("yyyy-MM-dd");
            string todate = toDate.ToString("yyyy-MM-dd");
            

            string query =
                @$"select timesheets.* , 
                    COALESCE(CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)),0) as time_in_hour
                    from timesheets
                    LEFT JOIN timesheetdetails on timesheetdetails.timesheetid=timesheets.id
                    WHERE  employeeid =@employeeId   AND timesheetdate>=@fromdate AND timesheetdate<=@todate 
                    GROUP BY timesheetdate";
            MySqlCommand command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                TimesheetDuration timesheet = new TimesheetDuration()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    TimesheetDate = reader.GetDateTime("timesheetdate"),
                    StatusChangedDate = reader.GetDateTime("statuschangeddate"),
                    Hours = reader.GetDouble("time_in_hour"),
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

    public async Task<List<TimesheetViewModel>> GetEmployeesTimeSheetsForProjectManager(
        int projectManagerId,
        string status,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<TimesheetViewModel> timesheets = new List<TimesheetViewModel>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string fromdate = fromDate.ToString("yyyy-MM-dd");
            string todate = toDate.ToString("yyyy-MM-dd");
            string query =
                @"SELECT timesheets.* , employees.userid,
                    CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour
                    FROM timesheets
                    INNER JOIN timesheetdetails on timesheetdetails.timesheetid=timesheets.id
                    INNER JOIN employees ON timesheets.employeeid =employees.id
                    WHERE  status =@status AND timesheetdate>=@fromdate AND timesheetdate<=@todate AND  timesheets.employeeid IN (
                    SELECT projectmembership.employeeid from projectmembership 
                    INNER JOIN projects on projectmembership.projectid=projects.id
                    INNER join employees on  projects.managerid=employees.id
                    WHERE projects.managerid=@projectmanagerId AND projectmembership.currentprojectworkingstatus='yes'
                    )GROUP BY timesheetdate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectmanagerId", projectManagerId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                TimesheetViewModel timesheet = new TimesheetViewModel()
                {
                    Id = reader.GetInt32("id"),
                    Status = reader.GetString("status"),
                    TimesheetDate = reader.GetDateTime("timesheetdate"),
                    StatusChangedDate = reader.GetDateTime("statuschangeddate"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Hours = reader.GetDouble("time_in_hour"),
                    Employee = new Employee { UserId = reader.GetInt32("userid") },
                    TimeSheetDetails = new List<TimesheetDetailViewModel>()
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

    public async Task<int> GetTimesheetId(int employeeId, DateOnly date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        string Date = date.ToString("yyyy-MM-dd");
        int timesheetId = 0;
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid FROM timesheets  
                WHERE timesheets.timesheetdate = @timesheetDate AND timesheets.employeeId = @employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            string formatedDate = date.ToString("yyyy-MM-dd");
            command.Parameters.AddWithValue("@timesheetDate", Date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                timesheetId = reader.GetInt32("timesheetid");
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
        return timesheetId;
    }

      public async Task<TimesheetViewModel> GetTimesheet(int timesheetId)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        TimesheetViewModel timesheet = new TimesheetViewModel();
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid,timesheets.status,timesheets.timesheetdate,
                timesheets.employeeid, timesheets.statuschangeddate,timesheetdetails.id as timesheetdetailid,
                timesheetdetails.employeeworkid,timesheetdetails.fromtime,timesheetdetails.totime,
                employeework.projectid,projects.title as projectname,
                employeework.projectworktype as worktype,employeework.title as worktitle,
                employees.userid FROM timesheets  
                LEFT JOIN  timesheetdetails ON  timesheets.id= timesheetdetails.timesheetid
                LEFT JOIN employees ON timesheets.employeeid =employees.id
                LEFT JOIN employeework ON timesheetdetails.employeeworkid=employeework.id
                LEFT JOIN projects ON employeework.projectid=projects.id
                WHERE timesheets.id = @timesheetid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetid", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                timesheet = new TimesheetViewModel()
                {
                    Id = timesheetId,
                    Status = reader.GetString("status"),
                    TimesheetDate = reader.GetDateTime("timesheetdate"),
                    StatusChangedDate = reader.GetDateTime("statuschangeddate"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Employee = new Employee { UserId = reader.GetInt32("userid") },
                    TimeSheetDetails = new List<TimesheetDetailViewModel>()
                };
                do
                {
                    if (reader["timesheetdetailid"] != DBNull.Value)
                    {
                        TimesheetDetailViewModel timesheetDetail = new TimesheetDetailViewModel()
                        {
                            Id = reader.GetInt32("timesheetdetailid"),
                            FromTime = TimeOnly.Parse(reader.GetString("fromtime")),
                            ToTime = TimeOnly.Parse(reader.GetString("totime")),
                            EmployeeWorkId = reader.GetInt32("employeeworkid"),
                            TimesheetId = timesheetId,
                            ProjectId = reader.GetInt32("projectId"),
                            ProjectName = reader.GetString("projectname"),
                            WorkTitle = reader.GetString("worktitle"),
                            WorkType = reader.GetString("worktype")
                        };
                        timesheet.TimeSheetDetails.Add(timesheetDetail);
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
        return timesheet;
    }

    public async Task<TimesheetDetailViewModel> GetTimesheetDetail(int timesheetDetailId)
    {
        TimesheetDetailViewModel timesheetDetail =  new TimesheetDetailViewModel();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT timesheetdetails.*,employeework.projectid,projects.title as projectname,
                 sprintmaster.id as sprintid,sprintmaster.title as sprinttitle,
                 employeework.projectworktype as worktype,employeework.title as worktitle
                 from timesheetdetails 
                 INNER JOIN employeework ON timesheetdetails.employeeworkid=employeework.id
                 INNER JOIN projects ON employeework.projectid=projects.id
                 INNER JOIN sprintmaster ON employeework.sprintid=sprintmaster.id
                 WHERE timesheetdetails.id=@timesheetDetailId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetDetailId", timesheetDetailId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                timesheetDetail = new TimesheetDetailViewModel()
                {
                    Id = reader.GetInt32("id"),
                    FromTime = TimeOnly.Parse(reader.GetString("fromtime")),
                    ToTime = TimeOnly.Parse(reader.GetString("totime")),
                    EmployeeWorkId = reader.GetInt32("employeeworkid"),
                    TimesheetId = reader.GetInt32("timesheetid"),
                    ProjectId = reader.GetInt32("projectId"),
                    ProjectName = reader.GetString("projectname"),
                    WorkTitle = reader.GetString("worktitle"),
                    WorkType = reader.GetString("worktype"),
                    SprintId = reader.GetInt32("sprintid"),
                    SprintName = reader.GetString("sprinttitle"),
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
        return timesheetDetail;
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
                WorkCategoryDetails workCategoryDetail = new WorkCategoryDetails()
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

    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<ProjectWorkHours> projectsHoursList = new();

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
                ProjectWorkHours projectHours = new ProjectWorkHours()
                {
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
            @"SELECT COUNT(*) AS WorkingDays FROM timesheets WHERE employeeid=@employee_id
                       AND status='approved' AND MONTH(timesheetdate)=@month AND YEAR(timesheetdate)=@year";
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
            string query =
                "INSERT INTO timesheets(timesheetdate,employeeid) VALUES (@timesheetdate,@empid)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timesheetdate", timesheet.TimesheetDate);
            cmd.Parameters.AddWithValue("@empid", timesheet.EmployeeId);
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

    public async Task<bool> AddTimesheetDetail(TimesheetEntry timesheetDetail)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "INSERT INTO timesheetdetails(fromtime, totime, timesheetid,employeeworkid) VALUES ( @FromTime, @ToTime, @TimeSheetId,@employeeworkid)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@FromTime", timesheetDetail.FromTime);
            command.Parameters.AddWithValue("@ToTime", timesheetDetail.ToTime);
            command.Parameters.AddWithValue("@TimeSheetId", timesheetDetail.TimesheetId);
            command.Parameters.AddWithValue("@employeeworkid", timesheetDetail.EmployeeWorkId);

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
                "UPDATE timesheets SET status=@Status, StatusChangedDate=@StatusChangedDate WHERE id=@timesheetid ";
            command.Connection = connection;
            command.Parameters.AddWithValue("@StatusChangedDate", timesheet.StatusChangedDate);
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

    public async Task<bool> UpdateTimesheetDetail(
        int timesheetDetailId,
        TimesheetEntry timesheetDetail
    )
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            "UPDATE  timesheetdetails SET fromtime=@FromTime,totime=@ToTime,employeeworkid=@employeeworkid WHERE id=@timesheetDetailId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@FromTime", timesheetDetail.FromTime);
            command.Parameters.AddWithValue("@ToTime", timesheetDetail.ToTime);
            command.Parameters.AddWithValue("@employeeworkid", timesheetDetail.EmployeeWorkId);
            command.Parameters.AddWithValue("@timesheetDetailId", timesheetDetailId);
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

    public async Task<bool> RemoveTimesheetDetail(int timesheetDetailId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetdetails WHERE id=@timesheetDetailId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetDetailId", timesheetDetailId);
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

    public async Task<bool> RemoveAllTimesheetDetails(int timesheetId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "DELETE FROM timesheetdetails WHERE timesheetId=@TimeSheetId";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@TimeSheetId", timesheetId);
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
