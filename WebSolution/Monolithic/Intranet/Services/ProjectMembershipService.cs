using MySql.Data.MySqlClient;
using TFLPortal.Models;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class ProjectAllocationService : IProjectAllocationService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public ProjectAllocationService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> AssignEmployeeToProject(int projectId,int employeeId,ProjectAllocation projectAllocation){
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
            cmd.Parameters.AddWithValue("@projectRole", projectAllocation.MembershipRole);
            cmd.Parameters.AddWithValue("@projectAssignDate",projectAllocation.AssignedDate);
            cmd.Parameters.AddWithValue("@currentProjectWorkingStatus", projectAllocation.Status);
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

    public async Task<bool> ReleaseEmployeeFromProject(int projectId ,int employeeId,ProjectAllocation projectAllocation)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectmembership set projectreleasedate=@projectReleasedate,currentprojectworkingstatus=@currentprojectworkingstatus where projectid=@projectId and employeeId=@employeeId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectReleasedate", projectAllocation.ReleaseDate);
            cmd.Parameters.AddWithValue("@currentprojectworkingstatus", projectAllocation.Status);
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

    public async Task<List<ProjectAllocation>> GetAllocatedEmployees(string status)
    {
        List<ProjectAllocation> employees= new List<ProjectAllocation>();
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
                ProjectAllocation employee = new ProjectAllocation
                {
                    AllocationId = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    MemberId = reader.GetInt32("employeeid"),
                    MembershipRole = reader.GetString("projectrole"),
                    AssignedDate = reader.GetDateTime("projectassigndate"),
                    Status=status
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

    public async Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = new List<ProjectAllocation>();
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
                ProjectAllocation project = new ProjectAllocation
                {
                    AllocationId = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    MemberId = reader.GetInt32("employeeid"),
                    MembershipRole = reader.GetString("projectrole"),
                    AssignedDate = reader.GetDateTime("projectassigndate"),
                    Status=reader.GetString("currentprojectworkingstatus")

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
    
    public async Task<List<ProjectAllocation>> GetEmployeesOfProject(int projectId,string status)
    {
        List<ProjectAllocation> employees= new List<ProjectAllocation>();
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
                ProjectAllocation employee = new ProjectAllocation
                {
                    AllocationId = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    MemberId = reader.GetInt32("employeeid"),
                    MembershipRole = reader.GetString("projectrole"),
                    AssignedDate = reader.GetDateTime("projectassigndate")
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

    public async Task<List<ProjectAllocation>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = new List<ProjectAllocation>();
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
                ProjectAllocation project = new ProjectAllocation
                {
                    AllocationId = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    MemberId =employeeId,
                    MembershipRole = reader.GetString("projectrole"),
                    AssignedDate = reader.GetDateTime("projectassigndate"),
                    Status=reader.GetString("currentprojectworkingstatus")
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
     public async Task<ProjectAllocation> GetProjectMemberDetails(int employeeId,int projectId)
    {
        ProjectAllocation employee= null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="SELECT * from projectmembership where projectid=@projectId and employeeid=@employeeId";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
             command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                 employee = new ProjectAllocation
                {
                    AllocationId = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    MemberId = reader.GetInt32("employeeid"),
                    MembershipRole = reader.GetString("projectrole"),
                    AssignedDate = reader.GetDateTime("projectassigndate")
                };
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
        return employee;
    }
}  

  


