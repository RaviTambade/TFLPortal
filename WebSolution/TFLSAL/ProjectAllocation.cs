using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

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

   
   

    public async Task<bool> AssignMemberToProject(int projectId,int employeeId,ProjectAllocation project){
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO projectallocations(projectid,employeeid,membership,assigndate,status) VALUES(@projectId,@employeeId,@membership,@assigndate,@status)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectId", projectId);
            cmd.Parameters.AddWithValue("@employeeId", employeeId);
            cmd.Parameters.AddWithValue("@membership", project.Membership);
            cmd.Parameters.AddWithValue("@assigndate", project.AssignDate);
              cmd.Parameters.AddWithValue("@status", project.Status);
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

    public async Task<bool> ReleaseMemberFromProject(int projectId ,int employeeId)
    {
        bool status=false;
        DateTime localDate = DateTime.Now;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectallocations set releasedate=@releasedate,status=@status where projectid=@projectId and employeeId=@employeeId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@releasedate", localDate);
            cmd.Parameters.AddWithValue("@status", "no");
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
        return status;
    }

    public async Task<List<ProjectAllocation>> GetAllUnassignedEmployees(string status)
    {
        List<ProjectAllocation> employees= new List<ProjectAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="Select * from projectallocations where status=@status";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectAllocation employee = new ProjectAllocation
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    AssignDate = reader.GetDateTime("assigndate"),
                    ReleaseDate = reader.GetDateTime("releasedate"),
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

    public async Task<List<ProjectAllocation>> GetAllAssignedEmployees(string status)
    {
        List<ProjectAllocation> employees= new List<ProjectAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="Select * from projectallocations where status=@status";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectAllocation employee = new ProjectAllocation
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    AssignDate = reader.GetDateTime("assigndate"),
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
            string query = "select * from projectallocations where assigndate BETWEEN @fromAssignedDate AND @toAssignedDate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromAssignedDate", fromAssignedDate);
            command.Parameters.AddWithValue("@toAssignedDate", toAssignedDate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectAllocation project = new ProjectAllocation
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    AssignDate = reader.GetDateTime("assigndate"),
                    Status=reader.GetString("status")

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
    
    public async Task<List<ProjectAllocation>> GetAllEmployeesOfProject(int projectId)
    {
        List<ProjectAllocation> employees= new List<ProjectAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="Select * from projectallocations where projectid=@projectId";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                ProjectAllocation employee = new ProjectAllocation
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    AssignDate = reader.GetDateTime("assigndate"),
                    Status=reader.GetString("status")

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

    public async Task<List<ProjectAllocation>> GetAllProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = new List<ProjectAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {                  

            string query = "select * from projectallocations where employeeid=@employeeId and assigndate BETWEEN @fromAssignedDate AND @toAssignedDate";
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
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId =employeeId,
                    Membership = reader.GetString("membership"),
                    AssignDate = reader.GetDateTime("assigndate"),
                    Status=reader.GetString("status")

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

  


