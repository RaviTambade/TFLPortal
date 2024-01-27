namespace TFLPortal.Responses;

public class SprintTaskCountResponse
{
    public required int ProjectId { get; set; }
    public required string ProjectName { get; set; }
    public required double Hours { get; set; }
}
