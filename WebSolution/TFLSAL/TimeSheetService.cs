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
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Timesheet>> GetTimesheets(int employeeId)
    {
        List<Timesheet> timesheets = new List<Timesheet>();
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

                Timesheet timesheet = new Timesheet()
                {
                    Id = id,
                    TimesheetDate = timesheetDate,
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

    public async Task<Timesheet> GetTimesheet(int employeeId, string date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        Timesheet timesheet = new Timesheet();
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetdetails.id as timesheetdetailid,
                timesheetdetails.employeeworkid,timesheetdetails.fromtime,timesheetdetails.totime,
                projects.title as projectName,employees.userid
                FROM timesheets  
                LEFT JOIN  timesheetdetails ON  timesheets.id= timesheetdetails.timesheetid
                INNER JOIN employees ON timesheets.employeeid =employees.id
                WHERE timesheets.timesheetdate = @timesheetDate AND timesheets.employeeId = @employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetDate", date);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int timesheetId = int.Parse(reader["timesheetid"].ToString());
                int employeeUserId = int.Parse(reader["userid"].ToString());
                string status = reader["status"].ToString();
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                timesheet = new Timesheet()
                {
                    Id = timesheetId,
                    Status = status,
                    TimesheetDate = DateTime.Parse(date),
                    StatusChangedDate = statusChangedDate,
                    EmployeeId = employeeId,
                    Employee = new Employee { UserId = employeeUserId },
                    TimeSheetDetails = new List<TimesheetDetail>()
                };
                do
                {
                    if (reader["timesheetdetailid"] != DBNull.Value)
                    {
                        int timesheetDetailId = int.Parse(reader["timesheetdetailid"].ToString());
                        int employeeWorkId = int.Parse(reader["employeeworkid"].ToString());
                        TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                        TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                      

                        TimesheetDetail timesheetDetail = new TimesheetDetail()
                        {
                            Id = timesheetDetailId,
                            FromTime = fromtime,
                            ToTime = totime,
                            EmployeeWorkId=employeeWorkId,
                            TimeSheetId=timesheetId
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

    public async Task<TimesheetDetail> GetTimesheetEntry(int timesheetDetailId)
    {
        TimesheetDetail timesheetDetail = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT timesheetdetails.*  from timesheetdetails 
            WHERE timesheetdetails.id=@timesheetDetailId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetDetailId", timesheetDetailId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                int employeeWorkId = int.Parse(reader["employeeworkid"].ToString());
                int timesheetId = int.Parse(reader["timesheetid"].ToString());
                string description = reader["description"].ToString();
                string projectName = reader["projectName"].ToString();

                timesheetDetail = new TimesheetDetail()
                {
                    Id = timesheetDetailId,
                    FromTime = fromtime,
                    ToTime = totime,
                    EmployeeWorkId=employeeWorkId,
                    TimeSheetId=timesheetId,
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

    public async Task<List<TimesheetDetail>> GetTimesheetEntries(int timesheetId)
    {
        List<TimesheetDetail> timeSheetEntries = new List<TimesheetDetail>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "SELECT timesheetdetails.*,projects.title as projectName  from timesheetdetails WHERE timesheetid=@timesheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int timesheetDetailId = int.Parse(reader["id"].ToString());
                TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                int employeeWorkId = int.Parse(reader["projectworkId"].ToString());

                TimesheetDetail timesheet = new TimesheetDetail()
                {
                    Id = timesheetDetailId,
                    FromTime = fromtime,
                    ToTime = totime,
                    EmployeeWorkId=employeeWorkId,
                    TimeSheetId=timesheetId
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

    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId)
    {
        List<ProjectWorkHours> projectsHoursList = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            @"SELECT projects.title AS projectname,
    CAST(((SUM( TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ))/3600)AS DECIMAL(10,2)) AS hours 
    FROM timesheetdetails
    INNER JOIN timesheets on timesheetdetails.timesheetid=timesheets.id
    INNER JOIN projects on timesheetdetails.projectid=projects.id
    WHERE  timesheets.employeeid=@employee_id 
    GROUP BY timesheetdetails.projectid";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_id", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string projectName = reader["projectname"].ToString();
                double hours = double.Parse(reader["hours"].ToString());

                ProjectWorkHours projectHours = new ProjectWorkHours()
                {
                    ProjectName = projectName,
                    Hours = hours
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

    public async Task<bool> AddTimesheetEntry(TimesheetDetail timesheetDetail)
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
            command.Parameters.AddWithValue("@TimeSheetId", timesheetDetail.TimeSheetId);
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

    public async Task<bool> UpdateTimesheetEntry(
        int timesheetDetailId,
        TimesheetDetail timesheetDetail
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

    public async Task<bool> RemoveTimesheetEntry(int timesheetDetailId)
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

    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
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
