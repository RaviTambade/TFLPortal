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
[Route("/api/projectmgmt/members")]
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


    private async Task<List<UserDetailResponse>> GetUsersFromService(string userIds)
    {
        var httpClient = _httpClientFactory.CreateClient();
        var response = await httpClient.GetFromJsonAsync<List<UserDetailResponse>>(
            $"http://localhost:5142/api/users/name/{userIds}"
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

    [HttpPost("addmember")]
    public async Task<bool> AssignMemberToProject(Member member)
    {
        bool status= await _service.AssignMemberToProject(member);
        return status;
    }

    [HttpDelete("delete")]
    public async Task<bool> DeleteMemberFromProject(int id)
    {
        bool status= await _service.DeleteMemberFromProject(id);
        return status;
    }
}
