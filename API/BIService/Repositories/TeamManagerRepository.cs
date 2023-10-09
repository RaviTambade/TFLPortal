using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
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
                               GROUP BY projects.title";
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

        public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourByMembers(int projectId)
        {
            List<TotalProjectWorkingByMember> projectWorkingByMembers = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
                string query =
                    @"SELECT employees.userid,SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
                               FROM employees 
                               INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
                               INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
                               INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
                               WHERE projecttasks.projectid = @projectId 
                               GROUP BY employees.id
                               ORDER BY totalworkinghours DESC";
                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@projectid", projectId);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    projectWorkingByMembers.Add(
                        new TotalProjectWorkingByMember
                        {
                            UserId = reader.GetInt32("UserId"),
                            TotalWorkingHour = reader.GetDouble("totalworkinghours")
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

        public async Task<List<ProjectTaskStatus>> GetProjectStatusCount(int projectId)
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
                               WHERE projects.id =@projectId
                               GROUP BY projecttasks.status";
                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@projectid", projectId);
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
            string teamMemberId,
            DateFilter dateFilter
        )
        {
            List<AllocatedTaskOverview> allocatedTaskOverview = new();
            MySqlConnection connection = new(_connectionString);
            try
            {
                string query =
                    @"
SELECT employees.userid AS UserId,COUNT(taskallocations.id) AS TaskAllocationCount,projects.title AS Title,projecttasks.status AS Status
FROM employees
INNER JOIN taskallocations ON employees.id=taskallocations.teammemberid
INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
INNER JOIN projects ON projecttasks.projectid = projects.id
WHERE  taskallocations.teammemberid IN (@teamMemberId) AND (taskallocations.assignedon >=@startDate) AND (taskallocations.assignedon<=@endDate)
GROUP BY projecttasks.status,projecttasks.projectid,employees.userid";
                MySqlCommand command = new(query, connection);
                command.Parameters.AddWithValue("@teamMemberId", teamMemberId);
                command.Parameters.AddWithValue("@startDate", dateFilter.StartDate);
                command.Parameters.AddWithValue("@endDate", dateFilter.EndDate);
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
                            Status = reader.GetString("Status")
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

        public async Task<List<double>> GetCompletionPercentage(string projectId)
        {
            List<double> percentages = new List<double>();
            MySqlConnection connection = new MySqlConnection(_connectionString);
            try
            {
                string query = @"SELECT 
            ROUND((SUM(CASE WHEN projecttasks.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(projecttasks.id)) * 100, 2) AS CompletionPercentage
            FROM projecttasks
            WHERE projecttasks.projectid = @projectId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@projectId", projectId);
                await connection.OpenAsync();
                using MySqlDataReader reader = command.ExecuteReader();
                while (await reader.ReadAsync())
                {
                    double completionPercentage = reader.GetDouble("CompletionPercentage");
                    percentages.Add(completionPercentage);
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

    }
}
