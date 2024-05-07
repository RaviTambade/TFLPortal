using Transflower.TFLPortal.Helpers;
using TFLPortal.Services.PayrollMgmt.Analytics;
using TFLPortal.Services.PayrollMgmt.Operations;
using TFLPortal.Services.TimesheetMgmt.Analytics;
using TFLPortal.Services.TimesheetMgmt.Operations;
using TFLPortal.Services.LeaveMgmt.Analytics;
using TFLPortal.Services.LeaveMgmt.Operations;

using TFLPortal.Repositories.LeaveMgmt.Analytics;
using TFLPortal.Repositories.LeaveMgmt.Operations;

using TFLPortal.Repositories.PayrollMgmt.Analytics;
using TFLPortal.Repositories.PayrollMgmt.Operations;

using TFLPortal.Repositories.TimesheetMgmt.Analytics;
using TFLPortal.Repositories.TimesheetMgmt.Operations;

using Transflower.TFLPortal.Repositories.HRMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.HRMgmt.Analytics;
using Transflower.TFLPortal.Services.HRMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.HRMgmt.Analytics;

using Transflower.TFLPortal.Repositories.HRMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.HRMgmt.Operations;
using Transflower.TFLPortal.Services.HRMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.HRMgmt.Operations;

using Transflower.TFLPortal.Repositories.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Analytics;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.ProjectMgmt.Analytics;


using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.ProjectMgmt.Operations;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.ProjectMgmt.Operations;




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();

builder.Services.AddScoped<IProjectOperationsRepository, ProjectOperationsRepository>();
builder.Services.AddScoped<IProjectOperationsService, ProjectOperationsService>();

builder.Services.AddScoped<IProjectAnalyticsRepository,  ProjectAnalyticsRepository>();
builder.Services.AddScoped<IProjectAnalyticsService,  ProjectAnalyticsService>();

builder.Services.AddScoped<ITimesheetAnalyticsRepository, TimesheetAnalyticsRepository>();
builder.Services.AddScoped<ITimesheetOperationsRepository, TimesheetOperationsRepository>();
builder.Services.AddScoped<ITimesheetAnalyticsService, TimesheetAnalyticsService>();
builder.Services.AddScoped<ITimesheetOperationsService, TimesheetOperationsService>();

builder.Services.AddScoped<ITaskOperationsService, TaskOperationsService>();
builder.Services.AddScoped<ITaskAnalyticsService, TaskAnalyticsService>();
builder.Services.AddScoped<ITaskOperationsRepository, TaskOperationsRepository>();
builder.Services.AddScoped<ITaskAnalyticsRepository, TaskAnalyticsRepository>();

builder.Services.AddScoped<ISprintOperationsService, SprintOperationsService>();
builder.Services.AddScoped<ISprintAnalyticsService,  SprintAnalyticsService>();
builder.Services.AddScoped<ISprintOperationsRepository, SprintOperationsRepository>();
builder.Services.AddScoped<ISprintAnalyticsRepository,  SprintAnalyticsRepository>();

builder.Services.AddScoped<IHRAnalyticsRepository,  HRAnalyticsRepository>();
builder.Services.AddScoped<IHROperationsRepository, HROperationsRepository>();
builder.Services.AddScoped<IHRAnalyticsService, HRAnalyticsService>();
builder.Services.AddScoped<IHROperationsService, HROperationsService>();

builder.Services.AddScoped<ILeaveAnalyticsService, LeaveAnalyticsService>();
builder.Services.AddScoped<ILeaveOperationsService, LeaveOperationsService>();
builder.Services.AddScoped<ILeaveAnalyticsRepository, LeaveAnalyticsRepository>();
builder.Services.AddScoped<ILeaveOperationsRepository, LeaveOperationsRepository>();

builder.Services.AddScoped<IPayrollAnalyticsService, PayrollAnalyticsService>();
builder.Services.AddScoped<IPayrollOperationsService, PayrollOperationsService>();


// builder.Services.AddScoped<IHROperationsService, HROperationsService>();

builder.Services.AddOptions<JwtSettings>().BindConfiguration("JWT")
    .ValidateDataAnnotations()
    .ValidateOnStart();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
// app.UseMiddleware<JwtMiddleware>();
app.MapControllers();


app.Run();