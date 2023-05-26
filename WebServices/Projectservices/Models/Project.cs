using System;

namespace ProjectAPI.Models;

public class Project {
    public int Id{get;set;}
    public string? Name{get;set;}
    public string? StartDate{get;set;}
    public string? EndDate{get;set;}
    public string? Description{get;set;}
    public int TeamId { get;set;}

    //public List<TeamMember> Members { get;set;}

}