using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using Transflower.MembershipRolesMgmt.Models.Entities;
using Transflower.TFLPortal.TFLOBL.DTO;
using Transflower.TFLPortal.TFLSAL.DTO;
using static System.Net.Mime.MediaTypeNames;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ExternalApiService
{
    private readonly HttpClient httpClient;

    public ExternalApiService(IHttpClientFactory factory)
    {
        httpClient = factory.CreateClient();
    }


    public async Task<User?> GetUser(int userId)
    {
        var response = await httpClient.GetFromJsonAsync<User>(
            $"http://localhost:5142/api/users/{userId}"
        );
        return response;
    }

    public async Task<BankAccount?> GetUserBankAccount(int userId, string userType)
    {
        var response = await httpClient.GetFromJsonAsync<BankAccount>(
            $"http://localhost:5053/api/accounts/details/{userId}/{userType}"
        );
        return response;
    }

    public async Task<int> FundTransfer(FundTransferRequest request)
    {
        var requestJson = new StringContent(
            JsonSerializer.Serialize(request),
            Encoding.UTF8,
            Application.Json
        );

        var url = "http://localhost:5001/api/fundstransfer";
        HttpResponseMessage response = await httpClient.PostAsync(url, requestJson);
        int transactionId = 0;
        if (response.IsSuccessStatusCode)
        {
            transactionId = await response.Content.ReadFromJsonAsync<int>();
        }
        return transactionId;
    }

    public async Task<List<User>> GetUserDetails(string userIds)
    {
        var response = await httpClient.GetFromJsonAsync<List<User>>(
            $"http://localhost:5142/api/users/name/{userIds}"
        );
        return response;
    }

     public async Task<List<Role>> GetRoleOfUser(int userId)
    {
        string lob="PMS";
        var response = await httpClient.GetFromJsonAsync<List<Role>>(
            $"http://localhost:5142/api/roles/{userId}/{lob}"
        );
        return response ?? new List<Role>();
    }
}
