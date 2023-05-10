using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TeamService.Models;
using TeamService.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace TeamService.Repositories;
public class TeamRepository : ITeamRepository
{

    private IConfiguration _configuration;
    private string _conString;

    public TeamRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }
    public List<Team> GetAll()
    {
        List<Team> teams = new List<Team>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM team";
            MySqlCommand command = new MySqlCommand(query, con);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            
            while (reader.Read())
            {
                int teamId = int.Parse(reader["team_id"].ToString());
                string teamName = reader["team_name"].ToString();
                
                Team team = new Team
                {
                    TeamId = teamId,
                    TeamName = teamName
                    
                };
                teams.Add(team);
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
        return teams;
    }

    public Team GetById(int teamId)
    {
        Team team = new Team();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM team where team_id =@teamId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teamId", teamId);
            con.Open();
            MySqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {

                int Id = int.Parse(reader["team_id"].ToString());
                string teamName = reader["team_name"].ToString();
                team = new Team
                {
                    TeamId = Id,
                    TeamName = teamName
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
        return team;
    }

    public bool Insert(Team team)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "INSERT INTO team(team_name) VALUES (@teamname)";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teamname", team.TeamName);
           
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



    public bool Update(Team team)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "Update team SET team_name =@teamName  WHERE team_id=@teamId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@teamId", team.TeamId);
            command.Parameters.AddWithValue("@teamName", team.TeamName);
            
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


    public bool Delete(int teamId)
    {
        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "DELETE  FROM team WHERE team_id=@TeamId";
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@TeamId", teamId);
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
