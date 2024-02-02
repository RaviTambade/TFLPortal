using TFLPortal.Helpers;
using TFLPortal.Services;
using TFLPortal.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddScoped<IProjectAllocationService, ProjectAllocationService>();
builder.Services.AddScoped<ILeaveService, LeaveService>();
builder.Services.AddScoped<IPayrollService, PayrollService>();
builder.Services.AddScoped<IHRService, HRService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<ITimesheetService, TimesheetService>();
builder.Services.AddScoped<ITimesheetBIService, TimesheetBIService>();
builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<ISprintService, SprintService>();

builder.Services.AddOptions<JwtSettings>().BindConfiguration("JWT")
    .ValidateDataAnnotations()
    .ValidateOnStart();

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
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseMiddleware<JwtMiddleware>();
app.MapControllers();
app.Run();
