

using Transflower.PMS.TimesheetService.Helpers;
using Transflower.PMS.TimesheetService.Repositories;
using Transflower.PMS.TimesheetService.Repositories.Interfaces;
using Transflower.PMS.TimesheetService.Services;
using Transflower.PMS.TimesheetService.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();

builder.Services.AddTransient<ITimeSheetRepository,TimesheetRepository>();
builder.Services.AddTransient<ITimeSheetServices,TImeSheetService>();

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
