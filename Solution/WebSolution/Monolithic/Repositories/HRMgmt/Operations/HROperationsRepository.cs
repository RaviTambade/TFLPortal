using System.Text.Json;
using Transflower.TFLPortal.Helpers;
using  Transflower.TFLPortal.Entities.HRMgmt;
using TFLPortal.Responses;
using Transflower.TFLPortal.Repositories.HRMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Repositories.HRMgmt.Operations;

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
