using PMS.Models;
using PMS.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace PMS.Repositories;

public class TaskRepository : ITaskRepository
{


    private IConfiguration _configuration;
    private string _conString;

    public TaskRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }

    

    public List<Tasks> GetAll()
    {
        List<Tasks> tasks = new List<Tasks>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from task";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int taskid = Int32.Parse(reader["task_id"].ToString());
                 int projectid = Int32.Parse(reader["proj_id"].ToString());
                string taskName = reader["task_name"].ToString();
                string description = reader["description"].ToString();
                DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());
                DateTime enddate = Convert.ToDateTime(reader["end_date"].ToString());

                Tasks task = new Tasks
                {
                    TaskId = taskid,
                    ProjectId = projectid,
                    TaskName = taskName,
                    Description = description,
                    StartDate=startdate,
                    EndDate=enddate
                };

                tasks.Add(task);

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


        return tasks;
    }

    public Tasks GetById(int id)
    {

        Tasks task = new Tasks();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from task where task_id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {

                 int taskid = Int32.Parse(reader["task_id"].ToString());
                 int projectid = Int32.Parse(reader["proj_id"].ToString());
                string taskName = reader["task_name"].ToString();
                string description = reader["description"].ToString();
                DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());
                DateTime enddate = Convert.ToDateTime(reader["end_date"].ToString());
                
              
                   task = new Tasks()
                {
                    TaskId = taskid,
                    ProjectId = projectid,
                    TaskName = taskName,
                    Description = description,
                    StartDate=startdate,
                    EndDate=enddate
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
    
        return task;
    }



    public bool Insert(Tasks tasks)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = "Insert into task(task_id,proj_id,task_name,description,start_date,end_date) values (@taskid,@projectid,@taskname,@decription,@startdate,@enddate)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@taskid", tasks.TaskId);
            cmd.Parameters.AddWithValue("@projectid", tasks.ProjectId);
            cmd.Parameters.AddWithValue("@taskname", tasks.TaskName);
            cmd.Parameters.AddWithValue("@decription", tasks.Description);
            cmd.Parameters.AddWithValue("@startdate", tasks.StartDate);
            cmd.Parameters.AddWithValue("@enddate", tasks.EndDate);
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

    public bool Update(Tasks tasks)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE task SET proj_id=@projectid,task_name=@taskname,description =@description,start_date=@startdate,end_date=@enddate WHERE task_id=@taskId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@taskId", tasks.TaskId);
            cmd.Parameters.AddWithValue("@projectid", tasks.ProjectId);
            cmd.Parameters.AddWithValue("@taskname", tasks.TaskName);
            cmd.Parameters.AddWithValue("@description", tasks.Description);
            cmd.Parameters.AddWithValue("@startdate", tasks.StartDate);
            cmd.Parameters.AddWithValue("@enddate", tasks.EndDate);
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

            string query = "delete from task where task_id=@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", id);
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