using Transflower.TFLPortal.TFLOBL.Repositories;
using Transflower.TFLPortal.TFLOBL.Services;
using Transflower.TFLPortal.TFLDAL.Repositories;
using Transflower.TFLPortal.TFLSAL.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IProjectRepository,ProjectRepository>();
builder.Services.AddScoped<IProjectService,ProjectService>();

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
