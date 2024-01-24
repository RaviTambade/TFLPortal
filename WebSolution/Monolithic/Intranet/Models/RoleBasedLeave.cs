namespace Transflower.TFLPortal.Intranet.Models;

namespace Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

public class RoleBasedLeave
{
    public int RoleBasedLeaveId { get; set; }
    public Role Role { get; set; } //RoleId
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
    public int FinancialYear { get; set; }
}
