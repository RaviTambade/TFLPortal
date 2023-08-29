using Transflower.PMS.TaskService.Models;
using Transflower.PMS.TaskService.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace Transflower.PMS.TaskService.Repositories;

public class TaskRepository : ITaskRepository
{


    private IConfiguration _configuration;
    private string _connectionString;

    public TaskRepository(IConfiguration configuration) 
    {
        _configuration = configuration;
        _connectionString = this._configuration.GetConnectionString("DefaultConnection");
    }

    

    public async Task<IEnumerable<Tasks>> GetAll()
    {
        List<Tasks> tasks = new List<Tasks>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();

            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
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
    public async Task<Tasks>  Get(int id)
    {
        Tasks task = new Tasks();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from tasks where id =" + id;
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
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
    public async Task<bool> Insert(Tasks tasks)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            string query = "Insert into tasks(id,projectid,title,description,date,fromtime,totime) values (@taskid,@projectid,@title,@decription,@date,@fromtime,@totime)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@taskid", tasks.Id);
            command.Parameters.AddWithValue("@projectid", tasks.ProjectId);
            command.Parameters.AddWithValue("@title", tasks.Title);
            command.Parameters.AddWithValue("@decription", tasks.Description);
            command.Parameters.AddWithValue("@date", tasks.Date);
            command.Parameters.AddWithValue("@fromtime", tasks.FromTime);
            command.Parameters.AddWithValue("@totime", tasks.ToTime);
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

    public async Task<bool> Update(Tasks task)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "UPDATE tasks SET title =@title ,description=@description,projectid=@projectid ,date=@date,fromtime=@fromtime,totime=@totime  WHERE id=@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", task.Id);
            command.Parameters.AddWithValue("@projectid", task.ProjectId);
            command.Parameters.AddWithValue("@title", task.Title);
            command.Parameters.AddWithValue("@description", task.Description);
            command.Parameters.AddWithValue("@date", task.Date);
            command.Parameters.AddWithValue("@fromtime", task.FromTime);
            command.Parameters.AddWithValue("@totime", task.ToTime);
            await connection.OpenAsync();
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


    public async Task<bool> Delete(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {

            string query = "delete from tasks where id=@taskId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@taskId", id);
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
}