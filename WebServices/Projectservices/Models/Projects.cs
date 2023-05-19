using System;

namespace ProjectAPI.Models;

public class Projects {

    public int ProjId{get;set;}
    public string? ProjName{get;set;}
    public string? StartDate{get;set;}
    public string? EndDate{get;set;}
    public string? Description{get;set;}
    public int TeamId{get;set;}


}