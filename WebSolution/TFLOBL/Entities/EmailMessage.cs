namespace Transflower.TFLPortal.TFLOBL.Entities;


public class EmailMessage
{
    public List<string> To { get; set; }
    public string Subject { get; set; }
    public string Body { get; set; }
    public List<string> Filepaths { get; set; }

    public EmailMessage(List<string> to, string subject, string body, List<string> filepaths)
    {
        To = to;
        Subject = subject;
        Body = body;
        Filepaths = filepaths;
    }
}
