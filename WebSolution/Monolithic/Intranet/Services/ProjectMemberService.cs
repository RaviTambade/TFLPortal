using MySql.Data.MySqlClient;
using TFLPortal.Models;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class ProjectMemberService : IProjectMemberService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public ProjectMemberService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> Assign(Member member){
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "INSERT INTO projectmembership(projectid,employeeid,projectrole,projectassigndate,currentprojectworkingstatus) VALUES(@projectId,@employeeId,@projectRole,@projectAssignDate,@currentProjectWorkingStatus)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectId", member.ProjectId);
            cmd.Parameters.AddWithValue("@employeeId", member.EmployeeId);
            cmd.Parameters.AddWithValue("@projectRole", member.Title);
            cmd.Parameters.AddWithValue("@projectAssignDate",member.AssignedOn);
            cmd.Parameters.AddWithValue("@currentProjectWorkingStatus", member.Status);
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

    public async Task<bool> Release(Member member)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update projectmembership set projectreleasedate=@projectReleasedate,currentprojectworkingstatus=@currentprojectworkingstatus where projectid=@projectId and employeeId=@employeeId";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@projectReleasedate", member.ReleasedOn);
            cmd.Parameters.AddWithValue("@currentprojectworkingstatus", member.Status);
            cmd.Parameters.AddWithValue("@projectId", member.ProjectId);
            cmd.Parameters.AddWithValue("@employeeId", member.EmployeeId);
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

    public async Task<List<Employee>> GetEmployeesOnBench()
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
                    EmployeeId = reader.GetInt32("id"),
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

    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= new List<Member>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =@"Select * from projectmembership where projectid=@projectId currentprojectworkingstatus=@status";
                
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", "yes");
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Member member = new Member
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Title = reader.GetString("projectrole"),
                    AssignedOn = reader.GetDateTime("projectassigndate"),
                };
                members.Add(member);
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
        return members;
    }

}  

  


