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
            string query = "select * from tasks";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int taskid = Int32.Parse(reader["id"].ToString());
                 int projectid = Int32.Parse(reader["projectid"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime date = Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                DateTime totime = Convert.ToDateTime(reader["totime"].ToString());

                Tasks task = new Tasks
                {
                    Id = taskid,
                    ProjectId = projectid,
                    Title = title,
                    Description = description,
                    Date=date.ToShortDateString(),
                    FromTime=fromtime.ToShortTimeString(),
                    ToTime=totime.ToShortTimeString()
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
            string query = "select * from tasks where id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {

                 int taskid = Int32.Parse(reader["id"].ToString());
                 int projectid = Int32.Parse(reader["projectid"].ToString());
                string title = reader["title"].ToString();
                string description = reader["description"].ToString();
                DateTime date = Convert.ToDateTime(reader["date"].ToString());
                DateTime fromtime = Convert.ToDateTime(reader["fromtime"].ToString());
                 DateTime totime = Convert.ToDateTime(reader["totime"].ToString());
                
              
                   task = new Tasks()
                {
                    Id = taskid,
                    ProjectId = projectid,
                    Title = title,
                    Description = description,
                    Date=date.ToShortDateString(),
                    FromTime=fromtime.ToShortTimeString(),
                    ToTime=totime.ToShortTimeString()
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
            string query = "Insert into tasks(id,projectid,title,description,date,fromtime,totime) values (@taskid,@projectid,@title,@decription,@date,@fromtime,@totime)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@taskid", tasks.Id);
            cmd.Parameters.AddWithValue("@projectid", tasks.ProjectId);
            cmd.Parameters.AddWithValue("@title", tasks.Title);
            cmd.Parameters.AddWithValue("@decription", tasks.Description);
            cmd.Parameters.AddWithValue("@date", tasks.Date);
            cmd.Parameters.AddWithValue("@fromtime", tasks.FromTime);
            cmd.Parameters.AddWithValue("@totime", tasks.ToTime);
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

    public bool Update(Tasks task)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE tasks SET title =@title ,description=@description ,date=@date,fromtime=@fromtime,totime=@totime  WHERE id=@taskId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@taskId", task.Id);
            cmd.Parameters.AddWithValue("@projectid", task.ProjectId);
            cmd.Parameters.AddWithValue("@title", task.Title);
            cmd.Parameters.AddWithValue("@description", task.Description);
            cmd.Parameters.AddWithValue("@date", task.Date);
            cmd.Parameters.AddWithValue("@fromtime", task.FromTime);
            cmd.Parameters.AddWithValue("@totime", task.ToTime);
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

            string query = "delete from tasks where id=@taskId";
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