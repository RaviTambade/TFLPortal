using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using MySql.Data.MySqlClient;
using Transflower.PMSApp.BIService.Models;
using Transflower.PMSApp.BIService.Repositories.Interfaces;

namespace Transflower.PMSApp.BIService.Repositories
{
    public class TeamManagerRepository : ITeamManagerRepository
    {
        private readonly IConfiguration _configuration; 
        private readonly string _connectionString;

        public TeamManagerRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(
            int teamManagerId,
            DateFilter dateFilter
        )
        {
            List<TotalProjectWork> projectWorkHours = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
                string query =
                    @"SELECT  projects.id AS Id,projects.title AS Title, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime))  / 3600  AS TotalTimeSpend
                               FROM projects
                               INNER JOIN projecttasks ON projects.id = projecttasks.projectid
                               INNER JOIN taskallocations ON projecttasks.id = taskallocations.projecttaskid
                               INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
WHERE  projects.teammanagerid=@teamManagerId AND (timesheets.date >=@startDate) AND (timesheets.date<=@endDate)
                               GROUP BY Id";
                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@teammanagerid", teamManagerId);
                command.Parameters.AddWithValue("@startDate", dateFilter.StartDate);
                command.Parameters.AddWithValue("@endDate", dateFilter.EndDate);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    projectWorkHours.Add(
                        new TotalProjectWork
                        {
                            Id = reader.GetInt32("Id"),
                            Title = reader.GetString("Title"),
                            TotalTimeSpend = reader.GetDouble("TotalTimeSpend")
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
            return projectWorkHours;
        }

        public async Task<List<ProjectTaskStatus>> GetProjectStatusCount(int teamManagerId)
        {
            List<ProjectTaskStatus> projectTaskStatuses = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
                string query =
                    @"SELECT projects.title AS Title,COUNT(projecttasks.status) AS TaskCount,projecttasks.status AS Status
                               FROM projects 
                               INNER JOIN projecttasks
                               ON projects.id = projecttasks.projectid
                               WHERE projects.teammanagerid =@teamManagerId
                               GROUP BY projecttasks.status,projects.title";
                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@teamManagerId", teamManagerId);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    projectTaskStatuses.Add(
                        new ProjectTaskStatus
                        {
                            ProjectTitle = reader.GetString("Title"),
                            Status = reader.GetString("Status"),
                            TaskStatusCount = reader.GetInt32("TaskCount")
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
            return projectTaskStatuses;
        }

        public async Task<List<AllocatedTaskOverview>> GetAllocatedTaskOverview(
            string teamMemberId
        )
        {
            List<AllocatedTaskOverview> allocatedTaskOverview = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
             string query = $@"
SELECT employees.userid AS UserId, projecttasks.projectid AS ProjectId, COUNT(taskallocations.id) AS TaskAllocationCount, projects.title AS Title, projecttasks.status AS Status
FROM employees
INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
INNER JOIN projects ON projecttasks.projectid = projects.id
WHERE taskallocations.teammemberid IN ({teamMemberId})
GROUP BY Status, ProjectId, UserId;
";

                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@teamMemberId", teamMemberId);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    allocatedTaskOverview.Add(
                        new AllocatedTaskOverview
                        {
                            UserId = reader.GetInt32("UserId"),
                            TaskAllocationCount = reader.GetInt32("TaskAllocationCount"),
                            Title = reader.GetString("Title"),
                            Status = reader.GetString("Status"),
                            ProjectId= reader.GetInt32("ProjectId")
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
                await connection.CloseAsync();
            }
            return allocatedTaskOverview;
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

        public async Task<List<ProjectPercentage>> GetCompletionPercentage(string projectId)
        {
            List<ProjectPercentage> percentages = new List<ProjectPercentage>();
            MySqlConnection connection = new MySqlConnection(_connectionString);
            try
            {
                string query =
                    $"SELECT projecttasks.projectid AS ProjectId, ROUND((SUM(CASE WHEN projecttasks.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(projecttasks.id)) * 100, 2) AS CompletionPercentage FROM projecttasks WHERE projecttasks.projectid IN ({projectId}) GROUP BY ProjectId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@projectId", projectId);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    percentages.Add(
                        new ProjectPercentage
                        {
                            ProjectId = reader.GetInt32("ProjectId"),
                            CompletionPercentage = reader.GetDouble("CompletionPercentage")
                        }
                    );
                }
            }
            catch (System.Exception)
            {
                throw;
            }
            finally
            {
                await connection.CloseAsync();
            }
            return percentages;
        }

        public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourOfMembers(int projectId, DateTime givenDate, string dateRange)
        {
            List<TotalProjectWorkingByMember> totalProjectWorkingByMembers = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
                MySqlCommand command = new MySqlCommand("GetEmployeeWorkingHours", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@projectId", projectId);
                command.Parameters.AddWithValue("@givenDate", givenDate);
                command.Parameters.AddWithValue("@dateRange", dateRange);
                await connection.OpenAsync();
                MySqlDataReader reader = (MySqlDataReader)await command.ExecuteReaderAsync();
                while (await reader.ReadAsync())
                {
                    TotalProjectWorkingByMember totalProjectWorkingByMember = new TotalProjectWorkingByMember()
                    {
                        UserId = reader.GetInt32("userid"),
                        TotalWorkingHour = reader.GetDouble("totalworkinghours")
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

    }
}