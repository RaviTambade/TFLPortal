using System.Text.Json;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Entities.HRMgmt;
using Transflower.TFLPortal.Repositories.HRMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.HRMgmt.Operations.Interfaces;
namespace Transflower.TFLPortal.Services.HRMgmt.Operations;

public class HROperationsService : IHROperationsService
{
    private static string fileName = "inout.json";

    private readonly IHROperationsRepository _repository;

    public HROperationsService(IHROperationsRepository repository) {
        _repository = repository;
    }

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
