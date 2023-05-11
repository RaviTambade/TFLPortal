using System;

namespace ProjectAPI.Models;

public class Projects {

    public int ProjId{get;set;}
    public string? ProjName{get;set;}
    public DateTime PlanedStartDate{get;set;}
    public DateTime PlanedEndDate{get;set;}
    public DateTime ActualStartDate{get;set;}
    public DateTime ActualEndDate{get;set;}
    public string? Description{get;set;}


}