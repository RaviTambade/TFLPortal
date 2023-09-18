using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Transflower.PMSApp.Tasks.Services;
using Transflower.PMSApp.Tasks.Repositories;
using Transflower.PMSApp.Tasks.Repositories.Contexts;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
using Transflower.PMSApp.Tasks.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddDbContext<TaskContext>(options=>
        options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentNullException(nameof(options))
        )
            .LogTo(Console.WriteLine, LogLevel.Information)
        
        );
builder.Services.AddTransient<ITaskRepository,TaskRepository>();
builder.Services.AddTransient<ITaskService,TaskService>();
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
