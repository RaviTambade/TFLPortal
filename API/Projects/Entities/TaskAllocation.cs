using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.Projects.Entities;
[Table("taskallocations")]
public class TaskAllocation
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("assignedon")]
    public DateTime AssignedOn { get; set; }

    [Column("projecttaskid")]
    public int ProjectTaskId { get; set; }

    [Column("teammemberid")]
    public int TeamMemberId { get; set; }

    public TaskAllocation(){
        AssignedOn=DateTime.Now;
    }
}
