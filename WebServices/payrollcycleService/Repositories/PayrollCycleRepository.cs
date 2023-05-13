using PMS.Models;
using PMS.Repositories.Interfaces;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace PMS.Repositories;

public class PayRollCycleRepository : IPayRollCycleRepository
{


    private IConfiguration _configuration;
    private string _conString;

    public PayRollCycleRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
    }


    public List<PayRollCycle> GetAll()
    {
        List<PayRollCycle> payrolls = new List<PayRollCycle>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "select * from payrollCycles";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();

            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                int payRollId = Int32.Parse(reader["payroll_cycle_id"].ToString());
                int payRollNumber = Int32.Parse(reader["payroll_cycle_number"].ToString());
                 DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());
                 DateTime enddate = Convert.ToDateTime(reader["end_date"].ToString());
                 DateTime depositdate = Convert.ToDateTime(reader["deposit_date"].ToString());
                 DateTime payrollcycleyear = Convert.ToDateTime(reader["payroll_cycle_year"].ToString());


                PayRollCycle payroll = new PayRollCycle
                {
                   PayrollCycleId=payRollId,
                   PayrollCycleNumber=payRollNumber,
                   StartDate=startdate,
                   EndDate=enddate,
                   DepositDate=depositdate,
                   PayrollCycleYear=payrollcycleyear
                };

                payrolls.Add(payroll);

            }
            reader.Close();
        }
        catch (Exception ee)
        {
            throw ee;
        }

        finally
        {
            connection.Close();
        }


        return payrolls;
    }

    public PayRollCycle GetById(int id)
    {

        PayRollCycle payroll = new PayRollCycle();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "select * from payrollCycles where payroll_cycle_id =" + id;
            MySqlCommand cmd = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {


                 int payRollId = Int32.Parse(reader["payroll_cycle_id"].ToString());
                 int payRollNumber = Int32.Parse(reader["payroll_cycle_number"].ToString());
                 DateTime startdate = Convert.ToDateTime(reader["start_date"].ToString());
                 DateTime enddate = Convert.ToDateTime(reader["end_date"].ToString());
                 DateTime depositdate = Convert.ToDateTime(reader["deposit_date"].ToString());
                 DateTime payrollcycleyear = Convert.ToDateTime(reader["payroll_cycle_year"].ToString());

                payroll = new PayRollCycle()
                {
                   
                   PayrollCycleId=payRollId,
                   PayrollCycleNumber=payRollNumber,
                   StartDate=startdate,
                   EndDate=enddate,
                   DepositDate=depositdate,
                   PayrollCycleYear=payrollcycleyear

                };
            }
            reader.Close();
        }
        catch (Exception ee)
        {

            throw ee;

        }

        finally
        {
            connection.Close();
        }

        return payroll;
    }


    public bool InsertPayRoll(PayRollCycle payroll)
    {

        bool status = false;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;

        try
        {
            string query = "Insert into payrollCycles(payroll_cycle_id,payroll_cycle_number,start_date,end_date,deposit_date,payroll_cycle_year) values (@payrollcycleid,@payrollcyclenumber,@startdate,@enddate,@depositdate,@payrollcycleyear)";
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@payrollcycleid", payroll.PayrollCycleId);
            cmd.Parameters.AddWithValue("@payrollcyclenumber", payroll.PayrollCycleNumber);
            cmd.Parameters.AddWithValue("@startdate", payroll.StartDate);
            cmd.Parameters.AddWithValue("@enddate", payroll.EndDate);
            cmd.Parameters.AddWithValue("@depositdate", payroll.DepositDate);
            cmd.Parameters.AddWithValue("@payrollcycleyear", payroll.PayrollCycleYear);
         
            con.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
            if (rowsaffected > 0)
            {

                status = true;
            }
        }

        catch (Exception ee)
        {

            throw ee;
        }

        finally
        {

            con.Close();
        }

        return status;

    }

    public bool UpdatePayRoll(PayRollCycle payroll)
    {

        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {
            string query = "UPDATE payrollCycles SET payroll_cycle_number=@payrollcyclenumber,start_date=@startdate,end_date=@enddate,deposit_date=@depositdate ,payroll_cycle_year=@payrollcycleyear WHERE payroll_cycle_id=@payrollcycleid";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@payrollcycleid", payroll.PayrollCycleId);
            cmd.Parameters.AddWithValue("@payrollcyclenumber", payroll.PayrollCycleNumber);
            cmd.Parameters.AddWithValue("@startdate", payroll.StartDate);
            cmd.Parameters.AddWithValue("@enddate", payroll.EndDate);
            cmd.Parameters.AddWithValue("@depositdate", payroll.DepositDate);
            cmd.Parameters.AddWithValue("@payrollcycleyear", payroll.PayrollCycleYear);
            connection.Open();
            int rowsaffected = cmd.ExecuteNonQuery();
            if (rowsaffected > 0)
            {
                status = true;
            }

        }

        catch (Exception ee)
        {

            throw ee;

        }

        finally
        {

            connection.Close();
        }
        return status;
    }


    public bool DeletePayRoll(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _conString;
        try
        {

            string query = "delete from payrollCycles where payroll_cycle_id=@payrollcycleid";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@payrollcycleid", id);
            connection.Open();
            int rowsaffected = command.ExecuteNonQuery();
            if (rowsaffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {

            throw ee;
        }

        finally
        {
            connection.Close();
        }
        return status;
    }

  
}