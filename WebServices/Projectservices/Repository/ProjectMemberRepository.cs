using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using PMS.Models;
using PMS.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;


namespace PMS.Repositories;
public class ProjectMemberRepository : IProjectMemberRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public ProjectMemberRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public List<ProjectMember> GetAll()
    {
        List<ProjectMember> projectmembers = new List<ProjectMember>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                int empId = int.Parse(reader["empid"].ToString());
               
                
                ProjectMember projectmember = new ProjectMember
                {

                    Id= id,
                    ProjectId=projectId,
                    EmpId=empId
                    
                };
                projectmembers.Add(projectmember);
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
        return projectmembers;
    }
    public ProjectMember GetById(int Id)
    {
        ProjectMember projectMember = new ProjectMember();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projectmembers where id =@projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectmembers", Id);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int id = int.Parse(reader["id"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                int empId = int.Parse(reader["empid"].ToString());


                projectMember = new ProjectMember
                {
                    Id= id,
                    ProjectId=projectId,
                    EmpId=empId
                    
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
        return projectMember;
    }
    public bool Insert(ProjectMember projectMember)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO projectmembers(projectid,empid) VALUES (@projectId,@empId)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", projectMember.ProjectId);
            command.Parameters.AddWithValue("@empId", projectMember.EmpId);
            

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
    public bool Update(ProjectMember projectMember)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update projectmembers SET projectid =@projectid, empid=@empid  WHERE id=@projectmemberid";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectmemberid", projectMember.Id);
            command.Parameters.AddWithValue("@projectid", projectMember.ProjectId);
            command.Parameters.AddWithValue("@empid", projectMember.EmpId);
           
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
    public bool Delete(int Id)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM projectmembers WHERE id=@projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectmembers", Id);
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
