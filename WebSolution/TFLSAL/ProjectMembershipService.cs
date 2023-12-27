using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ProjectMembershipService : IProjectMembershipService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public ProjectMembershipService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> AssignEmployeeToProject(int projectId,int employeeId,ProjectMembership projectMembership){
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO projectmembership(projectid,employeeid,projectrole,projectassigndate,currentprojectworkingstatus) VALUES(@projectId,@employeeId,@projectRole,@projectAssignDate,@currentProjectWorkingStatus)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectId", projectId);
            cmd.Parameters.AddWithValue("@employeeId", employeeId);
            cmd.Parameters.AddWithValue("@projectRole", projectMembership.ProjectRole);
            cmd.Parameters.AddWithValue("@projectAssignDate",projectMembership.ProjectAssignDate);
            cmd.Parameters.AddWithValue("@currentProjectWorkingStatus", projectMembership.CurrentProjectWorkingStatus);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }
    }

    public async Task<bool> ReleaseEmployeeFromProject(int projectId ,int employeeId,ProjectMembership projectMembership)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectmembership set projectreleasedate=@projectReleasedate,currentprojectworkingstatus=@currentprojectworkingstatus where projectid=@projectId and employeeId=@employeeId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectReleasedate", projectMembership.ProjectReleaseDate);
            cmd.Parameters.AddWithValue("@currentprojectworkingstatus", projectMembership.CurrentProjectWorkingStatus);
            cmd.Parameters.AddWithValue("@projectId", projectId);
            cmd.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        Console.WriteLine(status);
        return status;
    }

    public async Task<List<Employee>> GetUnassignedEmployees()
    {
        List<Employee> employees= new List<Employee>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="SELECT * FROM employees WHERE id not in (SELECT employeeid FROM projectmembership GROUP BY employeeid HAVING COUNT(CASE WHEN currentprojectworkingstatus = 'yes' THEN 1 END) > 0)";       
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Employee employee = new Employee
                {
                    Id = reader.GetInt32("id"),
                    UserId = reader.GetInt32("userid"),
                    HireDate = reader.GetDateTime("hiredate"),
                    ReportingId = reader.GetInt32("reportingid"),
                };
                employees.Add(employee);
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
        return employees;
    }

    public async Task<List<ProjectMembershipDetails>> GetAllocatedEmployees(string status)
    {
        List<ProjectMembershipDetails> employees= new List<ProjectMembershipDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="Select * from projectmembership inner join employees on projectmembership.employeeid=employees.id  where projectmembership.currentprojectworkingstatus=@status";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectMembershipDetails employee = new ProjectMembershipDetails
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    ProjectRole = reader.GetString("projectrole"),
                    ProjectAssignDate = reader.GetDateTime("projectassigndate"),
                    UserId = reader.GetInt32("userid"),
                    HireDate = reader.GetDateTime("hiredate"),
                    ReportingId = reader.GetInt32("reportingid")
                };
                employees.Add(employee);
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
        return employees;
    }

    public async Task<List<ProjectMembership>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectMembership> projects = new List<ProjectMembership>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from projectmembership where projectassigndate BETWEEN @fromAssignedDate AND @toAssignedDate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectMembership project = new ProjectMembership
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    ProjectRole = reader.GetString("projectrole"),
                    ProjectAssignDate = reader.GetDateTime("projectassigndate"),
                    CurrentProjectWorkingStatus=reader.GetString("currentprojectworkingstatus")

                };
                projects.Add(project);
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
        return projects;
    }
    
    public async Task<List<ProjectMembershipDetails>> GetEmployeesOfProject(int projectId,string status)
    {
        List<ProjectMembershipDetails> employees= new List<ProjectMembershipDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select * from employees inner join projectmembership on projectmembership.employeeid=employees.id where projectmembership.currentprojectworkingstatus=@status and projectmembership.projectid=@projectId" ;
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectMembershipDetails employee = new ProjectMembershipDetails
                {
                    Id = reader.GetInt32("id"),
                    UserId = reader.GetInt32("userid"),
                    HireDate = reader.GetDateTime("hiredate"),
                    ReportingId = reader.GetInt32("reportingid"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    ProjectRole = reader.GetString("projectrole"),
                    ProjectAssignDate = reader.GetDateTime("projectassigndate")
                };
                employees.Add(employee);
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
        return employees;
    }

    public async Task<List<ProjectMembership>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectMembership> projects = new List<ProjectMembership>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {                  
            string query = "select * from projectmembership where employeeid=@employeeId and projectassigndate BETWEEN @fromAssignedDate AND @toAssignedDate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectMembership project = new ProjectMembership
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId =employeeId,
                    ProjectRole = reader.GetString("projectrole"),
                    ProjectAssignDate = reader.GetDateTime("projectassigndate"),
                    CurrentProjectWorkingStatus=reader.GetString("currentprojectworkingstatus")
                };
                projects.Add(project);
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
        return projects;
    }

}  

  


