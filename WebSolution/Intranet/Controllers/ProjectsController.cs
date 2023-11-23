using Microsoft.AspNetCore.Mvc;

namespace Intranet.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public ProjectsController(ILogger<public class ProjectsController : ControllerBase> logger)
    {
        _logger = logger;
    }
    
}
