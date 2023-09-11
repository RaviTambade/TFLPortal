using Transflower.PMS.AssignedTask.Services;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using Transflower.PMS.AssignedTask.Helpers;
using Transflower.PMS.AssignedTask.Repositories;
using Transflower.PMS.AssignedTask.Repositories.Interfaces;
using Transflower.PMS.AssignedTask.Services.Interfaces;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();


builder.Services.AddTransient<IAssignedTaskRepository,AssignedTaskRepository>();
builder.Services.AddTransient<IAssignedTaskService,AssignedTaskService>();




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