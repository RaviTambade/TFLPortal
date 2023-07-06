using  PMS.Repositories.Interfaces;
using PMS.Services;
using PMS.Services.Interfaces;
using PMS.Repositories;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();

builder.Services.AddTransient<ITimeRecordRepository,TimeRecordRepository>();
builder.Services.AddTransient<ITimeRecordService,TimeRecordService>();

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
