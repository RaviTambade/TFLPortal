using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.TimeSheets.Entities;
[Table("timesheets")]
public class TimeSheet
{
    [Column("id")]
    public int Id { get; set; }

    [Column("date")]
    public DateTime Date { get; set; }

    [Column("fromtime")]
    public TimeSpan? FromTime { get; set; }

    [Column("totime")]
    public TimeSpan? ToTime { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("status")]
    public string? Status { get; set; }

    [Column("taskallocationid")]
    public int TaskAllocationId { get; set; }
}