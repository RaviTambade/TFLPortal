using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using PMS.Models;
using PMS.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;


namespace PMS.Repositories;
public class TeamMemberRepository : ITeamMemberRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public TeamMemberRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public List<TeamMember> GetAll()
    {
        List<TeamMember> teammembers = new List<TeamMember>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM teammembers";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                int empId = int.Parse(reader["empid"].ToString());
                int roleId = int.Parse(reader["roleid"].ToString());
                int teamId = int.Parse(reader["teamid"].ToString());
                
                TeamMember teammember = new TeamMember
                {

                    Id= id,
                    EmpId=empId,
                    RoleId=roleId,
                    TeamId = teamId
                    
                };
                teammembers.Add(teammember);
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
        return teammembers;
    }
    public TeamMember GetById(int Id)
    {
        TeamMember teamMember = new TeamMember();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM teammembers where id =@teammemberid";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teammemberid", Id);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int id = int.Parse(reader["id"].ToString());
                int empId = int.Parse(reader["empid"].ToString());
                int roleId = int.Parse(reader["roleid"].ToString());
                int teamId = int.Parse(reader["teamid"].ToString());


                teamMember = new TeamMember
                {
                    Id=id,
                    EmpId=empId,
                    RoleId=roleId,
                    TeamId=teamId
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
        return teamMember;
    }
    public bool Insert(TeamMember teamMember)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO teammembers(teamid,empid,roleid) VALUES (@teamId,@empId,@roleId)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teamId", teamMember.TeamId);
            command.Parameters.AddWithValue("@empId", teamMember.EmpId);
            command.Parameters.AddWithValue("@roleId", teamMember.RoleId);

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
    public bool Update(TeamMember teamMember)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update teammembers SET teamid =@teamid, empid=@empid, roleid=@roleid  WHERE id=@teammemberid";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teammemberid", teamMember.Id);
            command.Parameters.AddWithValue("@teamId", teamMember.TeamId);
            command.Parameters.AddWithValue("@empid", teamMember.EmpId);
            command.Parameters.AddWithValue("@roleid", teamMember.RoleId);

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
            string query = "DELETE  FROM teammembers WHERE id=@teammemberid";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teammemberid", Id);
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
