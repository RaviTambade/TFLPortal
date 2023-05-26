using System;
namespace PMS.Models;
public class TeamMember
{  
    public int Id {get;set;}
    public int TeamId{ get; set; }
    public int RoleId{ get; set; }
    public int EmpId{ get; set; }

   
}