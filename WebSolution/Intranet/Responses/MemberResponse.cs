
using Transflower.TFLPortal.TFLSAL.DTO;

public class MemberResponse:UserDetailsDTO
{
    public int MemberId { get; set; }
    public string? Membership { get; set; }
    public DateTime MembershipDate { get; set; }
}
