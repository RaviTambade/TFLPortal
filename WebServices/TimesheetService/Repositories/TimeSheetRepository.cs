using PMS.Models;
using PMS.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace PMS.Repositories;

public class TimesheetRepository : ITimeSheetRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public TimesheetRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }





    public List<Timesheet> GetAll()
    {
        List<Timesheet> timesheets = new List<Timesheet>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timesheets";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                DateTime starttime = Convert.ToDateTime(reader["starttime"].ToString());
                DateTime endtime = Convert.ToDateTime(reader["endtime"].ToString());
      
               int employeeId = Int32.Parse(reader["empid"].ToString());
               int projectId = Int32.Parse(reader["projectid"].ToString());
               int taskId = Int32.Parse(reader["projectid"].ToString());
               
                Timesheet timesheet = new Timesheet
                {

                TimesheetId= id,
                Starttime=starttime,
                Endtime=endtime,
                EmployeeId =employeeId,
                ProjectId=projectId,
                TaskId=taskId
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




    public Timesheet Get(int id)
    {

        Timesheet timesheet = new Timesheet();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from timesheets where id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            Console.WriteLine(query);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
            
                int timesheetid = Int32.Parse(reader["id"].ToString());
                DateTime starttime = Convert.ToDateTime(reader["starttime"].ToString());
                DateTime endtime = Convert.ToDateTime(reader["endtime"].ToString());
      
               int employeeId = Int32.Parse(reader["empid"].ToString());
               int projectId = Int32.Parse(reader["projectid"].ToString());
               int taskId = Int32.Parse(reader["projectid"].ToString());
               
                 timesheet = new Timesheet
                {

                TimesheetId= timesheetid,
                Starttime=starttime,
                Endtime=endtime,
                EmployeeId =employeeId,
                ProjectId=projectId,
                TaskId=taskId
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








  public bool Insert(Timesheet timesheet)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = $"Insert into timesheets(empid,projectid,taskid,starttime,endtime) values"+"(@employeeId,@projectId,@taskid,@starttime,@endtime)";
            MySqlCommand cmd = new MySqlCommand(query, con);
           
            cmd.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            cmd.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            cmd.Parameters.AddWithValue("@taskid", timesheet.TaskId);
            cmd.Parameters.AddWithValue("@starttime", timesheet.Starttime);
            cmd.Parameters.AddWithValue("@endtime", timesheet.Endtime);
            con.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
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




    public bool Update(Timesheet timesheet)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE timesheets SET starttime=@starttime,endtime=@endtime ,empid=@employeeId ,projectid=@projectId ,taskid=@taskid  WHERE id=@timesheetId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timesheetId", timesheet.TimesheetId);
            cmd.Parameters.AddWithValue("@starttime", timesheet.Starttime);
            cmd.Parameters.AddWithValue("@endtime", timesheet.Endtime);
            cmd.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            cmd.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            cmd.Parameters.AddWithValue("@taskId", timesheet.TaskId);
            connection.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
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


    public bool Delete(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "delete from timesheets where id=@timesheetid";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timesheetid", id);
            connection.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
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







    // public List<Timesheet> GetAll()
    // {
    //     List<Timesheet> timesheets = new List<Timesheet>();
    //     MySqlConnection connection = new MySqlConnection();
    //     connection.ConnectionString = _conString;
    //     try
    //     {
    //         string query = "select * from timesheets";
    //         MySqlCommand cmd = new MySqlCommand(query, connection);
    //         connection.Open();

    //         MySqlDataReader reader = cmd.ExecuteReader();
    //         while (reader.Read())
    //         {
    //             int id = Int32.Parse(reader["id"].ToString());
    //             DateTime startdate = Convert.ToDateTime(reader["startdate"].ToString());

    //             string week1Monday = reader["week1monday"].ToString();
    //             string week1Tuesday = reader["week1tuesday"].ToString();
    //             string week1Wednesday = reader["week1wednesday"].ToString();
    //             string week1Thursday= reader["week1thursday"].ToString();
    //             string week1Friday = reader["week1friday"].ToString();
    //             string week1Saturday = reader["week1saturday"].ToString();
    //             string week1Sunday = reader["week1sunday"].ToString();

    //             string week2Monday = reader["week2monday"].ToString();
    //             string week2Tuesday = reader["week2tuesday"].ToString();
    //             string week2Wednesday = reader["week2wednesday"].ToString();
    //             string week2Thursday= reader["week2thursday"].ToString();
    //             string week2Friday = reader["week2friday"].ToString();
    //             string week2Saturday = reader["week2saturday"].ToString();
    //             string week2Sunday = reader["week2sunday"].ToString();

    //             string week3Monday = reader["week3monday"].ToString();
    //             string week3Tuesday = reader["week3tuesday"].ToString();
    //             string week3Wednesday = reader["week3wednesday"].ToString();
    //             string week3Thursday= reader["week3thursday"].ToString();
    //             string week3Friday = reader["week3friday"].ToString();
    //             string week3Saturday = reader["week3saturday"].ToString();
    //             string week3Sunday = reader["week3sunday"].ToString();

    //             string week4Monday = reader["week4monday"].ToString();
    //             string week4Tuesday = reader["week4tuesday"].ToString();
    //             string week4Wednesday = reader["week4wednesday"].ToString();
    //             string week4Thursday= reader["week4thursday"].ToString();
    //             string week4Friday = reader["week4friday"].ToString();
    //             string week4Saturday = reader["week4saturday"].ToString();
    //             string week4Sunday = reader["week4sunday"].ToString();
               
    //            int employeeId = Int32.Parse(reader["empid"].ToString());
    //            int projectId = Int32.Parse(reader["projectid"].ToString());
    //            int payrollcycleId = Int32.Parse(reader["payrollcycleid"].ToString());
    //            string notes = reader["notes"].ToString();
                
    //             Timesheet timesheet = new Timesheet
    //             {

    //             TimesheetId= id,
    //             StartDate=startdate,
    //             Week1MonDay=week1Monday,
    //             Week1TuesDay=week1Tuesday,
    //             Week1WednesDay=week1Wednesday,
    //             Week1ThursDay=week1Thursday,
    //             Week1FriDay=week1Friday,
    //             Week1SaturDay=week1Saturday,
    //             Week1SunDay=week1Sunday,

    //              Week2MonDay=week2Monday,
    //             Week2TuesDay=week2Tuesday,
    //             Week2WednesDay=week2Wednesday,
    //             Week2ThursDay=week2Thursday,
    //             Week2FriDay=week2Friday,
    //             Week2SaturDay=week2Saturday,
    //             Week2SunDay=week2Sunday,

    //              Week3MonDay=week3Monday,
    //             Week3TuesDay=week1Tuesday,
    //             Week3WednesDay=week3Wednesday,
    //             Week3ThursDay=week3Thursday,
    //             Week3FriDay=week3Friday,
    //             Week3SaturDay=week3Saturday,
    //             Week3SunDay=week3Sunday,

    //             Week4MonDay=week4Monday,
    //             Week4TuesDay=week4Tuesday,
    //             Week4WednesDay=week4Wednesday,
    //             Week4ThursDay=week4Thursday,
    //             Week4FriDay=week4Friday,
    //             Week4SaturDay=week4Saturday,
    //             Week4SunDay=week4Sunday,
                
    //             EmployeeId =employeeId,
    //             ProjectId=projectId,
    //             PayRollCycleId=payrollcycleId,
    //             Notes=notes
         
    //             };

    //             timesheets.Add(timesheet);

    //         }
    //         reader.Close();
    //     }
    //     catch (Exception ee)
    //     {
    //         throw ee;
    //     }

    //     finally
    //     {
    //         connection.Close();
    //     }


    //     return timesheets;
    // }







    // public Timesheet Get(int id)
    // {

    //     Timesheet timesheet = new Timesheet();
    //     MySqlConnection connection = new MySqlConnection();
    //     connection.ConnectionString = _conString;
    //     try
    //     {

    //         string query = "select * from timesheets where id =" + id;
    //         MySqlCommand cmd = new MySqlCommand(query, connection);
    //         Console.WriteLine(query);
    //         connection.Open();
    //         MySqlDataReader reader = cmd.ExecuteReader();
    //         if (reader.Read())
    //         {
    //             int timesheetid = Int32.Parse(reader["id"].ToString());
    //             DateTime startdate = Convert.ToDateTime(reader["startdate"].ToString());
    //             string week1Monday = reader["week1monday"].ToString();
    //             string week1Tuesday = reader["week1tuesday"].ToString();
    //             string week1Wednesday = reader["week1wednesday"].ToString();
    //             string week1Thursday= reader["week1thursday"].ToString();
    //             string week1Friday = reader["week1friday"].ToString();
    //             string week1Saturday = reader["week1saturday"].ToString();
    //             string week1Sunday = reader["week1sunday"].ToString();

    //             string week2Monday = reader["week2monday"].ToString();
    //             string week2Tuesday = reader["week2tuesday"].ToString();
    //             string week2Wednesday = reader["week2wednesday"].ToString();
    //             string week2Thursday= reader["week2thursday"].ToString();
    //             string week2Friday = reader["week2friday"].ToString();
    //             string week2Saturday = reader["week2saturday"].ToString();
    //             string week2Sunday = reader["week2sunday"].ToString();

    //             string week3Monday = reader["week3monday"].ToString();
    //             string week3Tuesday = reader["week3tuesday"].ToString();
    //             string week3Wednesday = reader["week3wednesday"].ToString();
    //             string week3Thursday= reader["week3thursday"].ToString();
    //             string week3Friday = reader["week3friday"].ToString();
    //             string week3Saturday = reader["week3saturday"].ToString();
    //             string week3Sunday = reader["week3sunday"].ToString();

    //             string week4Monday = reader["week4monday"].ToString();
    //             string week4Tuesday = reader["week4tuesday"].ToString();
    //             string week4Wednesday = reader["week4wednesday"].ToString();
    //             string week4Thursday= reader["week4thursday"].ToString();
    //             string week4Friday = reader["week4friday"].ToString();
    //             string week4Saturday = reader["week4saturday"].ToString();
    //             string week4Sunday = reader["week4sunday"].ToString();
               
    //            int employeeId = Int32.Parse(reader["empid"].ToString());
    //            int projectId = Int32.Parse(reader["projectid"].ToString());
    //            int payrollcycleId = Int32.Parse(reader["payrollcycleid"].ToString());
    //            string notes = reader["notes"].ToString();
    //             timesheet = new Timesheet()
    //             {
    //             TimesheetId= timesheetid,
    //             StartDate=startdate,
    //             Week1MonDay=week1Monday,
    //             Week1TuesDay=week1Tuesday,
    //             Week1WednesDay=week1Wednesday,
    //             Week1ThursDay=week1Thursday,
    //             Week1FriDay=week1Friday,
    //             Week1SaturDay=week1Saturday,
    //             Week1SunDay=week1Sunday,

    //              Week2MonDay=week2Monday,
    //             Week2TuesDay=week2Tuesday,
    //             Week2WednesDay=week2Wednesday,
    //             Week2ThursDay=week2Thursday,
    //             Week2FriDay=week2Friday,
    //             Week2SaturDay=week2Saturday,
    //             Week2SunDay=week2Sunday,

    //             Week3MonDay=week3Monday,
    //             Week3TuesDay=week1Tuesday,
    //             Week3WednesDay=week3Wednesday,
    //             Week3ThursDay=week3Thursday,
    //             Week3FriDay=week3Friday,
    //             Week3SaturDay=week3Saturday,
    //             Week3SunDay=week3Sunday,

    //             Week4MonDay=week4Monday,
    //             Week4TuesDay=week4Tuesday,
    //             Week4WednesDay=week4Wednesday,
    //             Week4ThursDay=week4Thursday,
    //             Week4FriDay=week4Friday,
    //             Week4SaturDay=week4Saturday,
    //             Week4SunDay=week4Sunday,
                
    //             EmployeeId =employeeId,
    //             ProjectId=projectId,
    //             PayRollCycleId=payrollcycleId,
    //             Notes=notes

    //             };
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception ee)
    //     {

    //         throw ee;

    //     }

    //     finally
    //     {
    //         connection.Close();
    //     }

    //     return timesheet;
    // }
















    // public bool Insert(Timesheet timesheet)
    // {

    //     bool status = false;
    //     MySqlConnection con = new MySqlConnection();
    //     con.ConnectionString = _conString;

    //     try
    //     {
    //         string query = $"Insert into timesheets(startdate,week1monday,week1tuesday,week1wednesday,week1thursday,week1friday,week1saturday,week1sunday,week2monday,week2tuesday,week2wednesday,week2thursday,week2friday,week2saturday,week2sunday,week3monday,week3tuesday,week3wednesday,week3thursday,week3friday,week3saturday, week3sunday,week4monday,week4tuesday,week4wednesday,week4thursday,week4friday,week4saturday,week4sunday,empid,projectid,payrollcycleid,notes) values"+"(@startdate,@week1monday, @week1tuesday,@week1wedneday,@week1thursday,@week1friday,@week1saturday,@week1sunday,@week2monday,@week2tuesday,@week2wedneday,@week2thursday,@week2friday,@week2saturday, @week2sunday,@week3monday,@week3tuesday,@week3wedneday,@week3thursday,@week3friday,@week3saturday,@week3sunday,@week4monday, @week4tuesday,@week4wedneday,@week4thursday,@week4friday,@week4saturday,@week4sunday,@employeeId,@projectId,@payrollcycleId,@notes)";
    //         MySqlCommand cmd = new MySqlCommand(query, con);
    //         cmd.Parameters.AddWithValue("@startdate", timesheet.StartDate);
    //         cmd.Parameters.AddWithValue("@week1monday", timesheet.Week1MonDay);
    //         cmd.Parameters.AddWithValue("@week1tuesday", timesheet.Week1TuesDay);
    //         cmd.Parameters.AddWithValue("@week1wedneday", timesheet.Week1WednesDay);
    //         cmd.Parameters.AddWithValue("@week1thursday", timesheet.Week1ThursDay);
    //         cmd.Parameters.AddWithValue("@week1friday", timesheet.Week1FriDay);
    //         cmd.Parameters.AddWithValue("@week1saturday", timesheet.Week1SaturDay);
    //         cmd.Parameters.AddWithValue("@week1sunday", timesheet.Week1SunDay);

    //         cmd.Parameters.AddWithValue("@week2monday", timesheet.Week2MonDay);
    //         cmd.Parameters.AddWithValue("@week2tuesday", timesheet.Week2TuesDay);
    //         cmd.Parameters.AddWithValue("@week2wedneday", timesheet.Week2WednesDay);
    //         cmd.Parameters.AddWithValue("@week2thursday", timesheet.Week2ThursDay);
    //         cmd.Parameters.AddWithValue("@week2friday", timesheet.Week2FriDay);
    //         cmd.Parameters.AddWithValue("@week2saturday", timesheet.Week2SaturDay);
    //         cmd.Parameters.AddWithValue("@week2sunday", timesheet.Week2SunDay);

    //         cmd.Parameters.AddWithValue("@week3monday", timesheet.Week3MonDay);
    //         cmd.Parameters.AddWithValue("@week3tuesday", timesheet.Week3TuesDay);
    //         cmd.Parameters.AddWithValue("@week3wedneday", timesheet.Week3WednesDay);
    //         cmd.Parameters.AddWithValue("@week3thursday", timesheet.Week3ThursDay);
    //         cmd.Parameters.AddWithValue("@week3friday", timesheet.Week3FriDay);
    //         cmd.Parameters.AddWithValue("@week3saturday", timesheet.Week3SaturDay);
    //         cmd.Parameters.AddWithValue("@week3sunday", timesheet.Week3SunDay);

    //         cmd.Parameters.AddWithValue("@week4monday", timesheet.Week4MonDay);
    //         cmd.Parameters.AddWithValue("@week4tuesday", timesheet.Week4TuesDay);
    //         cmd.Parameters.AddWithValue("@week4wedneday", timesheet.Week4WednesDay);
    //         cmd.Parameters.AddWithValue("@week4thursday", timesheet.Week4ThursDay);
    //         cmd.Parameters.AddWithValue("@week4friday", timesheet.Week4FriDay);
    //         cmd.Parameters.AddWithValue("@week4saturday", timesheet.Week4SaturDay);
    //         cmd.Parameters.AddWithValue("@week4sunday", timesheet.Week4SunDay);

    //         cmd.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
    //         cmd.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
    //         cmd.Parameters.AddWithValue("@payrollcycleId", timesheet.PayRollCycleId);
    //         cmd.Parameters.AddWithValue("@notes", timesheet.Notes);
    //         con.Open();
    //         int rowsaffected = cmd.ExecuteNonQuery();
    //         if (rowsaffected > 0)
    //         {

    //             status = true;
    //         }
    //     }

    //     catch (Exception ee)
    //     {

    //         throw ee;
    //     }

    //     finally
    //     {

    //         con.Close();
    //     }

    //     return status;

    // }
























    
}