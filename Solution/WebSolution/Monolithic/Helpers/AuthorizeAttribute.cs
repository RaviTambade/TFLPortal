using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace TFLPortal.Helpers;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorizeAttribute : Attribute, IAuthorizationFilter
{
    public string? Roles { get; set; }

    public AuthorizeAttribute(string? roles)
    {
        Roles = roles;
    }

    public AuthorizeAttribute() { }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var allowAnonymous = context.ActionDescriptor.EndpointMetadata
            .OfType<AllowAnonymousAttribute>()
            .Any();

        if (allowAnonymous)
        {
            return;
        }

        string? userId = (string?)context.HttpContext.Items["userId"];
        var userRoles = (List<string>?)context.HttpContext.Items["userRoles"];
        
        bool status = false;

        if (Roles is null && userId is not null)
        {
            return;
        }

        if (userRoles is not null && Roles is not null)
        {
            List<string> requiredRoles = Roles.Split(',').ToList();
            status = requiredRoles.Intersect(userRoles).Any();
        }

        if (status == false || userId is null)
        {
            context.Result = new JsonResult(new { message = "Unauthorized" })
            {
                StatusCode = StatusCodes.Status401Unauthorized
            };
        }
    }
}
