using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ILeaveApplicationService{

    Task<bool> AddLeave(Leave leave);

}