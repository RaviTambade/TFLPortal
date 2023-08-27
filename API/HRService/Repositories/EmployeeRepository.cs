
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
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate = Convert.ToDateTime(reader["hiredate"].ToString());
                string contact=reader["contactnumber"].ToString();
                int userId = Int32.Parse(reader["userid"].ToString());
               
               Employee employee = new Employee
                {
                    Id=id,
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contact,
                    UserId= userId
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
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
                string contactNumber=reader["contactnumber"].ToString(); 
              //  string img = reader["image"].ToString();
                int userId = Int32.Parse(reader["userid"].ToString());
        
                employee = new Employee
                  {
                    Id=id, 
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contactNumber,
                 //   Image=img,
                    UserId=userId     
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
              string query =$"INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,userid)VALUES"+
                                                  "(@employeeFirstName,@employeeLastName,@employeeBirthDate,@employeeHireDate,@employeeContactNumber,@userId)";
             Console.WriteLine(query);
             await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeFirstName",employee.FirstName);             
             command.Parameters.AddWithValue("@employeeLastName",employee.LastName);
             command.Parameters.AddWithValue("@employeeBirthDate",employee.BirthDate);
             command.Parameters.AddWithValue("@employeeHireDate",employee.HireDate);
             command.Parameters.AddWithValue("@employeeContactNumber",employee.ContactNumber);
            // command.Parameters.AddWithValue("@employeeimage",employee.Image);
             command.Parameters.AddWithValue("@userId",employee.UserId);
         
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
            string query = "UPDATE employees SET firstname=@employeeFirstName, lastname=@employeeLastName, birthdate=@employeeBirthDate, hiredate=@employeeHireDate, contactnumber=@employeeContactNumber, userid=@userId  WHERE id=@employeeId";   
             Console.WriteLine(query);
            await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
              command.Parameters.AddWithValue("@employeeId",employee.Id); 
             command.Parameters.AddWithValue("@employeeFirstName",employee.FirstName);             
             command.Parameters.AddWithValue("@employeeLastName",employee.LastName);
             command.Parameters.AddWithValue("@employeeBirthDate",employee.BirthDate);
             command.Parameters.AddWithValue("@employeeHireDate",employee.HireDate);
             command.Parameters.AddWithValue("@employeeContactNumber",employee.ContactNumber);
            // command.Parameters.AddWithValue("@image",employee.Image);
             command.Parameters.AddWithValue("@userId",employee.UserId);

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

        public async Task<IEnumerable<Employee>> GetByRole(string role)
        {
          List<Employee> employees =new List<Employee>();
          MySqlConnection connection=new MySqlConnection(_connectionString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT e.id, e.firstname, e.lastname, e.birthdate, e.hiredate, e.contactnumber  FROM employees e JOIN userroles ur ON e.userid = ur.userid JOIN roles r ON ur.roleid = r.id WHERE r.role=@role";
              command.Connection=connection;
              command.Parameters.AddWithValue("@role",role);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              while (await reader.ReadAsync())
              {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
                string contactNumber=reader["contactnumber"].ToString(); 
             //   string img = reader["image"].ToString();
                
        
                Employee employee = new Employee
                  {
                    Id=id, 
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contactNumber,
                  //  Image=img,
                      
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
    }

   
}
