using Ocelot.Middleware;
using Ocelot.DependencyInjection;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

 builder.Configuration.SetBasePath(hostingContext.hostingEnvironment.ContentRootPath);

builder.Configuration.AddJsonFile("configuration.json", optional:false, reloadOnChange: true);

builder.Services.AddOcelot(builder.Configuration);

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

await app.UseOcelot();

app.Run();
