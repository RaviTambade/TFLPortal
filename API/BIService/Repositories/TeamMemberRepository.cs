using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Transflower.PMSApp.BIService.Models;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
namespace Transflower.PMSApp.BIService.Repositories;

public class TeamMemberRepository : ITeamMemberRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public TeamMemberRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection");
    }



    public async Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(
        string teamMemberId,
        DateFilter dateFilter
    )
    {
        List<TotalProjectWorkingByMember> projectWorkingByMembers = new();
        MySqlConnection connection = new(_connectionString);
        try
        {
            string query =
                @"SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
FROM taskallocations
INNER JOIN employees ON taskallocations.teammemberid =employees.id
INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
WHERE taskallocations.teammemberid IN (@teamMemberId) AND (timesheets.date >=@startDate) AND (timesheets.date<=@endDate)
GROUP BY employees.userid;";

            MySqlCommand command = new(query, connection);
            command.Parameters.AddWithValue("@teamMemberId", teamMemberId);
            command.Parameters.AddWithValue("@startDate", dateFilter.StartDate);
            command.Parameters.AddWithValue("@endDate", dateFilter.EndDate);
            await connection.OpenAsync();
            using MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                projectWorkingByMembers.Add(
                    new TotalProjectWorkingByMember
                    {
                        UserId = reader.GetInt32("UserId"),
                        TotalWorkingHour = reader.GetDouble("TotalWorkingHour")
                    }
                );
            }
            await reader.CloseAsync();
        }
        catch (System.Exception)
        {
            throw;
        }
        finally
        {
            connection.Close();
        }
        return projectWorkingByMembers;
    }

    public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourOfMembers(int teamMemberId, DateTime givenDate, string dateRange)
    {
        List<TotalProjectWorkingByMember> totalProjectWorkingByMembers = new();
        MySqlConnection connection = new(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand("GetEmployeeWorkHours", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@teamMemberId", teamMemberId);
            command.Parameters.AddWithValue("@givenDate", givenDate);
            command.Parameters.AddWithValue("@dateRange", dateRange);
            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                TotalProjectWorkingByMember totalProjectWorkingByMember = new TotalProjectWorkingByMember()
                {
                    UserId = reader.GetInt32("UserId"),
                    TotalWorkingHour = reader.GetDouble("TotalWorkingHour")
                };
                totalProjectWorkingByMembers.Add(totalProjectWorkingByMember);
            }
            await reader.CloseAsync();
        }
        catch (System.Exception)
        {

            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return totalProjectWorkingByMembers;
    }



    public async Task<double> GetCalculateAverageTime(int userId)
    {
        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand("CalculateAverageTime", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@userId", userId);

            await connection.OpenAsync();

            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();

            if (await reader.ReadAsync())
            {
                double averageTime = reader.GetDouble(0);
                await reader.CloseAsync();
                return averageTime;
            }
            else
            {
                await reader.CloseAsync();
                throw new Exception("No data returned from the stored procedure.");
            }
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
    }

    public async Task<List<OverDueTask>> OverDueTaskOfMember(int userId)
    {
        List<OverDueTask> overduetasks = new List<OverDueTask>();
        MySqlConnection connection = new MySqlConnection(_connectionString);

        try
        {
            MySqlCommand command = new MySqlCommand("getOverDueTasks", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@userId", userId);

            await connection.OpenAsync();
            MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                OverDueTask overdueTask = new OverDueTask()
                {
                    DueDate = reader.GetDateTime("dueDate"),
                    Status = reader.GetString("status"),
                    ProjectTitle = reader.GetString("projectTitle"),
                    UserId = reader.GetInt32("userId"),
                    TaskTitle = reader.GetString("taskTitle")
                };

                overduetasks.Add(overdueTask);
            }

            await reader.CloseAsync();
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }

        return overduetasks;
    }






}