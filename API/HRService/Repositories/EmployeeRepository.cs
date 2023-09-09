
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.PMS.HRService.Models;
using Transflower.PMS.HRService.Repositories.Interfaces;

namespace Transflower.PMS.HRService.Repositories
{
public class EmployeeRepository : IEmployeeRepository
{
  private IConfiguration _configuration;
  private string _connectionString;

  public EmployeeRepository(IConfiguration configuration){
       _configuration= configuration;
      _connectionString=this._configuration.GetConnectionString("DefaultConnection");

  }
  public async Task<IEnumerable<Employee>>  GetAll(){
     
        List<Employee> employees=new List<Employee>();
        MySqlConnection connection=new MySqlConnection(_connectionString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM employees";
            command.Connection= connection;
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                int userid = Int32.Parse(reader["userid"].ToString());
                string department = reader["department"].ToString();
                string position = reader["position"].ToString();
                DateTime hiredate = Convert.ToDateTime(reader["hire_date"].ToString());
                int directorid = Int32.Parse(reader["directorid"].ToString());
                int managerid = Int32.Parse(reader["managerid"].ToString());
               
               Employee employee = new Employee
                {
                    Id=id,
                    UserId= userid,
                    Department=department,
                    Position=position,
                    HireDate=hiredate.ToShortDateString(),
                    DirectorId=directorid,
                    ManagerId=managerid
                    
                };
                employees.Add(employee);
            }
            reader.Close();
        }
        catch(Exception e){
            throw e;
        }
        finally{
            connection.Close();
        }  
        return employees;
}


   public async Task<Employee>  GetById(int Id)
   {
          Employee employee =new Employee();
          MySqlConnection connection=new MySqlConnection(_connectionString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM employees where id=@employeeId";
              command.Connection=connection;
              command.Parameters.AddWithValue("@employeeId",Id);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              if (await reader.ReadAsync())
              {
               int id = Int32.Parse(reader["id"].ToString());
                int userid = Int32.Parse(reader["userid"].ToString());
                string department = reader["department"].ToString();
                string position = reader["position"].ToString();
                DateTime hiredate = Convert.ToDateTime(reader["hire_date"].ToString());
                int directorid = Int32.Parse(reader["directorid"].ToString());
                int managerid = Int32.Parse(reader["managerid"].ToString());
        
                employee = new Employee
                  {
                     Id=id,
                    UserId= userid,
                    Department=department,
                    Position=position,
                    HireDate=hiredate.ToShortDateString(),
                    DirectorId=directorid,
                    ManagerId=managerid
              };
              reader.Close();
              }
          }    
          catch(Exception e){
              throw e;
          }
          finally{
              connection.Close();
          }
          return employee;
   }
   public  async Task<bool> Insert(Employee employee)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
              string query =$"INSERT INTO employees(userid,department,position,hire_date,directorid,managerid)VALUES"+
                                                  "(@userId,@department,@position,@HireDate,@directorId,@managerId)";
             Console.WriteLine(query);
             await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@userId",employee.UserId);             
             command.Parameters.AddWithValue("@department",employee.Department);
             command.Parameters.AddWithValue("@position",employee.Position);
             command.Parameters.AddWithValue("@HireDate",employee.HireDate);
             command.Parameters.AddWithValue("@directorId",employee.DirectorId);
             command.Parameters.AddWithValue("@managerId",employee.ManagerId);
         
             await command.ExecuteNonQueryAsync(); 
             status=true;              

          }catch(Exception e )
          {
            throw e;
          }
          finally {
               con.Close();
          } 
          return status;
   }

   public async Task<bool> Update(Employee employee){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
            string query = "UPDATE employees SET userId=@userId, department=@department, position=@position, hire_date=@HireDate, directoridr=@directorId, managerid=@managerId  WHERE id=@employeeId";   
             Console.WriteLine(query);
            await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeId",employee.Id); 
             command.Parameters.AddWithValue("@userId",employee.UserId);             
             command.Parameters.AddWithValue("@department",employee.Department);
             command.Parameters.AddWithValue("@position",employee.Position);
             command.Parameters.AddWithValue("@HireDate",employee.HireDate);
             command.Parameters.AddWithValue("@directorId",employee.DirectorId);
             command.Parameters.AddWithValue("@managerId",employee.ManagerId);

             await command.ExecuteNonQueryAsync();               
             status=true;
          }catch(Exception e )
          {
            throw e;
          }
          finally {
            con.Close();
          }
          return status;
   }
   public  async Task<bool>  Delete(int Id){
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
            string query = "DELETE FROM employees WHERE id=@employeeId";
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeId",Id);
             await con.OpenAsync();
             await command.ExecuteNonQueryAsync();              
             status = true;
          }catch(Exception e )
          {
            throw e;
          }
          finally {
            con.Close();
          }
          return status;
   }

        // public async Task<IEnumerable<Employee>> GetByRole(string role)
        // {
        //   List<Employee> employees =new List<Employee>();
        //   MySqlConnection connection=new MySqlConnection(_connectionString);
        //   try{
        //       MySqlCommand command=new MySqlCommand();
        //       command.CommandText="SELECT e.id, e.firstname, e.lastname, e.birthdate, e.hiredate, e.contactnumber  FROM employees e JOIN userroles ur ON e.userid = ur.userid JOIN roles r ON ur.roleid = r.id WHERE r.role=@role";
        //       command.Connection=connection;
        //       command.Parameters.AddWithValue("@role",role);
        //       await connection.OpenAsync();
        //       MySqlDataReader reader = command.ExecuteReader();
        //       while (await reader.ReadAsync())
        //       {
        //         int id = Int32.Parse(reader["id"].ToString());
        //         string firstname = reader["firstname"].ToString();
        //         string lastname = reader["lastname"].ToString();
        //         DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
        //         DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
        //         string contactNumber=reader["contactnumber"].ToString(); 
        //      //   string img = reader["image"].ToString();
                
        
        //         Employee employee = new Employee
        //           {
        //             Id=id, 
        //             FirstName=firstname,
        //             LastName=lastname,
        //             BirthDate=birthdate.ToShortDateString(),
        //             HireDate=hiredate.ToShortDateString(),
        //             ContactNumber=contactNumber,
        //           //  Image=img,
                      
        //          };
        //          employees.Add(employee);
        //       }
        //       reader.Close();
        //   }    
        //   catch(Exception e){
        //       throw e;
        //   }
        //   finally{
        //       connection.Close();
        //   }
        //   return employees;
            
        // }
    }

   
}
