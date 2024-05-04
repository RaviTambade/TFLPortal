using System.Text.Json;
using TFLPortal.Helpers;
using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Repositories.HRMgmt.Operations;

public class HROperationsRepository : IHROperationsRepository
{
    private static string fileName = "inout.json";

    public void AddEntry(InOutTimeRecord timeRecord)
    {

       JsonRepositoryManager manager=new JsonRepositoryManager();
        List<InOutTimeRecord> records=manager.DeSerialize<List<InOutTimeRecord>>(fileName);
        records.Add(timeRecord);
        manager.Serialize(records,fileName);

        // var searlizedData = JsonSerializer.Serialize(timeRecord);
        // File.AppendAllText(jsonFile, searlizedData);
    }

   
}
