using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TeamService.Models;
using PMS.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using PMS.Models;

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
            string query = "SELECT * FROM team_members";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            
            while (reader.Read())
            {
                int id = int.Parse(reader["team_member_id"].ToString());
                int empId = int.Parse(reader["emp_id"].ToString());
                int roleId = int.Parse(reader["role_id"].ToString());
                int teamId = int.Parse(reader["team_id"].ToString());
                
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
            string query = "SELECT * FROM team_members where team_member_id =@teammemberid";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teammemberid", Id);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int id = int.Parse(reader["team_member_id"].ToString());
                int empId = int.Parse(reader["emp_id"].ToString());
                int roleId = int.Parse(reader["role_id"].ToString());
                int teamId = int.Parse(reader["team_id"].ToString());


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
            string query = "INSERT INTO team_members(team_id,emp_id,role_id) VALUES (@teamId,@empId,@roleId)";
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
            string query = "Update team_members SET team_id =@teamid, emp_id=@empid, role_id=@roleid  WHERE team_member_id=@teammemberid";
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
            string query = "DELETE  FROM team_members WHERE team_member_id=@teammemberid";
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
