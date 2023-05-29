using ProjectAPI.Repository;
using ProjectAPI.Repository.Interface;
using ProjectAPI.Service;
using ProjectAPI.Service.Interface;
using PMS.Repositories.Interfaces;
using PMS.Repositories;
using PMS.Services.Interfaces;
using PMS.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors();

builder.Services.AddTransient<IProjectsRepository,ProjectsRepository>();
builder.Services.AddTransient<IProjectsService,ProjectService>();

builder.Services.AddTransient<ITeamMemberRepository,TeamMemberRepository>();
builder.Services.AddTransient<ITeamMemberService,TeamMemberService>();



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

app.UseCors(x => x.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
