

using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.Intranet.Responses;

public class ActivityResponse:Activity{
    public string? AssignedToEmployee{get;set;}
    public string? AssignedByEmployee{get;set;}
    public string? ProjectName{get;set;}
}