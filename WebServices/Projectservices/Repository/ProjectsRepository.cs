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
            string query = "SELECT * FROM project";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            
            while (reader.Read())
            {
                int projId = int.Parse(reader["proj_id"].ToString());
                string? projName = reader["proj_name"].ToString();
                DateTime planedStartDate = DateTime.Parse(reader["planned_startDate"].ToString());
                DateTime planedEndDate = DateTime.Parse(reader["planend_endDate"].ToString());
                DateTime actualStartDate = DateTime.Parse(reader["actual_startDate"].ToString());
                DateTime actualEndDate = DateTime.Parse(reader["actual_endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                
                Projects project = new Projects
                {
                    ProjId = projId,
                    ProjName=projName,
                    PlanedStartDate=planedStartDate.ToShortDateString(),
                    PlanedEndDate=planedEndDate.ToShortDateString(),
                    ActualStartDate=actualStartDate.ToShortDateString(),
                    ActualEndDate=actualEndDate.ToShortDateString(),
                    Description=description

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
            string query = "SELECT * FROM project where proj_id =@projectId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", projId);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

               int projectId = int.Parse(reader["proj_id"].ToString());
                string? projName = reader["proj_name"].ToString();
                DateTime planedStartDate = DateTime.Parse(reader["planned_startDate"].ToString());
                DateTime planedEndDate = DateTime.Parse(reader["planend_endDate"].ToString());
                DateTime actualStartDate = DateTime.Parse(reader["actual_startDate"].ToString());
                DateTime actualEndDate = DateTime.Parse(reader["actual_endDate"].ToString());
                string description = reader["proj_desc"].ToString();
                project = new Projects
                {
                    ProjId = projectId,
                    ProjName = projName,
                    PlanedStartDate = planedStartDate.ToShortDateString(),
                    PlanedEndDate = planedEndDate.ToShortDateString(),
                    ActualStartDate = actualStartDate.ToShortDateString(),
                    ActualEndDate= actualEndDate.ToShortDateString(),
                    Description=description
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
            string query = "INSERT INTO project(proj_name,planned_startDate,planend_endDate,actual_startDate,actual_endDate,proj_desc) VALUES(@projname,@planedstartdate,@planedenddate,@actualstartdate,@actualenddate,@projdesc)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projname", project.ProjName);
            command.Parameters.AddWithValue("@planedstartdate", project.PlanedStartDate);
            command.Parameters.AddWithValue("@planedenddate", project.PlanedEndDate);
            command.Parameters.AddWithValue("@actualstartdate", project.ActualStartDate);
            command.Parameters.AddWithValue("@actualenddate", project.ActualEndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);

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
            string query = "Update project SET proj_name =@projname, planned_startDate =@planedstartdate, planend_endDate=@planedenddate,actual_startDate=@actualstartdate,actual_endDate=@actualenddate,proj_desc=@projdesc WHERE proj_id=@projId";
            MySqlCommand command = new MySqlCommand(query, con);
             command.Parameters.AddWithValue("@projname", project.ProjName);
            command.Parameters.AddWithValue("@planedstartdate", project.PlanedStartDate);
            command.Parameters.AddWithValue("@planedenddate", project.PlanedEndDate);
            command.Parameters.AddWithValue("@actualstartdate", project.ActualStartDate);
            command.Parameters.AddWithValue("@actualenddate", project.ActualEndDate);
            command.Parameters.AddWithValue("@projdesc", project.Description);
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
            string query = "DELETE  FROM project WHERE proj_id=@projectId";
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
}
