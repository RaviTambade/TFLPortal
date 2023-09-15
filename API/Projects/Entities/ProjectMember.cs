using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.Projects.Entities;

[Table("projectmembers")]
public class ProjectMember{

    [Column("id")]
    public int Id{get;set;}

    [Column("projectid")]
    public int ProjectId{get;set;}

    [Column("teammemberid")]
    public int TeamMemberId{get;set;}
}