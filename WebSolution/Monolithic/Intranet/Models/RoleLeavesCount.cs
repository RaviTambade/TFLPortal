namespace TFLPortal.Models;

public class RoleLeavesCount
{
    public int Id { get; set; }
    public int RoleId { get; set; } //RoleId
    public int Year { get; set; }
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
}
