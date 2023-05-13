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
                int id = Int32.Parse(reader["timesheet_id"].ToString());
                DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());

                string week1Monday = reader["week1_monday"].ToString();
                string week1Tuesday = reader["week1_tuesday"].ToString();
                string week1Wednesday = reader["week1_wednesday"].ToString();
                string week1Thursday= reader["week1_thursday"].ToString();
                string week1Friday = reader["week1_friday"].ToString();
                string week1Saturday = reader["week1_saturday"].ToString();
                string week1Sunday = reader["week1_sunday"].ToString();

                string week2Monday = reader["week2_monday"].ToString();
                string week2Tuesday = reader["week2_tuesday"].ToString();
                string week2Wednesday = reader["week2_wednesday"].ToString();
                string week2Thursday= reader["week2_thursday"].ToString();
                string week2Friday = reader["week2_friday"].ToString();
                string week2Saturday = reader["week2_saturday"].ToString();
                string week2Sunday = reader["week2_sunday"].ToString();

                string week3Monday = reader["week3_monday"].ToString();
                string week3Tuesday = reader["week3_tuesday"].ToString();
                string week3Wednesday = reader["week3_wednesday"].ToString();
                string week3Thursday= reader["week3_thursday"].ToString();
                string week3Friday = reader["week3_friday"].ToString();
                string week3Saturday = reader["week3_saturday"].ToString();
                string week3Sunday = reader["week3_sunday"].ToString();

                string week4Monday = reader["week4_monday"].ToString();
                string week4Tuesday = reader["week4_tuesday"].ToString();
                string week4Wednesday = reader["week4_wednesday"].ToString();
                string week4Thursday= reader["week4_thursday"].ToString();
                string week4Friday = reader["week4_friday"].ToString();
                string week4Saturday = reader["week4_saturday"].ToString();
                string week4Sunday = reader["week4_sunday"].ToString();
               
               int employeeId = Int32.Parse(reader["emp_id"].ToString());
               int projectId = Int32.Parse(reader["proj_id"].ToString());
               int payrollcycleId = Int32.Parse(reader["payroll_cycle_id"].ToString());
               string notes = reader["notes"].ToString();
                
                Timesheet timesheet = new Timesheet
                {

                TimesheetId= id,
                StartDate=startdate,
                Week1MonDay=week1Monday,
                Week1TuesDay=week1Tuesday,
                Week1WednesDay=week1Wednesday,
                Week1ThursDay=week1Thursday,
                Week1FriDay=week1Friday,
                Week1SaturDay=week1Saturday,
                Week1SunDay=week1Sunday,

                 Week2MonDay=week2Monday,
                Week2TuesDay=week2Tuesday,
                Week2WednesDay=week2Wednesday,
                Week2ThursDay=week2Thursday,
                Week2FriDay=week2Friday,
                Week2SaturDay=week2Saturday,
                Week2SunDay=week2Sunday,

                 Week3MonDay=week3Monday,
                Week3TuesDay=week1Tuesday,
                Week3WednesDay=week3Wednesday,
                Week3ThursDay=week3Thursday,
                Week3FriDay=week3Friday,
                Week3SaturDay=week3Saturday,
                Week3SunDay=week3Sunday,

                Week4MonDay=week4Monday,
                Week4TuesDay=week4Tuesday,
                Week4WednesDay=week4Wednesday,
                Week4ThursDay=week4Thursday,
                Week4FriDay=week4Friday,
                Week4SaturDay=week4Saturday,
                Week4SunDay=week4Sunday,
                
                EmployeeId =employeeId,
                ProjectId=projectId,
                PayRollCycleId=payrollcycleId,
                Notes=notes
         
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

    public Timesheet GetById(int id)
    {

        Timesheet timesheet = new Timesheet();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from timesheets where timesheet_Id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            Console.WriteLine(query);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {

                int timesheetId = Int32.Parse(reader["timesheet_id"].ToString());
                DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());

                string week1Monday = reader["week1_monday"].ToString();
                string week1Tuesday = reader["week1_tuesday"].ToString();
                string week1Wednesday = reader["week1_wednesday"].ToString();
                string week1Thursday= reader["week1_thursday"].ToString();
                string week1Friday = reader["week1_friday"].ToString();
                string week1Saturday = reader["week1_saturday"].ToString();
                string week1Sunday = reader["week1_sunday"].ToString();

                string week2Monday = reader["week2_monday"].ToString();
                string week2Tuesday = reader["week2_tuesday"].ToString();
                string week2Wednesday = reader["week2_wednesday"].ToString();
                string week2Thursday= reader["week2_thursday"].ToString();
                string week2Friday = reader["week2_friday"].ToString();
                string week2Saturday = reader["week2_saturday"].ToString();
                string week2Sunday = reader["week2_sunday"].ToString();

                string week3Monday = reader["week3_monday"].ToString();
                string week3Tuesday = reader["week3_tuesday"].ToString();
                string week3Wednesday = reader["week3_wednesday"].ToString();
                string week3Thursday= reader["week3_thursday"].ToString();
                string week3Friday = reader["week3_friday"].ToString();
                string week3Saturday = reader["week3_saturday"].ToString();
                string week3Sunday = reader["week3_sunday"].ToString();

                string week4Monday = reader["week4_monday"].ToString();
                string week4Tuesday = reader["week4_tuesday"].ToString();
                string week4Wednesday = reader["week4_wednesday"].ToString();
                string week4Thursday= reader["week4_thursday"].ToString();
                string week4Friday = reader["week4_friday"].ToString();
                string week4Saturday = reader["week4_saturday"].ToString();
                string week4Sunday = reader["week4_sunday"].ToString();
               
               int employeeId = Int32.Parse(reader["emp_id"].ToString());
               int projectId = Int32.Parse(reader["proj_id"].ToString());
               int payrollcycleId = Int32.Parse(reader["payroll_cycle_id"].ToString());
               string notes = reader["notes"].ToString();

                timesheet = new Timesheet()
                {
                TimesheetId= timesheetId,
                StartDate=startdate,
                Week1MonDay=week1Monday,
                Week1TuesDay=week1Tuesday,
                Week1WednesDay=week1Wednesday,
                Week1ThursDay=week1Thursday,
                Week1FriDay=week1Friday,
                Week1SaturDay=week1Saturday,
                Week1SunDay=week1Sunday,

                 Week2MonDay=week2Monday,
                Week2TuesDay=week2Tuesday,
                Week2WednesDay=week2Wednesday,
                Week2ThursDay=week2Thursday,
                Week2FriDay=week2Friday,
                Week2SaturDay=week2Saturday,
                Week2SunDay=week2Sunday,

                 Week3MonDay=week3Monday,
                Week3TuesDay=week1Tuesday,
                Week3WednesDay=week3Wednesday,
                Week3ThursDay=week3Thursday,
                Week3FriDay=week3Friday,
                Week3SaturDay=week3Saturday,
                Week3SunDay=week3Sunday,

                Week4MonDay=week4Monday,
                Week4TuesDay=week4Tuesday,
                Week4WednesDay=week4Wednesday,
                Week4ThursDay=week4Thursday,
                Week4FriDay=week4Friday,
                Week4SaturDay=week4Saturday,
                Week4SunDay=week4Sunday,
                
                EmployeeId =employeeId,
                ProjectId=projectId,
                PayRollCycleId=payrollcycleId,
                Notes=notes

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


    public bool InsertTimesheet(Timesheet timesheet)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = $"Insert into timesheets(start_date,week1_monday,week1_tuesday,week1_wednesday,week1_thursday,week1_friday,week1_saturday,week1_sunday,week2_monday,week2_tuesday,week2_wednesday,week2_thursday,week2_friday,week2_saturday,week2_sunday,week3_monday,week3_tuesday,week3_wednesday,week3_thursday,week3_friday,week3_saturday, week3_sunday,week4_monday,week4_tuesday,week4_wednesday,week4_thursday,week4_friday,week4_saturday,week4_sunday,emp_id,proj_id,payroll_cycle_id,notes) values"+"(@startdate,@week1monday, @week1tuesday,@week1wedneday,@week1thursday,@week1friday,@week1saturday,@week1sunday,@week2monday,@week2tuesday,@week2wedneday,@week2thursday,@week2friday,@week2saturday, @week2sunday,@week3monday,@week3tuesday,@week3wedneday,@week3thursday,@week3friday,@week3saturday,@week3sunday,@week4monday, @week4tuesday,@week4wedneday,@week4thursday,@week4friday,@week4saturday,@week4sunday,@employeeId,@projectId,@payrollcycleId,@notes)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@startdate", timesheet.StartDate);
            cmd.Parameters.AddWithValue("@week1monday", timesheet.Week1MonDay);
            cmd.Parameters.AddWithValue("@week1tuesday", timesheet.Week1TuesDay);
            cmd.Parameters.AddWithValue("@week1wedneday", timesheet.Week1WednesDay);
            cmd.Parameters.AddWithValue("@week1thursday", timesheet.Week1ThursDay);
            cmd.Parameters.AddWithValue("@week1friday", timesheet.Week1FriDay);
            cmd.Parameters.AddWithValue("@week1saturday", timesheet.Week1SaturDay);
            cmd.Parameters.AddWithValue("@week1sunday", timesheet.Week1SunDay);

            cmd.Parameters.AddWithValue("@week2monday", timesheet.Week2MonDay);
            cmd.Parameters.AddWithValue("@week2tuesday", timesheet.Week2TuesDay);
            cmd.Parameters.AddWithValue("@week2wedneday", timesheet.Week2WednesDay);
            cmd.Parameters.AddWithValue("@week2thursday", timesheet.Week2ThursDay);
            cmd.Parameters.AddWithValue("@week2friday", timesheet.Week2FriDay);
            cmd.Parameters.AddWithValue("@week2saturday", timesheet.Week2SaturDay);
            cmd.Parameters.AddWithValue("@week2sunday", timesheet.Week2SunDay);

            cmd.Parameters.AddWithValue("@week3monday", timesheet.Week3MonDay);
            cmd.Parameters.AddWithValue("@week3tuesday", timesheet.Week3TuesDay);
            cmd.Parameters.AddWithValue("@week3wedneday", timesheet.Week3WednesDay);
            cmd.Parameters.AddWithValue("@week3thursday", timesheet.Week3ThursDay);
            cmd.Parameters.AddWithValue("@week3friday", timesheet.Week3FriDay);
            cmd.Parameters.AddWithValue("@week3saturday", timesheet.Week3SaturDay);
            cmd.Parameters.AddWithValue("@week3sunday", timesheet.Week3SunDay);

            cmd.Parameters.AddWithValue("@week4monday", timesheet.Week4MonDay);
            cmd.Parameters.AddWithValue("@week4tuesday", timesheet.Week4TuesDay);
            cmd.Parameters.AddWithValue("@week4wedneday", timesheet.Week4WednesDay);
            cmd.Parameters.AddWithValue("@week4thursday", timesheet.Week4ThursDay);
            cmd.Parameters.AddWithValue("@week4friday", timesheet.Week4FriDay);
            cmd.Parameters.AddWithValue("@week4saturday", timesheet.Week4SaturDay);
            cmd.Parameters.AddWithValue("@week4sunday", timesheet.Week4SunDay);

            cmd.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            cmd.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            cmd.Parameters.AddWithValue("@payrollcycleId", timesheet.PayRollCycleId);
            cmd.Parameters.AddWithValue("@notes", timesheet.Notes);
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

    public bool UpdateTimesheet(Timesheet timesheet)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE timesheets SET start_date=@startdate,week1_monday=@week1monday ,week1_tuesday=@week1tuesday,week1_wednesday=@week1wedneday ,week1_thursday=@week1thursday ,week1_friday=@week1friday ,week1_saturday=@week1saturday, week1_sunday=@week1sunday ,week2_monday=@week2monday ,week2_tuesday=@week2tuesday,week2_wednesday=@week2wedneday ,week2_thursday=@week2thursday ,week2_friday=@week2friday ,week2_saturday=@week2saturday, week2_sunday=@week2sunday,week3_monday=@week3monday ,week3_tuesday=@week3tuesday,week3_wednesday=@week3wedneday ,week3_thursday=@week3thursday ,week3_friday=@week3friday ,week3_saturday=@week3saturday, week3_sunday=@week3sunday,week4_monday=@week4monday ,week4_tuesday=@week4tuesday,week4_wednesday=@week4wedneday ,week4_thursday=@week4thursday ,week4_friday=@week4friday ,week4_saturday=@week4saturday, week4_sunday=@week4sunday,emp_id=@employeeId ,proj_id=@projectId ,payroll_cycle_id=@payrollcycleId ,notes =@notes  WHERE timesheet_id=@timesheetId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
              cmd.Parameters.AddWithValue("@timesheetId", timesheet.TimesheetId);
                cmd.Parameters.AddWithValue("@startdate", timesheet.StartDate);
            cmd.Parameters.AddWithValue("@week1monday", timesheet.Week1MonDay);
            cmd.Parameters.AddWithValue("@week1tuesday", timesheet.Week1TuesDay);
            cmd.Parameters.AddWithValue("@week1wedneday", timesheet.Week1WednesDay);
            cmd.Parameters.AddWithValue("@week1thursday", timesheet.Week1ThursDay);
            cmd.Parameters.AddWithValue("@week1friday", timesheet.Week1FriDay);
            cmd.Parameters.AddWithValue("@week1saturday", timesheet.Week1SaturDay);
            cmd.Parameters.AddWithValue("@week1sunday", timesheet.Week1SunDay);

            cmd.Parameters.AddWithValue("@week2monday", timesheet.Week2MonDay);
            cmd.Parameters.AddWithValue("@week2tuesday", timesheet.Week2TuesDay);
            cmd.Parameters.AddWithValue("@week2wedneday", timesheet.Week2WednesDay);
            cmd.Parameters.AddWithValue("@week2thursday", timesheet.Week2ThursDay);
            cmd.Parameters.AddWithValue("@week2friday", timesheet.Week2FriDay);
            cmd.Parameters.AddWithValue("@week2saturday", timesheet.Week2SaturDay);
            cmd.Parameters.AddWithValue("@week2sunday", timesheet.Week2SunDay);

            cmd.Parameters.AddWithValue("@week3monday", timesheet.Week3MonDay);
            cmd.Parameters.AddWithValue("@week3tuesday", timesheet.Week3TuesDay);
            cmd.Parameters.AddWithValue("@week3wedneday", timesheet.Week3WednesDay);
            cmd.Parameters.AddWithValue("@week3thursday", timesheet.Week3ThursDay);
            cmd.Parameters.AddWithValue("@week3friday", timesheet.Week3FriDay);
            cmd.Parameters.AddWithValue("@week3saturday", timesheet.Week3SaturDay);
            cmd.Parameters.AddWithValue("@week3sunday", timesheet.Week3SunDay);

            cmd.Parameters.AddWithValue("@week4monday", timesheet.Week4MonDay);
            cmd.Parameters.AddWithValue("@week4tuesday", timesheet.Week4TuesDay);
            cmd.Parameters.AddWithValue("@week4wedneday", timesheet.Week4WednesDay);
            cmd.Parameters.AddWithValue("@week4thursday", timesheet.Week4ThursDay);
            cmd.Parameters.AddWithValue("@week4friday", timesheet.Week4FriDay);
            cmd.Parameters.AddWithValue("@week4saturday", timesheet.Week4SaturDay);
            cmd.Parameters.AddWithValue("@week4sunday", timesheet.Week4SunDay);

            cmd.Parameters.AddWithValue("@employeeId", timesheet.EmployeeId);
            cmd.Parameters.AddWithValue("@projectId", timesheet.ProjectId);
            cmd.Parameters.AddWithValue("@payrollcycleId", timesheet.PayRollCycleId);
            cmd.Parameters.AddWithValue("@notes", timesheet.Notes);
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


    public bool DeleteTimesheet(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "delete from timesheets where timesheet_id=@timesheet_id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@timesheet_id", id);
            connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
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

    
}