using PMS.Models;
using PMS.Repositories.Interfaces;
using MySql.Data.MySqlClient;


namespace PMS.Repositories;

public class TimeRecordRepository : ITimeRecordRepository
{

   private IConfiguration _configuration;
   private string _conString;

   public TimeRecordRepository(IConfiguration configuration){
    _configuration=configuration;
    _conString= this._configuration.GetConnectionString("DefaultConnection");
   }


    public List<Timerecord> GetAll()
    {
        List<Timerecord> timerecords = new List<Timerecord>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecord";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                DateTime totalTime = Convert.ToDateTime(reader["totaltime"].ToString());

                Timerecord timerecord = new Timerecord
                {
                    TimeRecordId=id,
                    EmpId=empId,
                    Date=date,
                    TotalTime=totalTime.ToShortTimeString()
                };

                timerecords.Add(timerecord);

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
        return timerecords;
    }


       public Timerecord Get(int id)
    {
        Timerecord timerecord = new Timerecord();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecord where id ="+ id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            if(reader.Read())
            {
                int timerecordid = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                DateTime totalTime = Convert.ToDateTime(reader["totaltime"].ToString());

                timerecord = new Timerecord
                {
                    TimeRecordId=timerecordid,
                    EmpId=empId,
                    Date=date,
                    TotalTime=totalTime.ToShortTimeString()
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
        return timerecord;
    }


  public bool Insert(Timerecord timerecord)
      {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = $"Insert into timerecord(date,totaltime,empid) values (@date,@totaltime,@empid)";
            MySqlCommand cmd = new MySqlCommand(query, con);

            cmd.Parameters.AddWithValue("@date", timerecord.Date);
            cmd.Parameters.AddWithValue("@totaltime", timerecord.TotalTime);
            cmd.Parameters.AddWithValue("@taskid", timerecord.EmpId);
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

     public bool Update(Timerecord timerecord)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE timerecord SET date=@date,totaltime=@totaltime ,empid=@employeeId   WHERE id=@timerecordId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timerecordId", timerecord.TimeRecordId);
            cmd.Parameters.AddWithValue("@date", timerecord.Date);
            cmd.Parameters.AddWithValue("@totaltime", timerecord.Date);
            cmd.Parameters.AddWithValue("@employeeId", timerecord.EmpId);
      
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
            string query = "delete from timerecord where id=@timerecordid";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timerecordid", id);
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

    public List<Timerecord> GetAll(int empid)
    {
        List<Timerecord> timerecords = new List<Timerecord>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecord where empid="+empid;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                DateTime totalTime = Convert.ToDateTime(reader["totaltime"].ToString());

                Timerecord timerecord = new Timerecord
                {
                    TimeRecordId=id,
                    EmpId=empId,
                    Date=date,
                    TotalTime=totalTime.ToShortTimeString()
                };
                timerecords.Add(timerecord);
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
        return timerecords;
    }

}