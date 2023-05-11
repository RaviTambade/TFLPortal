using HRService.Models;
using HRService.Repositories.Interfaces;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace HRService.Repositories
{
public class EmployeeRepository : IEmployeeRepository
{
  private IConfiguration _configuration;
  private string _conString;

  public EmployeeRepository(IConfiguration configuration){
      _configuration= configuration;
      _conString=this._configuration.GetConnectionString("DefaultConnection");

  }
  public List<Employee>  GetAll(){
     
        List<Employee> employees=new List<Employee>();
        MySqlConnection connection=new MySqlConnection(_conString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM employees";
            command.Connection= connection;
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["emp_id"].ToString());
                string firstname = reader["empfirst_name"].ToString();
                string lastname = reader["emplast_name"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birth_date"].ToString());
                DateTime hiredate = Convert.ToDateTime(reader["hire_date"].ToString());
                string contact=reader["contact_number"].ToString();
                string email = reader["email"].ToString();
                string password = reader["password"].ToString();
                string accountNo = reader["account_number"].ToString();
               
               Employee employee = new Employee
                {
                    Id=id,
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate,
                    HireDate=hiredate,
                    ContactNumber=contact,
                    Email=email,
                    Password=password,
                    AccountNumber=accountNo,
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


   public Employee  GetById(int Id)
   {
          Employee employee =new Employee();
          MySqlConnection connection=new MySqlConnection(_conString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM employees where emp_id=@employeeId";
              command.Connection=connection;
              command.Parameters.AddWithValue("@employeeId",Id);
              connection.Open();
              MySqlDataReader reader = command.ExecuteReader();
              if (reader.Read())
              {
                int id = Int32.Parse(reader["emp_id"].ToString());
                string firstname = reader["empfirst_name"].ToString();
                string lastname = reader["emplast_name"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birth_date"].ToString());
                DateTime hiredate = Convert.ToDateTime(reader["hire_date"].ToString());
                string contactNumber=reader["contact_number"].ToString();
                string email = reader["email"].ToString();
                string password = reader["password"].ToString(); 
                string accountNo = reader["account_number"].ToString();
        
                employee = new Employee
                  {
                    Id=id, 
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate,
                    HireDate=hiredate,
                    ContactNumber=contactNumber,
                    Email=email,
                    Password=password,
                    AccountNumber=accountNo,
                    
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
   public  bool Insert(Employee emp)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
              string query =$"INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number)VALUES"+
                                                  "(@EmpFirstName,@EmpLastName,@BirthDate,@HireDate,@ContactNumber,@Email,@Password,@AccountNumber)";
             Console.WriteLine(query);
             con.Open();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@Email",emp.Email);
             command.Parameters.AddWithValue("@Password",emp.Password);
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
         
             command.ExecuteNonQuery(); 
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

   public bool Update(Employee emp){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "UPDATE employees SET empfirst_name=@EmpFirstName, emplast_name=@EmpLastName, birth_date=@BirthDate, hire_date=@HireDate, contact_number=@ContactNumber, email=@Email, password=@Password, photo=@Photo, reports_to=@ReportsTo, account_number=@AccountNumber, dept_id=@DeptId WHERE employee_id=@EmployeeId";   
             Console.WriteLine(query);
             con.Open();
             MySqlCommand command=new MySqlCommand(query,con) ;
              command.Parameters.AddWithValue("@EmployeeId",emp.Id); 
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@Email",emp.Email);
             command.Parameters.AddWithValue("@Password",emp.Password.ToString());
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
             command.ExecuteNonQuery();               
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
   public  bool  Delete(int Id){
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "DELETE FROM employees WHERE emp_id=@employeeId";
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeId",Id);
             con.Open();
             command.ExecuteNonQuery();              
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
   }
}
