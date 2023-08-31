using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Transflower.PMS.ProjectAPI.Models;
using Transflower.PMS.ProjectAPI.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;


namespace Transflower.PMS.ProjectAPI.Repositories;
public class ProjectMemberRepository : IProjectMemberRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public ProjectMemberRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public async Task<IEnumerable<ProjectMember>> GetAll()
    {
        List<ProjectMember> projectmembers = new List<ProjectMember>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();

            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                int empId = int.Parse(reader["empid"].ToString());

                ProjectMember projectmember = new ProjectMember
                {
                    Id = id,
                    ProjectId = projectId,
                    EmpId = empId
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
    public async Task<ProjectMember> GetById(int Id)
    {
        ProjectMember projectMember = new ProjectMember();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM projectmembers where id =@projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectmembers", Id);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int projectId = int.Parse(reader["projectid"].ToString());
                int empId = int.Parse(reader["empid"].ToString());

                projectMember = new ProjectMember
                {
                    Id = id,
                    ProjectId = projectId,
                    EmpId = empId

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


    public async Task<IEnumerable<ProjectMemberInfo>> Get(int projectId)
    {
       List<ProjectMemberInfo> projectMembers = new List<ProjectMemberInfo>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT e.id, e.firstname, e.lastname FROM employees e INNER JOIN projectmembers pm ON e.id = pm.empid WHERE pm.projectid =@projectId;";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectId", projectId);
            await con.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
               ProjectMemberInfo projectMember = new ProjectMemberInfo
                {
                    EmpId=id,
                   FirstName=firstname,
                   LastName= lastname
                };
                projectMembers.Add(projectMember);
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
        return projectMembers;
    }


    public async Task<bool> Insert(ProjectMember projectMember)
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
            con.Close();
        }
        return status;

    }
    public async Task<bool> Update(ProjectMember projectMember)
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
            con.Close();
        }
        return status;

    }
    public async Task<bool> Delete(int Id)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM projectmembers WHERE id=@projectmembers";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@projectmembers", Id);
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
            con.Close();
        }
        return status;

    }
}
