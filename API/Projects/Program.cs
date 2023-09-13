using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Transflower.PMSApp.Projects.Repositories.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<ProjectContext>(options=>
        options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentNullException(nameof(options))
        )
            .LogTo(Console.WriteLine, LogLevel.Information)
        
        );
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
