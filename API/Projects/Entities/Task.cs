using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Transflower.PMSApp.Projects.Entities;

[Table("tasks")]
public class Task{

    [Column("id")]
    public int Id{get;set;}

    [Column("title")]
    public string? Title{get;set;}

    [Column("description")]
    public string? Description{get;set;}
}