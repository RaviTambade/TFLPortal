using System.Net.Http.Json;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Helper;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public class NotificationService : INotificationService
{
    private readonly EmailConfiguration _emailConfig;


    public NotificationService(IOptions<EmailConfiguration> emailConfig)
    {
        _emailConfig = emailConfig.Value;
    }

    public async Task SendEmail(EmailMessage message)
    {
        var emailMessage = await CreateEmailMessage(message);

        await Send(emailMessage);
    }

    private async Task<MimeMessage> CreateEmailMessage(EmailMessage message)
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
                Content = new MimeContent(System.IO.File.OpenRead("wwwroot/"+filepath)),
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
