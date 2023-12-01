// using System;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Requests;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using System.Text.Json;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class EmployeesController : ControllerBase
{
    private readonly IEmployeeService _service;
    private readonly IHttpClientFactory _httpClientFactory;

    public EmployeesController(IEmployeeService service, IHttpClientFactory httpClientFactory)
    {
        _service = service;
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet("employee/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeDetails(employeeId);
        var user = await GetUser(employee.UserId);
        EmployeeResponse emp = new EmployeeResponse()
        {
            HireDate=employee.HireDate,
            Salary = employee.Salary,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Gender = user.Gender,
            Email= user.Email,
            ContactNumber = user.ContactNumber
        };
        return emp;
    }

    [HttpPost("employee/salary/{employeeId}")]
    public async Task<bool> PaySalary(int employeeId)
    {
        Employee employee = await _service.GetEmployeeDetails(employeeId);
        var userAccount = await GetUserAccount(employee.UserId,"I");
        FundTransferRequest request = new FundTransferRequest()
        {
            FromAcct="39025546601",
            FromIfsc ="MAHB0000286",
            ToAcct = userAccount.AccountNumber,
            ToIfsc = userAccount.IFSCCode,
            Amount = employee.Salary,
            TransactionType ="Transfer"

        };
        var transactionId = await FundTransfer(request);
        Console.WriteLine(transactionId);
        return transactionId >0;    
        }
    

    
    //External data Access Helper functions
    private async Task<User> GetUser(int userId)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var response = await httpClient.GetFromJsonAsync<User>(
            $"http://localhost:5142/api/users/{userId}"
        );
        return response;
    }

    

    private async Task<BankAccount> GetUserAccount(int userId,string userType)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var response = await httpClient.GetFromJsonAsync<BankAccount>(
        $"http://localhost:5053/api/accounts/details/{userId}/{userType}"
        );
        return response;
    }

    [HttpPost]
    private async Task<int> FundTransfer(FundTransferRequest request)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var requestJson =new StringContent(
            JsonSerializer.Serialize(request),
            Encoding.UTF8,
            Application.Json);

        // int Response =await httpClient.PostAsync("http://localhost:5001/api/fundstransfer",requestJson);
        var url ="http://localhost:5001/api/fundstransfer";
        HttpResponseMessage response = await httpClient.PostAsync(url, requestJson);
        int result = (int)response.StatusCode;
         return result;
    }
}
