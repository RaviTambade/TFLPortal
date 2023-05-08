using UserServices.Models;
using UserServices.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace UserServices.Repositories;

public class UserRepository:IUserRepository{


    public string conString="server=localhost; user=root; port=3306; password=password; database=PMS ";
    public  List<User> GetAllUsers(){
        List<User> users = new List<User>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=conString;
       try
       {
        string query = "select * from users";
        MySqlCommand cmd = new MySqlCommand(query, connection);
        connection.Open();
        
        MySqlDataReader reader= cmd.ExecuteReader();
        while(reader.Read()){
            int id = Int32.Parse(reader["user_id"].ToString());
            string email= reader["email"].ToString();
            string password= reader["password"].ToString();
            string contactNumber= reader["contact_number"].ToString();
        
         
         User user = new User{
            UserId = id,
            Email= email,
            Password=password,
            ContactNumber= contactNumber, 
         };

         users.Add(user);
        
       }
        reader.Close();
       }
       catch(Exception ee){
        throw ee;
       }
        
        finally{
       connection.Close();
        }
 
    
    return users;
    }



    public User GetById(int id){

        User user= new User();
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=conString;
        try{

        string query= "select * from users where user_id ="+id;
         MySqlCommand cmd = new MySqlCommand(query,connection);
         connection.Open();
         MySqlDataReader reader = cmd.ExecuteReader();
         if(reader.Read()){


            string email= reader["email"].ToString();
            string password= reader["password"].ToString();
            string contactNumber= reader["contact_number"].ToString();
         
             user = new User(){
                UserId=id,
                Email= email,
                Password=password,
                ContactNumber=contactNumber

             };
           }
            reader.Close();
        }
        catch(Exception ee){

            throw ee;

        }

        finally{
           connection.Close();
        }
      
       return user;
    }


      public bool InsertUser(User user){

        bool status= false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString=conString;

        try{
            string query="Insert into users(email,password,contact_number) values (@email,@password,@contact_number)";
            MySqlCommand cmd =new MySqlCommand(query,con);
            cmd.Parameters.AddWithValue("@email",user.Email);
            cmd.Parameters.AddWithValue("@password",user.Password);
            cmd.Parameters.AddWithValue("@contact_number",user.ContactNumber);
        con.Open();
        int rowsaffected=cmd.ExecuteNonQuery();
        if(rowsaffected>0){

            status=true;
        }
        }

        catch(Exception ee){

            throw ee;
        }

        finally{

            con.Close();
          }

          return status;

      }

      public bool UpdateUser(User user){

        bool status= false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=conString;
        try{
            string query= "UPDATE users SET email=@email,password=@password,contact_number=@contact_number WHERE user_id=@userId";
            MySqlCommand command = new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@userId",user.UserId);
            command.Parameters.AddWithValue("@email",user.Email);
            command.Parameters.AddWithValue("@password",user.Password);
            command.Parameters.AddWithValue("@contact_number",user.ContactNumber);
             connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
            if(rowsaffected>0){
                status=true;
            }

        }
        
        catch(Exception ee){

            throw ee;

        }

        finally{

            connection.Close();
        }
           return status;
      }


      public bool DeleteUser(int id){
        bool status = false;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=conString;
        try{

            string query= "delete from users where user_id=@userId";
            MySqlCommand command= new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@userId",id);
            connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
            if(rowsaffected>0){
                status=true;
            }
        }
        catch(Exception ee){

            throw ee;
        }

        finally{
            connection.Close();
        }
        return status;
      }
}