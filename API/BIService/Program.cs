using Transflower.PMSApp.BIService.Repositories.Interfaces;
using Transflower.PMSApp.BIService.Repositories;
using Transflower.PMSApp.BIService.Services.Interfaces;
using Transflower.PMSApp.BIService.Services;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<ITeamManagerRepository, TeamManagerRepository>();
builder.Services.AddScoped<ITeamManagerService, TeamManagerService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.Run();
