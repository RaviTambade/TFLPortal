using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using Transflower.TFLPortal.TFLSAL.DTO;
using static System.Net.Mime.MediaTypeNames;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ExternalApiService
{
    private readonly HttpClient httpClient;

    public ExternalApiService(IHttpClientFactory factory)
    {
        this.httpClient = factory.CreateClient();
    }

    public async Task<UserDTO?> GetUser(int userId)
    {
        var response = await httpClient.GetFromJsonAsync<UserDTO>(
            $"http://localhost:5142/api/users/{userId}"
        );
        return response;
    }

    public async Task<BankAccountDTO?> GetUserBankAccount(int userId, string userType)
    {
        var response = await httpClient.GetFromJsonAsync<BankAccountDTO>(
            $"http://localhost:5053/api/accounts/details/{userId}/{userType}"
        );
        return response;
    }

    public async Task<int> FundTransfer(FundTransferRequestDTO request)
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

    public async Task<List<UserDetailsDTO?>> GetUserDetails(string userIds)
    {
        var response = await httpClient.GetFromJsonAsync<List<UserDetailsDTO>>(
            $"http://localhost:5142/api/users/name/{userIds}"
        );
        return response;
    }
}
