using ProjectAPI.Repository.Interface;
using ProjectAPI.Service.Interface;
using Transflower.PMS.ProjectAPI.Services.Interfaces;
using Transflower.PMS.ProjectAPI.Services;
using Transflower.PMS.ProjectAPI.Repositories;
using Transflower.PMS.ProjectAPI.Service;
using Transflower.PMS.ProjectAPI.Repositories.Interfaces;
using Transflower.PMS.ProjectAPI.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors();

builder.Services.AddTransient<IProjectsRepository,ProjectsRepository>();
builder.Services.AddTransient<IProjectsService,ProjectService>();

builder.Services.AddTransient<IProjectMemberRepository,ProjectMemberRepository>();
builder.Services.AddTransient<IProjectMemberService,ProjectMemberService>();



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

app.UseMiddleware<JwtMiddleware>();

app.Run();
