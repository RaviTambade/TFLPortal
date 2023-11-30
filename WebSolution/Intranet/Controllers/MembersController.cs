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
[Route("/api/members")]
public class MembersController : ControllerBase
{
    private readonly IMemberService _service;
    private readonly IHttpClientFactory _httpClientFactory;

    public MembersController(IMemberService service, IHttpClientFactory httpClientFactory)
    {
        _service = service;
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet("projects/{projectId}")]
    public async Task<List<MemberResponse>> GetProjectMembers(int projectId)
    {
        var members = await _service.GetProjectMembers(projectId);
        var userIds = string.Join(',', members.Select(m => m.Employee.UserId).ToList());
        var users = await GetUsersFromService(userIds);
        List<MemberResponse> membersResponse = new();
        foreach (var member in members)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == member.Employee.UserId);
            if (userDetail != null)
            {
                var memberResponse = new MemberResponse
                {
                    FullName = userDetail.FullName,
                    MemberId = member.Id,
                    Membership = member.Membership,
                    MembershipDate = member.MembershipDate,
                    ImageUrl = userDetail.ImageUrl
                };
                membersResponse.Add(memberResponse);
            }
        }
        return membersResponse;
    }

    [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<MemberResponse> GetMember(int projectId, int employeeId)
    {
        var member = await _service.GetMember(projectId, employeeId);
        var users = await GetUsersFromService(member.Employee.UserId.ToString());

        MemberResponse memberResponse = new MemberResponse()
        {
            MemberId = member.Id,
            Membership = member.Membership,
            MembershipDate = member.MembershipDate,
            FullName = users[0].FullName,
            ImageUrl = users[0].ImageUrl,
        };

        return memberResponse;
    }



    [HttpGet("employees/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeDetails(employeeId);
        var user = await GetUser(employee.UserId);
        EmployeeResponse emp = new EmployeeResponse()
        {
            Id = employee.EmployeeId,
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
    
    private async Task<User> GetUser(int userId)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var response = await httpClient.GetFromJsonAsync<User>(
            $"http://localhost:5142/api/users/{userId}"
        );
        return response;
    }

    private async Task<List<UserDetailResponse>> GetUsersFromService(string userIds)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var response = await httpClient.GetFromJsonAsync<List<UserDetailResponse>>(
            $"http://localhost:5142/api/users/name/{userIds}"
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

        var url ="http://localhost:5001/api/fundstransfer";
        HttpResponseMessage response = await httpClient.PostAsync(url, requestJson);
        int result = (int)response.StatusCode;
        return result;
    }
}
