namespace Transflower.TFLPortal.TFLOBL.Entities;

public class Member
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int EmployeeId { get; set; }
    public string? Membership { get; set; }
    public DateTime MembershipDate { get; set; }

    //Navigational property
    public Employee? Employee{get;set;}

}
