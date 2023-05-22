using AuthenticationService.Models;
using AuthenticationService.Repositories.Interfaces;
using AuthenticationService.Services.Interfaces;

namespace AuthenticationService.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userrepo;
        public UserService(IUserRepository userrepo)
        {
            _userrepo = userrepo;
        }
        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest request)
        {
            return await _userrepo.Authenticate(request);
        }
        public async Task<List<User>> GetAll()
        {
            return await _userrepo.GetAll();
        }
    }
}