using System;
namespace Transflower.PMS.ProjectAPI.Models;
public class ProjectMember
{  
    public int Id {get;set;}
    public int ProjectId{ get; set; }
    public int TeammemberId{get;set;}
}