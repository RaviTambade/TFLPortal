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




}