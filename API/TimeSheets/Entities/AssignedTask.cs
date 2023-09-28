using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Transflower.PMSApp.TimeSheets.Entities;

[Table("assignedtasks")]
public class AssignedTask
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("assignedon")]
    public DateTime AssignedOn { get; set; }

    [Column("taskid")]
    public int TaskId { get; set; }

    [Column("teammemberid")]
    public int TeamMemberId { get; set; }

    public AssignedTask()
    {
        AssignedOn = DateTime.Now;
    }
}
