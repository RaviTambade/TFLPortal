
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using Transflower.PMS.TimesheetService.Models;
using Transflower.PMS.TimesheetService.Repositories.Interfaces;

namespace  Transflower.PMS.TimesheetService.Repositories;

public class TimesheetRepository : ITimeSheetRepository
{

    private IConfiguration _configuration;
    private string _connectionString;

    public TimesheetRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = this._configuration.GetConnectionString("DefaultConnection");
    }


     public async Task<IEnumerable<Timesheet>> GetAll()
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from timesheets";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                DateTime totime = Convert.ToDateTime(reader["totime"].ToString());
                int employeeId = Int32.Parse(reader["empid"].ToString());
                int projectId = Int32.Parse(reader["projectid"].ToString());
                int taskId = Int32.Parse(reader["projectid"].ToString());

                Timesheet timesheet = new Timesheet
                {

                    TimesheetId = id,
                    Date = date,
                    FromTime = fromtime.ToShortTimeString(),
                    Totime = totime.ToShortTimeString(),
                    EmployeeId = employeeId,
                    ProjectId = projectId,
                    TaskId = taskId
                };

                timesheets.Add(timesheet);

            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }

        finally
        {
            connection.Close();
        }
        return timesheets;
    }

    public async Task<Timesheet> Get(int id)
    {

        Timesheet timesheet = new Timesheet();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {

            string query = "select * from timesheets where id =" + id;
            MySqlCommand command = new MySqlCommand(query, connection);
            Console.WriteLine(query);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int Id = Int32.Parse(reader["id"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                DateTime totime = Convert.ToDateTime(reader["totime"].ToString());
                int employeeId = Int32.Parse(reader["empid"].ToString());
                int projectId = Int32.Parse(reader["projectid"].ToString());
                int taskId = Int32.Parse(reader["projectid"].ToString());

                timesheet = new Timesheet
                {
                    TimesheetId = Id,
                    Date = date,
                    FromTime = fromtime.ToShortTimeString(),
                    Totime = totime.ToShortTimeString(),
                    EmployeeId = employeeId,
                    ProjectId = projectId,
                    TaskId = taskId
                };
            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return timesheet;
    }

    public async Task<bool> Insert(Timesheet timesheet)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            string query = $"Insert into timesheets(empid,projectid,taskid,date,fromtime,totime) values (@employeeId,@projectId,@taskid,@date,@fromtime,@totime)";
            MySqlCommand command = new MySqlCommand(query, con);

            command.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            command.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            command.Parameters.AddWithValue("@taskid", timesheet.TaskId);
            command.Parameters.AddWithValue("@date", timesheet.Date);
            command.Parameters.AddWithValue("@fromtime", timesheet.FromTime);
            command.Parameters.AddWithValue("@totime", timesheet.Totime);
            await con.OpenAsync();
            int rowsaffected = await command.ExecuteNonQueryAsync();
            if (rowsaffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            con.Close();
        }
        return status;
    }

    public async Task<bool> Update(Timesheet timesheet)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "UPDATE timesheets SET fromtime=@fromtime,totime=@totime ,empid=@employeeId ,projectid=@projectId ,taskid=@taskid,date=@date  WHERE id=@timesheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetId", timesheet.TimesheetId);
            command.Parameters.AddWithValue("@date", timesheet.Date);
            command.Parameters.AddWithValue("@fromtime", timesheet.FromTime);
            command.Parameters.AddWithValue("@totime", timesheet.Totime);
            command.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            command.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            command.Parameters.AddWithValue("@taskId", timesheet.TaskId);
            await connection.OpenAsync();
           int rowsaffected = await command.ExecuteNonQueryAsync();
            if (rowsaffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return status;
    }

    public async Task<bool> Delete(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "delete from timesheets where id=@timesheetid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheetid", id);
            await connection.OpenAsync();
            int rowsaffected = await command.ExecuteNonQueryAsync();
            if (rowsaffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return status;
    }

    public async Task<IEnumerable<TimesheetsDetail>> GetAllDetails(int empid,string theDate)
    {

        List<TimesheetsDetail> timesheetsDetail = new List<TimesheetsDetail>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "SELECT ts.id, e.firstname, e.lastname, p.title AS projecttitle, t.title AS tasktitle ,ts.date,ts.fromtime,ts.totime,ts.workingtime FROM Timesheets ts INNER JOIN employees e ON ts.empid = e.id INNER JOIN projects p ON ts.projectid = p.id INNER JOIN tasks t ON ts.taskid = t.id WHERE ts.empid=@empid && ts.date=@date ";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@empid",empid);
            command.Parameters.AddWithValue("@date",theDate);
            

            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                DateTime date = Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                DateTime totime = Convert.ToDateTime(reader["totime"].ToString());
                string empFirstName= reader["firstname"].ToString();
                string empLastName= reader["lastname"].ToString();
                string workingtime = reader["workingtime"].ToString();
                string projTitle=   reader["projecttitle"].ToString();
                string taskTitle= reader["tasktitle"].ToString();

                TimesheetsDetail timesheets = new TimesheetsDetail
                {
                    TimesheetId = id,
                    Date=date,
                    Fromtime = fromtime.ToShortTimeString(),
                    Totime = totime.ToShortTimeString(),
                    EmpFirstName=empFirstName,
                    EmpLastName=empLastName,
                    workingTime=workingtime,
                    ProjectTitle=projTitle,
                    TaskTitle=taskTitle
                };
                timesheetsDetail.Add(timesheets);
            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return timesheetsDetail;
    }

public  async Task <TimesheetsDetail> GetDetails(int timesheetId)
    {

    
      
     
        TimesheetsDetail  timesheetsDetail = new TimesheetsDetail();

        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "SELECT ts.id, e.firstname, e.lastname, p.title AS projecttitle, t.title AS tasktitle ,ts.date,ts.fromtime,ts.totime FROM Timesheets ts INNER JOIN employees e ON ts.empid = e.id INNER JOIN projects p ON ts.projectid = p.id INNER JOIN tasks t ON ts.taskid = t.id WHERE ts.id=@timesheetId";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@timesheetId",timesheetId);
            // command.Parameters.AddWithValue("@date",theDate);
            

            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                DateTime date = Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                DateTime totime = Convert.ToDateTime(reader["totime"].ToString());
                string empFirstName= reader["firstname"].ToString();
                string empLastName= reader["lastname"].ToString();
                string projTitle=   reader["projecttitle"].ToString();
                string taskTitle= reader["tasktitle"].ToString();

                 timesheetsDetail = new TimesheetsDetail
                {
                    TimesheetId = id,
                    Date=date,
                    Fromtime = fromtime.ToShortTimeString(),
                    Totime = totime.ToShortTimeString(),
                    EmpFirstName=empFirstName,
                    EmpLastName=empLastName,
                    ProjectTitle=projTitle,
                    TaskTitle=taskTitle
                };
     
            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return timesheetsDetail;
    }

public  async Task  <WorkingTime> GetTotalWorkingTime(int empid,string theDate)
    {
        WorkingTime totalTime = new WorkingTime();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "SELECT CONCAT(FLOOR(SUM(TIME_TO_SEC(workingtime)/3600)),':',LPAD(FLOOR((SUM(TIME_TO_SEC(workingtime) / 60)) % 60), 2, '0')) AS totalworkingHRS FROM timesheets WHERE  empid = @empid AND date = @date";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@empid",empid);
            command.Parameters.AddWithValue("@date",theDate);
            
            MySqlDataReader reader = command.ExecuteReader();
             if (await reader.ReadAsync())
            {
                string totalworkingtime = reader["totalworkingHRS"].ToString();
               totalTime = new WorkingTime
                {
                    totalWorkingHRS=totalworkingtime
                };
            
            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }
        return totalTime;
    }

    
   public async Task<IEnumerable<WeeklyData>> GetWeeklyData(int empid)
    {
         List<WeeklyData> totaldata = new List<WeeklyData>();
         MySqlConnection connection = new MySqlConnection();
         connection.ConnectionString = _connectionString;
        try
        {
            string query = "select week(date) AS weeknumber ,SUM((TIME_TO_SEC(workingtime)/3600)) AS totalworkingHRS  from timesheets where empid=@empid group by week(date) order by week(date)";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@empid",empid);
            
            
            MySqlDataReader reader = command.ExecuteReader();
             while (await reader.ReadAsync())
            {   // string weeklydata = reader["week"].ToString();
                string weeklydata = reader["weeknumber"].ToString();
                string totalworkingtime = reader["totalworkingHRS"].ToString();
            
               WeeklyData weekData = new WeeklyData
                {
                    Week=weeklydata,
                    TotalWorkingHRS=totalworkingtime
                    
                };
                totaldata.Add(weekData);      
         
            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }

        finally
        {
            connection.Close();
        }
        return totaldata;  
    }


}