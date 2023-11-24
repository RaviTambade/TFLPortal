using Microsoft.Extensions.DependencyInjection;
using Transflower.TFLPortal.TFLDAL.Repositories;
using Transflower.TFLPortal.TFLOBL.Repositories;

namespace Transflower.TFLPortal.TFLDAL.Cofiguration;

public static class DALConfiguration
{
    public static IServiceCollection AddDAL(this IServiceCollection services)
    {
        services.AddScoped<IProjectRepository, ProjectRepository>();
        
        return services;
    }
}
