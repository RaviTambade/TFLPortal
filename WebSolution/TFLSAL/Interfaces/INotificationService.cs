using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;


public interface INotificationService
{
    Task SendEmail(EmailMessage message);
}