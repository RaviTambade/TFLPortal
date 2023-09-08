using Transflower.PMS.UserRolesManagement.Services.Interfaces;
using Transflower.PMS.UserRolesManagement.Repositories.Interfaces;
using Transflower.PMS.UserRolesManagement.Services;
using Transflower.PMS.UserRolesManagement.Repositories;
using  Transflower.PMS.UserRolesManagement.Repositories.Contexts;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<UserRoleContext>(
    options =>
        options
            .UseMySQL(
                builder.Configuration.GetConnectionString("DefaultConnection")
                    ?? throw new ArgumentNullException(nameof(options))
            )
            .LogTo(Console.WriteLine, LogLevel.Information)
);

builder.Services.AddCors();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<IUserRoleService, UserRoleService>();
builder.Services.AddScoped<IUserRoleRepository, UserRoleRepository>();
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
app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
