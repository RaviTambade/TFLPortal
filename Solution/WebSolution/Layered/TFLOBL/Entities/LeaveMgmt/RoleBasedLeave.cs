﻿namespace Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;

public class RoleBasedLeave
{
    public int Id { get; set; }
    public int RoleId { get; set; }
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
    public int FinancialYear { get; set; }
}
