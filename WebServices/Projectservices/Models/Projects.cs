using System;

namespace ProjectAPI.Models;

public class Projects {

    public int ProjId{get;set;}
    public string? ProjName{get;set;}
    public string? PlanedStartDate{get;set;}
    public string? PlanedEndDate{get;set;}
    public string? ActualStartDate{get;set;}
    public string? ActualEndDate{get;set;}
    public string? Description{get;set;}


}