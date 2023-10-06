using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Transflower.PMSApp.TimeSheets.Services;
using Transflower.PMSApp.TimeSheets.Repositories;
using Transflower.PMSApp.TimeSheets.Repositories.Contexts;
using Transflower.PMSApp.TimeSheets.Repositories.Interfaces;
using Transflower.PMSApp.TimeSheets.Services.Interfaces;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddDbContext<TimeSheetContext>(options=>
        options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentNullException(nameof(options))
        )
            .LogTo(Console.WriteLine, LogLevel.Information)
        
        );
builder.Services.AddTransient<ITimeSheetRepository,TimeSheetRepository>();
builder.Services.AddTransient<ITimeSheetService,TimeSheetService>();
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