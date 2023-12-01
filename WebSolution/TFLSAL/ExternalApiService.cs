
using System.Net.Http.Json;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class ExternalApiService 
{
    private readonly HttpClient httpClient;

    public ExternalApiService(IHttpClientFactory factory)
    {
        this.httpClient = factory.CreateClient();
    }

    //   private async Task<List<UserDetailResponse>> GetUsersFromService(string userIds)
    // {
       
    //     var response = await httpClient.GetFromJsonAsync<List<UserDetailResponse>>(
    //         $"http://localhost:5142/api/users/name/{userIds}"
    //     );
    //     return response;
    // }

public async Task<bool> GetData (){
      var response = await httpClient.GetFromJsonAsync<object>(
            $"http://localhost:5142/api/users"
        );
        Console.WriteLine(response);
        return true;
}

}
