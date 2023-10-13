using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Transflower.PMSApp.BIService.Models;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
namespace Transflower.PMSApp.BIService.Repositories;

    public class TeamMemberRepository:ITeamMemberRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public TeamMemberRepository(IConfiguration configuration){
            _configuration=configuration;
            _connectionString=_configuration.GetConnectionString("DefaultConnection");
        }



        //     public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId)
        //     {
        //         List<TotalProjectWork> projectWorkHours=new();
        //         MySqlConnection connection= new(_connectionString);
        //         try
        //         {
        //             string query=@"SELECT  projects.title AS Title, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime))  AS TotalTimeSpend
        //                            FROM projects
        //                            INNER JOIN projecttasks ON projects.id = projecttasks.projectid
        //                            INNER JOIN taskallocations ON projecttasks.id = taskallocations.projecttaskid
        //                            INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
        //                            WHERE  projects.teammanagerid=@teamManagerId
        //                            GROUP BY projects.title";
        //             MySqlCommand command = new (query,connection);
        //             command.Parameters.AddWithValue("@teammanagerid",teamManagerId);    
        //             await connection.OpenAsync();
        //             using MySqlDataReader reader = command.ExecuteReader();
        //             while (await reader.ReadAsync())
        //         {
        //             projectWorkHours.Add(
        //                 new TotalProjectWork
        //                 {
        //                     Title = reader.GetString("Title"),
        //                     TotalTimeSpend = reader.GetDouble("TotalTimeSpend")
        //                 }
        //             );
        //         }
        //         await reader.CloseAsync();
        //         }
        //         catch (System.Exception)
        //         {

        //             throw;
        //         }
        //          finally
        //     {
        //         connection.Close();
        //     }
        //     return projectWorkHours;

        //     }

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
                Console.WriteLine(query);
                Console.WriteLine(teamMemberId);
                Console.WriteLine(dateFilter.StartDate);
                Console.WriteLine(dateFilter.EndDate);

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

        
    }