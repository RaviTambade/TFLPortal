using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace TFLPortal.Helpers
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly JwtSettings _JwtSettings;

        public JwtMiddleware(RequestDelegate next, IOptions<JwtSettings> JwtSettings)
        {
            _next = next;
            _JwtSettings = JwtSettings.Value;
        }

        public async Task Invoke(HttpContext context)   
        {
            string? token = context.Request.Headers["Authorization"]
                .FirstOrDefault()
                ?.Split(" ")
                .Last();
            if (token != null)
                AttachUserToContext(context, token);
            await _next(context);
        }

        private void AttachUserToContext(HttpContext context, string token)
        {
            try
            {
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] key = Encoding.ASCII.GetBytes(_JwtSettings.Secret);
                tokenHandler.ValidateToken(
                    token,
                    new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ClockSkew = TimeSpan.Zero
                    },
                    out SecurityToken validatedToken
                );

                JwtSecurityToken jwtToken = (JwtSecurityToken)validatedToken;
                string contactNumber = jwtToken.Claims.First(x => x.Type == "contactNumber").Value;

                string userId = jwtToken.Claims.First(x => x.Type == "nameid").Value;
                List<string> userRoles = jwtToken.Claims
                    .Where(x => x.Type == "role")
                    .Select(c => c.Value)
                    .ToList();
        
            //  After Token Validation set the required claims in HttpContext
                context.Items["userId"] = userId;
                context.Items["contactNumber"] = contactNumber;
                context.Items["userRoles"] = userRoles;
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception" + e);
            }
        }
    }
}
