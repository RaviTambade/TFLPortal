using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.TimeSheets.Entities;

[Table("tasks")]
public class Task{

    [Column("id")]
    public int Id{get;set;}

    [Column("title")]
    public string? Title{get;set;}

    [Column("projectid")]
    public int ProjectId{get;set;}

    [Column("description")]
    public string? Description{get;set;}

    [Column("status")]
    public string? Status{get;set;}

    [Column("date")]
    public DateTime Date{get;set;}

    [Column("fromtime")]
    public DateTime FromTime{get;set;}

    [Column("totime")]
    public DateTime ToTime{get;set;}
}