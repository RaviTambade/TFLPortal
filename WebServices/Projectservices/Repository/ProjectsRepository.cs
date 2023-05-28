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

    
    public List<Project> GetAll()
    {
        List<Project> projects = new List<Project>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                int projId = int.Parse(reader["id"].ToString());
                string? projName = reader["name"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                int teamId = int.Parse(reader["teamid"].ToString());


                Project project = new Project
                {
                    Id = projId,
                    Name = projName,
                    StartDate = startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    TeamId = teamId

                };
                projects.Add(project);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return projects;
    }
    public Project GetById(int Id)
    {
        Project project = new Project();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects where id =@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", Id);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int projectId = int.Parse(reader["id"].ToString());
                string? projName = reader["name"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                int teamId = int.Parse(reader["teamid"].ToString());
                project = new Project
                {
                    Id = projectId,
                    Name = projName,
                    StartDate = startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    TeamId = teamId
                };
            }
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            con.Close();
        }
        return project;
    }
    public bool Insert(Project project)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO projects(name,startDate,endDate,description,teamid) VALUES(@projname,@startdate,@enddate,@projdesc,@teamid)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projname", project.Name);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@teamid", project.TeamId);

            con.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            con.Close();
        }
        return status;

    }
    public bool Update(Project project)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update projects SET name =@projname, startDate=@startdate,endDate=@enddate,description=@projdesc,teamid=@teamid WHERE id=@projId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projname", project.Name);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@teamid", project.TeamId);
            command.Parameters.AddWithValue("@projId", project.Id);
            con.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            con.Close();
        }
        return status;

    }
    public bool Delete(Int32 Id)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM projects WHERE id=@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", Id);
            con.Open();
            int rowsAffected = command.ExecuteNonQuery();
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
            con.Close();
        }
        return status;

    }
    public List<Project> GetByProject(DateTime fromdate, DateTime todate)
    {
        List<Project> projects = new List<Project>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects WHERE startDate BETWEEN @fromdate AND @todate;";

            connection.Open();
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@fromdate", fromdate);
            cmd.Parameters.AddWithValue("@todate", todate);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string projName = reader["name"].ToString();
                DateTime startdate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["description"].ToString();
                int teamId = int.Parse(reader["teamid"].ToString());

                Project project = new Project
                {
                    Id = id,
                    Name = projName,
                    StartDate = startdate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description = description,
                    TeamId = teamId
                };
                projects.Add(project);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            connection.Close();
        }
        return projects;
    }

  
}
