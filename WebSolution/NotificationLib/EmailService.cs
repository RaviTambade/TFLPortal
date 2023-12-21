using MailKit.Net.Smtp;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Transflower.Notifications.Mail;

public  class EmailService
{
    private readonly EmailConfiguration _emailConfig;


    public EmailService(IOptions<EmailConfiguration> emailConfig)
    {
        _emailConfig = emailConfig.Value;
    }

    public async Task SendEmail(Message message)
    {
        var emailMessage = await CreateEmailMessage(message);

        await Send(emailMessage);
    }

    private async Task<MimeMessage> CreateEmailMessage(Message message)
    {
        var emailMessage = new MimeMessage();
        emailMessage.From.Add(new MailboxAddress("TFLPORTAL", _emailConfig.From));
        emailMessage.To.AddRange(message.To.Select(x => new MailboxAddress(x, x)));
        emailMessage.Subject = message.Subject;

        Multipart multipart = new Multipart("mixed");

        TextPart body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = message.Body };
        

        //sending file present on local server
        foreach (var filepath in message.Filepaths)
        {
            MimePart attachment = new MimePart("application", "octet-stream")
            {
                Content = new MimeContent(System.IO.File.OpenRead(filepath)),
                ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                ContentTransferEncoding = ContentEncoding.Base64,
                FileName = filepath.Split('/').Last()
            };
            multipart.Add(attachment);
        }
        multipart.Add(body);
        emailMessage.Body = multipart;
        return emailMessage;
    }

    private async Task Send(MimeMessage mailMessage)
    {
        using (var client = new SmtpClient())
        {
            try
            {
                await client.ConnectAsync(_emailConfig.SmtpServer, _emailConfig.Port, true);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                await client.AuthenticateAsync(_emailConfig.UserName, _emailConfig.Password);

                await client.SendAsync(mailMessage);
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                await client.DisconnectAsync(true);
                client.Dispose();
            }
        }
    }
}
