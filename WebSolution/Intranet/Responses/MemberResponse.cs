using Transflower.TFLPortal.Intranet.Responses;

public class MemberResponse:UserDetailResponse
{
    public int MemberId { get; set; }
    public string? Membership { get; set; }
    public DateTime MembershipDate { get; set; }
}
