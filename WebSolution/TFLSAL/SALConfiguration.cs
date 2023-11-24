using Microsoft.Extensions.DependencyInjection;
using Transflower.TFLPortal.TFLDAL;
using Transflower.TFLPortal.TFLOBL.Services;
using Transflower.TFLPortal.TFLSAL.Services;

namespace Transflower.TFLPortal.TFLSAL;

public static class DALConfiguration
{
    public static IServiceCollection AddSAL(this IServiceCollection services)
    {
        services.AddDAL();
        services.AddScoped<IProjectService, ProjectService>();
        return services;
    }
}
