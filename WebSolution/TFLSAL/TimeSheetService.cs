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

    public async Task<List<TimesheetDuration>> GetTimesheets(int employeeId, string status, DateOnly fromDate,DateOnly toDate )
    {
        List<TimesheetDuration> timesheets = new List<TimesheetDuration>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
             string fromdate=fromDate.ToString("yyyy-MM-dd");
            string todate=toDate.ToString("yyyy-MM-dd");

            string query = @"select timesheets.* , 
                    COALESCE(CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)),0) as time_in_hour
                    from timesheets
                    LEFT JOIN timesheetdetails on timesheetdetails.timesheetid=timesheets.id
                    where  employeeid =@employeeId AND timesheets.status=@status AND timesheetdate>=@fromdate AND timesheetdate<=@todate 
                    GROUP BY timesheetdate";
            MySqlCommand command = new MySqlCommand(query, connection);
           
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                // string status = reader["status"].ToString();
                double hours=double.Parse(reader["time_in_hour"].ToString());
                DateTime timesheetDate = DateTime.Parse(reader["timesheetdate"].ToString());
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                TimesheetDuration timesheet = new TimesheetDuration()
                {
                    Id = id,
                    TimesheetDate = timesheetDate,
                    Status = status,
                    EmployeeId = employeeId,
                    StatusChangedDate = statusChangedDate,
                    Hours=hours
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

      public async Task<List<TimesheetViewModel>> GetEmployeeTimesheetsForHRManager(int hrmanagerId ,string status, DateOnly fromDate,DateOnly toDate )
    {
        List<TimesheetViewModel> timesheets = new List<TimesheetViewModel>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
             string fromdate=fromDate.ToString("yyyy-MM-dd");
            string todate=toDate.ToString("yyyy-MM-dd");
            string query = @"select timesheets.* , employees.userid,
                    CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour
                    from timesheets
                    INNER JOIN timesheetdetails on timesheetdetails.timesheetid=timesheets.id
                    INNER JOIN employees ON timesheets.employeeid =employees.id
                    where  status =@status AND timesheetdate>=@fromdate AND timesheetdate<=@todate AND employees.reportingid=@hrmanagerid
                    GROUP BY timesheetdate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@hrmanagerid", hrmanagerId);
            command.Parameters.AddWithValue("@status", status);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int userId  =  int.Parse(reader["userid"].ToString());
                int employeeId  =  int.Parse(reader["employeeid"].ToString());
                double hours=double.Parse(reader["time_in_hour"].ToString());
                DateTime timesheetDate = DateTime.Parse(reader["timesheetdate"].ToString());
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                TimesheetViewModel timesheet = new TimesheetViewModel()
                {
                    Id = id,
                    TimesheetDate = timesheetDate,
                    Status = status,
                    EmployeeId = employeeId,
                    StatusChangedDate = statusChangedDate,
                    Hours=hours,
                    Employee=new Employee {UserId=userId}
                    
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

    public async Task<TimesheetViewModel> GetTimesheet(int employeeId, DateOnly date)
    {
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        TimesheetViewModel timesheet = new TimesheetViewModel();
        try
        {
            string query =
                @"SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetdetails.id as timesheetdetailid,
                timesheetdetails.employeeworkid,timesheetdetails.fromtime,timesheetdetails.totime,employeework.projectid,projects.title as projectname,
                employeework.projectworktype as worktype,employeework.title as worktitle,employees.userid
                FROM timesheets  
                LEFT JOIN  timesheetdetails ON  timesheets.id= timesheetdetails.timesheetid
                LEFT JOIN employees ON timesheets.employeeid =employees.id
                LEFT JOIN employeework ON timesheetdetails.employeeworkid=employeework.id
                LEFT JOIN projects ON employeework.projectid=projects.id
                WHERE timesheets.timesheetdate = @timesheetDate AND timesheets.employeeId = @employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
             string formatedDate=date.ToString("yyyy-MM-dd");
            command.Parameters.AddWithValue("@timesheetDate", formatedDate);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int timesheetId = int.Parse(reader["timesheetid"].ToString());
                int employeeUserId = int.Parse(reader["userid"].ToString());
                string status = reader["status"].ToString();
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                timesheet = new TimesheetViewModel()
                {
                    Id = timesheetId,
                    Status = status,
                    TimesheetDate = DateTime.Parse(formatedDate),
                    StatusChangedDate = statusChangedDate,
                    EmployeeId = employeeId,
                    Employee = new Employee { UserId = employeeUserId },
                    TimeSheetDetails = new List<TimesheetDetailViewModel>()
                };
                do
                {
                    if (reader["timesheetdetailid"] != DBNull.Value)
                    {
                        int timesheetDetailId = int.Parse(reader["timesheetdetailid"].ToString());
                        int employeeWorkId = int.Parse(reader["employeeworkid"].ToString());
                        int projectId = int.Parse(reader["projectId"].ToString());
                        string projectName=reader["projectname"].ToString();
                        string workTitle=reader["worktitle"].ToString();
                        string workType=reader["worktype"].ToString();
                        TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                        TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                      

                        TimesheetDetailViewModel timesheetDetail = new TimesheetDetailViewModel()
                        {
                            Id = timesheetDetailId,
                            FromTime = fromtime,
                            ToTime = totime,
                            EmployeeWorkId=employeeWorkId,
                            TimesheetId=timesheetId,
                            projectId=projectId,
                            ProjectName=projectName,
                            WorkTitle=workTitle,
                            WorkType=workType
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
                int employeeId=int.Parse(reader["employeeid"].ToString());
                int employeeUserId = int.Parse(reader["userid"].ToString());
                string status = reader["status"].ToString();
                DateTime timesheetDate = DateTime.Parse(reader["timesheetdate"].ToString());
                DateTime statusChangedDate = DateTime.Parse(reader["statuschangeddate"].ToString());

                timesheet = new TimesheetViewModel()
                {
                    Id = timesheetId,
                    Status = status,
                    TimesheetDate = timesheetDate,
                    StatusChangedDate = statusChangedDate,
                    EmployeeId = employeeId,
                    Employee = new Employee { UserId = employeeUserId },
                    TimeSheetDetails = new List<TimesheetDetailViewModel>()
                };
                do
                {
                    if (reader["timesheetdetailid"] != DBNull.Value)
                    {
                        int timesheetDetailId = int.Parse(reader["timesheetdetailid"].ToString());
                        int employeeWorkId = int.Parse(reader["employeeworkid"].ToString());
                        int projectId = int.Parse(reader["projectId"].ToString());
                        string projectName=reader["projectname"].ToString();
                        string workTitle=reader["worktitle"].ToString();
                        string workType=reader["worktype"].ToString();
                        TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                        TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                      

                        TimesheetDetailViewModel timesheetDetail = new TimesheetDetailViewModel()
                        {
                            Id = timesheetDetailId,
                            FromTime = fromtime,
                            ToTime = totime,
                            EmployeeWorkId=employeeWorkId,
                            TimesheetId=timesheetId,
                            projectId=projectId,
                            ProjectName=projectName,
                            WorkTitle=workTitle,
                            WorkType=workType
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
        TimesheetDetailViewModel timesheetDetail = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT timesheetdetails.*,employeework.projectid,projects.title as projectname,
                 employeework.projectworktype as worktype,employeework.title as worktitle
                 from timesheetdetails 
                 INNER JOIN employeework ON timesheetdetails.employeeworkid=employeework.id
                 INNER JOIN projects ON employeework.projectid=projects.id
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
                int projectId = int.Parse(reader["projectId"].ToString());
                string projectName=reader["projectname"].ToString();
                string workTitle=reader["worktitle"].ToString();
                string workType=reader["worktype"].ToString();

                timesheetDetail = new TimesheetDetailViewModel()
                {
                    Id = timesheetDetailId,
                    FromTime = fromtime,
                    ToTime = totime,
                    EmployeeWorkId=employeeWorkId,
                    TimesheetId=timesheetId,
                    projectId=projectId,
                    ProjectName=projectName,
                    WorkTitle=workTitle,
                    WorkType=workType
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

    public async Task<List<TimesheetDetailViewModel>> GetTimesheetDetails(int timesheetId)
    {
        List<TimesheetDetailViewModel> timesheetDetails = new List<TimesheetDetailViewModel>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT timesheetdetails.*,employeework.projectid,projects.title as projectname,
                 employeework.projectworktype as worktype,employeework.title as worktitle
                 from timesheetdetails 
                 INNER JOIN employeework ON timesheetdetails.employeeworkid=employeework.id
                 INNER JOIN projects ON employeework.projectid=projects.id  WHERE timesheetid=@timesheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheetId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                 TimeOnly fromtime = TimeOnly.Parse(reader["fromtime"].ToString());
                TimeOnly totime = TimeOnly.Parse(reader["totime"].ToString());
                int timesheetDetailId = int.Parse(reader["id"].ToString());
                int employeeWorkId = int.Parse(reader["employeeworkid"].ToString());
                int projectId = int.Parse(reader["projectId"].ToString());
                string projectName=reader["projectname"].ToString();
                string workTitle=reader["worktitle"].ToString();
                string workType=reader["worktype"].ToString();

             TimesheetDetailViewModel   timesheetDetail = new TimesheetDetailViewModel()
                {
                    Id = timesheetDetailId,
                    FromTime = fromtime,
                    ToTime = totime,
                    EmployeeWorkId=employeeWorkId,
                    TimesheetId=timesheetId,
                    projectId=projectId,
                    ProjectName=projectName,
                    WorkTitle=workTitle,
                    WorkType=workType
                };

                timesheetDetails.Add(timesheetDetail);
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
        return timesheetDetails;
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

    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId,DateOnly fromDate,DateOnly toDate)
    {
        List<ProjectWorkHours> projectsHoursList = new();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query =
            @"CALL getprojectwiseemployeeworkhours(@employee_id,@fromdate,@todate)";
        try
        {
            string fromdate=fromDate.ToString("yyyy-MM-dd");
            string todate=toDate.ToString("yyyy-MM-dd");
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_id", employeeId);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);

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

    public async Task<bool> AddTimesheetDetail(TimesheetDetail timesheetDetail)
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
