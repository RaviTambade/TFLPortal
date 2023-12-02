
namespace Transflower.TFLPortal.TFLSAL.DTO;

public class UserDTO
{
    public int Id { get; set; }
    public string? ImageUrl { get; set; }
    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public DateOnly BirthDate { get; set; }

    public string? AadharId { get; set; }

    public string? Gender { get; set; }

    public string? Email { get; set; }

    public string? ContactNumber { get; set; }

    public string? Password { get; set; }

    public DateTime CreatedOn  { get; set; }

    public DateTime ModifiedOn{ get; set; }
}
