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


    public async Task<IEnumerable<Timerecord>> GetAll()
    {
        List<Timerecord> timerecords = new List<Timerecord>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecords";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                string totalTime = reader["totaltime"].ToString();

                Timerecord timerecord = new Timerecord
                {
                    TimeRecordId=id,
                    EmpId=empId,
                    Date=date.ToShortDateString(),
                    TotalTime=totalTime
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


       public async Task<Timerecord> Get(int id)
    {
        Timerecord timerecord = new Timerecord();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecords where id ="+ id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader =  cmd.ExecuteReader();
            if(await reader.ReadAsync())
            {
                int timerecordid = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                string totalTime = reader["totaltime"].ToString();

                timerecord = new Timerecord
                {
                    TimeRecordId=timerecordid,
                    EmpId=empId,
                    Date=date.ToShortDateString(),
                    TotalTime=totalTime
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


  public async Task<bool> Insert(Timerecord timerecord)
      {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = $"Insert into timerecords(date,totaltime,empid) values (@date,@totaltime,@empid)";
            MySqlCommand cmd = new MySqlCommand(query, con);

            cmd.Parameters.AddWithValue("@date", timerecord.Date);
            cmd.Parameters.AddWithValue("@totaltime", timerecord.TotalTime);
            cmd.Parameters.AddWithValue("@empid", timerecord.EmpId);
            await con.OpenAsync();
            int rowsaffected = await cmd.ExecuteNonQueryAsync();
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

     public async Task<bool> Update(Timerecord timerecord)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE timerecords SET date=@date,totaltime=@totaltime ,empid=@employeeId  WHERE id=@timerecordId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timerecordId", timerecord.TimeRecordId);
            cmd.Parameters.AddWithValue("@date", timerecord.Date);
            cmd.Parameters.AddWithValue("@totaltime", timerecord.Date);
            cmd.Parameters.AddWithValue("@employeeId", timerecord.EmpId);
            await connection.OpenAsync();
            int rowsaffected = await cmd.ExecuteNonQueryAsync();
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
        connection.ConnectionString = _conString;
        try
        {
            string query = "delete from timerecords where id=@timerecordid";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@timerecordid", id);
            await connection.OpenAsync();
            int rowsaffected = await cmd.ExecuteNonQueryAsync();
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

    public async Task<IEnumerable<Timerecord>> GetAll(int empid)
    {
        List<Timerecord> timerecords = new List<Timerecord>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from timerecords where empid="+empid;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                int empId=Int32.Parse(reader["empid"].ToString());
                DateTime date=Convert.ToDateTime(reader["date"].ToString());
                string totalTime =reader["totaltime"].ToString();

                Timerecord timerecord = new Timerecord
                {
                    TimeRecordId=id,
                    EmpId=empId,
                    Date=date.ToShortDateString(),
                    TotalTime=totalTime
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

    public  async Task<TotalWorkingTime>  GetTotalWorkingTime(int empid, string fromDate, string toDate)
     {
        TotalWorkingTime totalWT = new TotalWorkingTime();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "SELECT CONCAT(FLOOR(SUM(TIME_TO_SEC(totaltime)/3600)),':',LPAD(FLOOR((SUM(TIME_TO_SEC(totaltime)/ 60)) % 60), 2,'0')) AS totalworkingHRS FROM timerecords WHERE  date >=@fromDate AND date <=@toDate && empid="+empid;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            await connection.OpenAsync();;
            cmd.Parameters.AddWithValue("@empid",empid);
            cmd.Parameters.AddWithValue("@fromDate",fromDate);
            cmd.Parameters.AddWithValue("@toDate",toDate);
            MySqlDataReader reader = cmd.ExecuteReader();
            if (await reader.ReadAsync())
            {
                string totalworkingtime = reader["totalworkingHRS"].ToString();
               totalWT = new TotalWorkingTime
                {
                    TotalWorkingHRS=totalworkingtime
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
        return totalWT;
    }
// public async Task<IEnumerable<Timerecord>> GetAllDetails(int empid,string theDate)
//     {

//        Timerecord timerecord = new Timerecord();
//         MySqlConnection connection = new MySqlConnection();
//         connection.ConnectionString = _conString;
//         try
//         {
//            string query = "SELECT ts.id, e.firstname, e.lastname, p.title AS projecttitle, t.title AS tasktitle ,ts.date,ts.fromtime,ts.totime,ts.workingtime FROM timerecords ts INNER JOIN employees e ON ts.empid = e.id INNER JOIN projects p ON ts.projectid = p.id INNER JOIN tasks t ON ts.taskid = t.id WHERE ts.empid=@empid && ts.date=@date ";
//             MySqlCommand cmd = new MySqlCommand(query, connection);
//             await connection.OpenAsync();

//             MySqlDataReader reader =  cmd.ExecuteReader();
//             if(await reader.ReadAsync())
//             {
//                 int timerecordid = Int32.Parse(reader["id"].ToString());
//                 int empId=Int32.Parse(reader["empid"].ToString());
//                 DateTime date=Convert.ToDateTime(reader["date"].ToString());
//                 string totalTime = reader["totaltime"].ToString();

//                 timerecord = new Timerecord
//                 {
//                     TimeRecordId=timerecordid,
//                     EmpId=empId,
//                     Date=date.ToShortDateString(),
//                     TotalTime=totalTime
//                 };

//             }
//             reader.Close();
//         }
//         catch (Exception ee)
//         {
//             throw ee;
//         }

//         finally
//         {
//             connection.Close();
//         }
//         return timerecord;
//     }





   
}