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
    public List<Projects> GetAll()
    {
        List<Projects> projects = new List<Projects>();
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

                
                Projects project = new Projects
                {
                    ProjId = projId,
                    ProjName=projName,
                    StartDate=startDate.ToShortDateString(),
                    EndDate = endDate.ToShortDateString(),
                    Description=description,
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

    public Projects GetById(int projId)
    {
        Projects project = new Projects();
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
                project = new Projects
                {
                    ProjId = projectId,
                    ProjName = projName,
                    StartDate = startDate.ToShortDateString(),
                    EndDate= endDate.ToShortDateString(),
                    Description=description,
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

    public bool Insert(Projects project)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO projects(proj_name,startDate,endDate,proj_desc,team_id) VALUES(@projname,@startdate,@enddate,@projdesc,@teamid)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projname", project.ProjName);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@teamid", project.TeamId);

            con.Open();
             int rowsAffected=command.ExecuteNonQuery();
            if(rowsAffected >0){
             status=true;
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

    public bool Update(Projects project)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update projects SET proj_name =@projname, startDate=@startdate,endDate=@enddate,proj_desc=@projdesc,team_id=@teamid WHERE proj_id=@projId";
            MySqlCommand command = new MySqlCommand(query, con);
             command.Parameters.AddWithValue("@projname", project.ProjName);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
            command.Parameters.AddWithValue("@teamid", project.TeamId);
            command.Parameters.AddWithValue("@projId", project.ProjId);
            con.Open();
             int rowsAffected=command.ExecuteNonQuery();
            if(rowsAffected >0){
             status=true;
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
    public bool Delete(Int32 projId)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM projects WHERE proj_id=@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", projId);
            con.Open();
             int rowsAffected=command.ExecuteNonQuery();
            if(rowsAffected >0){
             status=true;
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

  public List<Projects> GetByProject(string projectName)
    {
        List<Projects> projects = new List<Projects>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projects WHERE proj_name=@projectName";
            connection.Open();
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectName",projectName);
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["proj_id"].ToString());
                string? projName = reader["proj_name"].ToString();
                DateTime startDate = DateTime.Parse(reader["startDate"].ToString());
                DateTime endDate = DateTime.Parse(reader["endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                int teamId = int.Parse(reader["team_id"].ToString());

                Projects project = new Projects
                {
                   ProjId = id,
                    ProjName = projName,
                    StartDate = startDate.ToShortDateString(),
                    EndDate= endDate.ToShortDateString(),
                    Description=description,
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
