using System.Text.Json;
using TFLPortal.Models;

namespace TFLPortal.Services.HRMgmt.Operations;

public class HROperationsService : IHROperationsService
{
    private static string jsonFile = "inout.json";

    public void AddEntry(InOutTimeRecord timeRecord)
    {
        var searlizedData = JsonSerializer.Serialize(timeRecord);
        File.AppendAllText(jsonFile, searlizedData);
    }

   
}
