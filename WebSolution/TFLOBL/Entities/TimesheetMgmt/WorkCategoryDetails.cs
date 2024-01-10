namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

public class WorkCategoryDetails
{
    public double UserStory { get; set; }

    public double Task { get; set; }   

    public double Bug { get; set; }

    public double Issues { get; set; }

    public double Meeting { get; set; }

    public double Learning { get; set; }

    public double Mentoring { get; set; }

    public double ClientCall { get; set; }
    public double Other { get; set; }
    public string? Label { get; set; }
}
