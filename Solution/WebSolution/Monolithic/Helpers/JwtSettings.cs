using System.ComponentModel.DataAnnotations;

namespace TFLPortal.Helpers;

public class JwtSettings
{
    [Required]
    public required  string Secret { get; init; }
}
