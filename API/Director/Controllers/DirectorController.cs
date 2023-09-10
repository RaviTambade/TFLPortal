using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.Helpers;
using Transflower.PMS.Director.Models;
using Transflower.PMS.Director.Services.Interfaces;

namespace Transflower.PMS.Director.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class DirectorController : ControllerBase
{

    private readonly IDirectorService _service;
    public DirectorController(IDirectorService service)
    {
        _service = service;
    }
    
    // httpGet : http://localhost:5096/api/director/directors
    //[Authorize]
    [HttpGet]
    [Route ("directors")]
    public async Task<IEnumerable<Directors>> GetAll()
    {
        IEnumerable<Directors> employees =await _service.GetAll();
        return employees;
    }
   
    // //httpGet http://localhost:5230/api/employees/2
    // //[Authorize]
    // [HttpGet] 
    // [Route ("{id}")]
    // public async Task<Employee> GetById(int id)
    // {
    //     Employee employees =await _service.GetById(id);
    //     return employees;
    // }

    // //httpPost : http://localhost:5230/api/employees/employee
    // //[Authorize]
    // [HttpPost]
    // [Route ("Employee")]
    // public async Task<bool> InsertUser(Employee employees)
    // {
    //     bool status =await _service.Insert(employees);
    //     return status;
    // }

    // //httpPut : http://localhost:5230/api/employees/employee
    // //[Authorize]
    // [HttpPut]
    // [Route ("Employee")]
    // public async Task<bool> UpdateEmployee(Employee emp)
    // {
    //     bool status =await _service.Update(emp);
    //     return status;
    // }

    // //httpDelete : http://localhost:5230/api/employees/12
    // //[Authorize]
    // [HttpDelete]
    // [Route ("{id}")]
    // public async Task<bool> DeleteEmployee(int id)
    // {
    //     bool status =await _service.Delete(id);
    //     return status;
    // }




    // //httpGet : http://localhost:5230/api/employees/role/manager
    // //[Authorize]
    // [HttpGet]
    // [Route ("role/{role}")] 
    // public async Task<IEnumerable<Employee>> GetByRole(string role)
    // {
    //     IEnumerable<Employee> employees =await _service.GetByRole(role);
    //     return employees;
    // }

   [HttpPost, DisableRequestSizeLimit]
    public IActionResult Upload()
    {
        try
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                return Ok(new { dbPath });
            }
            else
            {
                return BadRequest();
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex}");
        }
    }

    



}
