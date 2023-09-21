namespace Transflower.PMSApp.TimeSheets.Models;
public class TimeSheetDetail{
    public int TimeSheetId{get;set;}
    public DateTime? Date{get;set;}
    public TimeSpan? FromTime{get;set;}
    public TimeSpan? ToTime{get;set;}
    public string? Description{get;set;}
    public string? Status{get;set;}
    public string? TaskTitle{get;set;}
}