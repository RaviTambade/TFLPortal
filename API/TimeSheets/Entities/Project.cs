using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.TimeSheets.Entities;
[Table("projects")]
public class Project
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("title")]
    public string? Title { get; set; }

    [Column("startdate")]
    public string? StartDate { get; set; }

    [Column("enddate")]
    public string? EndDate { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("teammanagerid")]
    public int TeamManagerId { get; set; }

    [Column("status")]
    public string? Status { get; set; }

    public override string ToString(){
        return Id + " "+ Title+ " "+ StartDate+ " "+TeamManagerId;
    }
}
