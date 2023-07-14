using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using ProjectAPI.Models;
using ProjectAPI.Repository.Interface;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace ProjectAPI.Repository;
public class ProjectsRepository : IProjectsRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public ProjectsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }


    public async Task<IEnumerable<Project>> GetAll()
    {
        List<Project> projects = new List<Project>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects";
            MySqlCommand command = new MySqlCommand(query, con);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (await reader.ReadAsync())
            {
                int projId = int.Parse(reader["id"].ToString());
                string? title = reader["title"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                string status = reader["status"].ToString();
                Project project = new Project
                {
                    Id = projId,
                    Title = title,
                    StartDate = startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    Status=status
                };
                projects.Add(project);
            }
            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await con.CloseAsync();
        }
        return projects;
    }
    public async Task<Project> GetById(int Id)
    {
        Project project = new Project();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects where id =@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
             command.Parameters.AddWithValue("@projectId", Id);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {

                int projectId = int.Parse(reader["id"].ToString());
                string? title = reader["title"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                 string status = reader["status"].ToString();

                project = new Project
                {
                    Id = projectId,
                    Title = title,
                    StartDate = startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    Status=status

                };
            }
           await reader.CloseAsync();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await con.CloseAsync();
        }
        return project;
    }

    public async Task<Project> Get(string name)
    {
        Project project = new Project();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects where title =@title";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@title", name);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {

                int projectId = int.Parse(reader["id"].ToString());
                string? title = reader["title"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                string status = reader["status"].ToString();

                project = new Project
                {
                    Id = projectId,
                    Title = title,
                    StartDate = startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    Status=status

                };
            }
            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
           await con.CloseAsync();
        }
        return project;
    }
    public async Task<bool> Insert(Project project)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO projects(title,startDate,endDate,description,status) VALUES(@projtitle,@startdate,@enddate,@projdesc,@status)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projtitle", project.Title);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@status", project.Status);
            await con.OpenAsync();
            int rowsAffected =await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
           await con.CloseAsync();
        }
        return status;
    }
    public async Task<bool> Update(Project project)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update projects SET title =@projtitle, startDate=@startdate,endDate=@enddate,description=@projdesc,status=@status WHERE id=@projId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projtitle", project.Title);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@projId", project.Id);
            command.Parameters.AddWithValue("@status", project.Status);
            await con.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
           await con.CloseAsync();
        }
        return status;
    }
    public async Task<bool> Delete(Int32 Id)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM projects WHERE id=@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", Id);
            await con.OpenAsync();
            int rowsAffected = await command.ExecuteNonQueryAsync();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
           await con.CloseAsync();
        }
        return status;
    }
    public async Task<IEnumerable<Project>> GetByProject(Date date)
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects WHERE startDate BETWEEN @fromdate AND @todate;";
            await connection.OpenAsync();
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@fromdate", date.FromDate);
            cmd.Parameters.AddWithValue("@todate", date.ToDate);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string projtitle = reader["title"].ToString();
                DateTime startdate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                 string status = reader["status"].ToString();
                Project project = new Project
                {
                    Id = id,
                    Title = projtitle,
                    StartDate = startdate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    Status=status
                };
                projects.Add(project);
            }
            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
           await connection.CloseAsync();
        }
        return projects;
    }


}