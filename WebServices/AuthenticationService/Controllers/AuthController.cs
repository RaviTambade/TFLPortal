using AuthenticationService.Models;
using AuthenticationService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AuthenticationService.Controllers
{

    [ApiController]
    [Route("/api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _svc;
        public AuthController(IUserService svc)
        {
            _svc = svc;
        }

        [HttpPost("authenticate")] 
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest request)
        {
            var user =await _svc.Authenticate(request);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            return Ok(user);
        }

        
        [HttpGet("getall")]  
        public async Task<IEnumerable<User>> GetAll()
        {
            var users = _svc.GetAll();
            return await users;
        }
    }
}