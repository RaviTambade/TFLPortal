namespace Transflower.Notifications.Mail;

public class Message
{
    public required List<string> To { get; set; }
    public required string Subject { get; set; }
    public required string Body { get; set; }
    public required List<string> Filepaths { get; set; }
}
