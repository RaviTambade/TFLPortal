using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace  Transflower.TFLPortal.Helpers;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorizeAttribute : Attribute, IAuthorizationFilter
{
    public  string[]  Roles { get; set; } 
    public AuthorizeAttribute(params string[] roles)
    {
        Roles = roles ;
    }
    
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
        Console.WriteLine(Roles.Length);

        if (Roles.Length==0 && userId is not null)
        {
            return;
        }

        if (userRoles is not null && Roles.Length>0)
        {
            status = Roles.Intersect(userRoles).Any();
        }

        // if (status == false || userId is null)
        // {
        //     context.Result = new JsonResult(new { message = "Unauthorized" })
        //     {
        //         StatusCode = StatusCodes.Status401Unauthorized
        //     };
        // }
    }
}
