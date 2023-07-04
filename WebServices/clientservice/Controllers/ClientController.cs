
 using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace clients.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ClientController : ControllerBase
{

    private readonly IClientServices _service;
    private readonly ILogger<ClientController> _logger;
    public ClientController(IClientServices service,ILogger<ClientController> logger)
    {
        _service = service;
        _logger=logger;
    }

    [HttpGet]
    //http://localhost:5076/api/client/getall
    [Route("getall")]
   public async Task<IEnumerable<Client>> GetAll()
    {

            IEnumerable<Client> clients =await _service.GetAll();
            _logger.LogInformation("Get all suppliers method invoked at  {DT}",  DateTime.UtcNow.ToLongTimeString());
            return clients;

    }

       
    //http://localhost:5076/api/client/get/1
    [HttpGet("get/{id}")]
    public async Task <Client> Get(int id)
    {
        Client client = await _service.Get(id);


        return client;
    }


 //http://localhost:5076/api/client/client
    [HttpPost("Client")]
    public async Task<bool> Insert(Client client)
    {
        bool status = await _service.Insert(client);


        return status;
    }


    
    [HttpPut("{id}")]

    public async Task<bool>  Update(Client role)
    {
        bool status = await _service.Update(role);

        return status;
    }

    
    [HttpDelete ("{id}")]
    public async Task<bool>  Delete(int id)
    {
        bool status =await _service.Delete(id);

        return status;
    }



}



