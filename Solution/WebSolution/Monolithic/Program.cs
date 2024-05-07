using Transflower.TFLPortal.Helpers;

using TFLPortal.Services.ProjectMgmt.Analytics;
using TFLPortal.Services.ProjectMgmt.Operations;
using TFLPortal.Services.TaskMgmt.Analytics;
using TFLPortal.Services.TaskMgmt.Operations;
using TFLPortal.Services.TimesheetMgmt.Analytics;
using TFLPortal.Services.TimesheetMgmt.Operations;


using TFLPortal.Services.SprintMgmt.Analytics;
using TFLPortal.Services.SprintMgmt.Operations;




using TFLPortal.Repositories.ProjectMgmt.Analytics;
using TFLPortal.Repositories.ProjectMgmt.Operations;
using TFLPortal.Repositories.TimesheetMgmt.Analytics;
using TFLPortal.Repositories.TimesheetMgmt.Operations;
using TFLPortal.Repositories.SprintMgmt.Analytics;
using TFLPortal.Repositories.SprintMgmt.Operations;
using TFLPortal.Repositories.TaskMgmt.Analytics;
using TFLPortal.Repositories.TaskMgmt.Operations;

using Transflower.TFLPortal.Repositories.HRMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.HRMgmt.Analytics;
using Transflower.TFLPortal.Services.HRMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.HRMgmt.Analytics;

using Transflower.TFLPortal.Repositories.HRMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.HRMgmt.Operations;
using Transflower.TFLPortal.Services.HRMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.HRMgmt.Operations;

using Transflower.TFLPortal.Repositories.PayrollMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.PayrollMgmt.Analytics;
using Transflower.TFLPortal.Services.PayrollMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.PayrollMgmt.Analytics;

using Transflower.TFLPortal.Repositories.PayrollMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.PayrollMgmt.Operations;
using Transflower.TFLPortal.Services.PayrollMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.PayrollMgmt.Operations;
using Transflower.TFLPortal.Repositories.LeaveMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.LeaveMgmt.Analytics;
using Transflower.TFLPortal.Services.LeaveMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Services.LeaveMgmt.Analytics;

using Transflower.TFLPortal.Repositories.LeaveMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Repositories.LeaveMgmt.Operations;
using Transflower.TFLPortal.Services.LeaveMgmt.Operations.Interfaces;
using Transflower.TFLPortal.Services.LeaveMgmt.Operations;



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

builder.Services.AddScoped<ISprintOperationsService, SprintOperationsService>();
builder.Services.AddScoped<ISprintAnalyticsService,  SprintAnalyticsService>();

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