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

    

    // public Team GetById(int teamId)
    // {
    //     Team team = new Team();
    //     MySqlConnection con = new MySqlConnection();
    //     con.ConnectionString = _conString;
    //     try
    //     {
    //         string query = "SELECT * FROM team where team_id =@teamId";
    //         MySqlCommand command = new MySqlCommand(query, con);
    //         command.Parameters.AddWithValue("@teamId", teamId);
    //         con.Open();
    //         MySqlDataReader reader = command.ExecuteReader();
    //         if (reader.Read())
    //         {

    //             int Id = int.Parse(reader["team_id"].ToString());
    //             string teamName = reader["team_name"].ToString();
    //             team = new Team
    //             {
    //                 TeamId = Id,
    //                 TeamName = teamName
    //             };
    //         }
    //         reader.Close();
    //     }
    //     catch (Exception e)
    //     {
    //         throw e;
    //     }
    //     finally
    //     {
    //         con.Close();
    //     }
    //     return team;
    // }

    // public bool Insert(Team team)
    // {

    //     bool status = false;
    //     MySqlConnection con = new MySqlConnection();
    //     con.ConnectionString = _conString;
    //     try
    //     {
    //         string query = "INSERT INTO team(team_name) VALUES (@teamname)";
    //         MySqlCommand command = new MySqlCommand(query, con);
    //         command.Parameters.AddWithValue("@teamname", team.TeamName);

    //         con.Open();
    //          int rowsAffected=command.ExecuteNonQuery();
    //         if(rowsAffected >0){
    //          status=true;
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         throw e;
    //     }
    //     finally
    //     {
    //         con.Close();
    //     }
    //     return status;

    // }



    // public bool Update(Team team)
    // {
    //     bool status = false;
    //     MySqlConnection con = new MySqlConnection();
    //     con.ConnectionString = _conString;
    //     try
    //     {
    //         string query = "Update team SET team_name =@teamName  WHERE team_id=@teamId";
    //         MySqlCommand command = new MySqlCommand(query, con);
    //         command.Parameters.AddWithValue("@teamId", team.TeamId);
    //         command.Parameters.AddWithValue("@teamName", team.TeamName);

    //         con.Open();
    //          int rowsAffected=command.ExecuteNonQuery();
    //         if(rowsAffected >0){
    //          status=true;
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         throw e;
    //     }
    //     finally
    //     {
    //         con.Close();
    //     }
    //     return status;

    // }


    // public bool Delete(int teamId)
    // {
    //     bool status = false;
    //     MySqlConnection con = new MySqlConnection();
    //     con.ConnectionString = _conString;
    //     try
    //     {
    //         string query = "DELETE  FROM team WHERE team_id=@TeamId";
    //         MySqlCommand command = new MySqlCommand(query, con);
    //         command.Parameters.AddWithValue("@TeamId", teamId);
    //         con.Open();
    //          int rowsAffected=command.ExecuteNonQuery();
    //         if(rowsAffected >0){
    //          status=true;
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         throw e;
    //     }
    //     finally
    //     {
    //         con.Close();
    //     }
    //     return status;

    // }
}
