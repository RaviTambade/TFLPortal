using System.ComponentModel.DataAnnotations;

namespace Transflower.TFLPortal.Helpers;

public class JwtSettings
{
    [Required]
    public required  string Secret { get; init; }
}
