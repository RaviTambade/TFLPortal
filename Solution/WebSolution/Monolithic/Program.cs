using TFLPortal.Helpers;
using TFLPortal.Services.PayrollMgmt.Analytics;
using TFLPortal.Services.PayrollMgmt.Operations;
using TFLPortal.Services.ProjectMgmt.Analytics;
using TFLPortal.Services.ProjectMgmt.Operations;
using TFLPortal.Services.TaskMgmt.Analytics;
using TFLPortal.Services.TaskMgmt.Operations;
using TFLPortal.Services.TimesheetMgmt.Analytics;
using TFLPortal.Services.TimesheetMgmt.Operations;
using TFLPortal.Services.LeaveMgmt.Analytics;
using TFLPortal.Services.LeaveMgmt.Operations;
using TFLPortal.Services.HRMgmt.Analytics;
using TFLPortal.Services.SprintMgmt.Analytics;
using TFLPortal.Services.SprintMgmt.Operations;
using TFLPortal.Services.HRMgmt.Operations;
using TFLPortal.Repositories.HRMgmt.Analytics;
using TFLPortal.Repositories.HRMgmt.Operations;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddScoped<ITaskAnalyticsService, TaskAnalyticsService>();
builder.Services.AddScoped<ITaskOperationsService, TaskOperationsService>();
builder.Services.AddScoped<ITimesheetAnalyticsService, TimesheetAnalyticsService>();
builder.Services.AddScoped<ITimesheetOperationsService, TimesheetOperationsService>();
builder.Services.AddScoped<ILeaveAnalyticsService, LeaveAnalyticsService>();
builder.Services.AddScoped<ILeaveOperationsService, LeaveOperationsService>();
builder.Services.AddScoped<IPayrollAnalyticsService, PayrollAnalyticsService>();
builder.Services.AddScoped<IPayrollOperationsService, PayrollOperationsService>();
builder.Services.AddScoped<IProjectAnalyticsService,  ProjectAnalyticsService>();
builder.Services.AddScoped<IProjectOperationsService, ProjectOperationsService>();
builder.Services.AddScoped<IHRAnalyticsService,  HRAnalyticsService>();
builder.Services.AddScoped<IHROperationsService,  HROperationsService>();
builder.Services.AddScoped<IHRAnalyticsRepository,  HRAnalyticsRepository>();
builder.Services.AddScoped<IHROperationsRepository,  HROperationsRepository>();
builder.Services.AddScoped<ISprintOperationsService, SprintOperationsService>();
builder.Services.AddScoped<ISprintAnalyticsService,  SprintAnalyticsService>();
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