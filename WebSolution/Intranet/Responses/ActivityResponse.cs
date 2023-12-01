using System.Diagnostics;

namespace Transflower.TFLPortal.Intranet.Responses;

public class ActivityResponse:Transflower.TFLPortal.TFLOBL.Entities.Activity{
    public string? AssignedToEmployee{get;set;}
    public string? AssignedByEmployee{get;set;}
    public string? ProjectName{get;set;}
}