using TFLPortal.Models;

namespace TFLPortal.Repositories.HRMgmt.Operations;

public interface IHROperationsRepository
{
    void AddEntry(InOutTimeRecord timeRecord); 

}