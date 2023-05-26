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
                int projId = int.Parse(reader["proj_id"].ToString());
                string? projName = reader["proj_name"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                int teamId = int.Parse(reader["team_id"].ToString());


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
    public Project GetById(int projId)
    {
        Project project = new Project();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects where proj_id =@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", projId);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int projectId = int.Parse(reader["proj_id"].ToString());
                string? projName = reader["proj_name"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                int teamId = int.Parse(reader["team_id"].ToString());
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
            string query = "INSERT INTO projects(proj_name,startDate,endDate,proj_desc,team_id) VALUES(@projname,@startdate,@enddate,@projdesc,@teamid)";
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
            string query = "Update projects SET proj_name =@projname, startDate=@startdate,endDate=@enddate,proj_desc=@projdesc,team_id=@teamid WHERE proj_id=@projId";
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
            string query = "DELETE  FROM projects WHERE proj_id=@projectId";
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
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromdate", fromdate);
            command.Parameters.AddWithValue("@todate", todate);
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["proj_id"].ToString());
                string projName = reader["proj_name"].ToString();
                DateTime startdate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                int teamId = int.Parse(reader["team_id"].ToString());

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
