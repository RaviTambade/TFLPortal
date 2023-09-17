using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Transflower.PMSApp.Projects.Services;
using Transflower.PMSApp.Projects.Repositories;
using Transflower.PMSApp.Projects.Repositories.Context;
using Transflower.PMSApp.Projects.Repositories.Interfaces;
using Transflower.PMSApp.Projects.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddDbContext<ProjectContext>(options=>
        options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentNullException(nameof(options))
        )
            .LogTo(Console.WriteLine, LogLevel.Information)
        
        );
builder.Services.AddTransient<IProjectRepository,ProjectRepository>();
builder.Services.AddTransient<IProjectService,ProjectService>();
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
