
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PMS.Helpers;

namespace clients.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ClientController : ControllerBase
{

    private readonly IClientServices _service;
    private readonly ILogger<ClientController> _logger;
    public ClientController(IClientServices service, ILogger<ClientController> logger)
    {
        _service = service;
        _logger = logger;
    }

    // httpGet :  http://localhost:5076/api/client/getall
    //[Authorize]
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Client>> GetAll()
    {
        IEnumerable<Client> clients = await _service.GetAll();
        _logger.LogInformation("Get all suppliers method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return clients;
    }


    // httpGet :  http://localhost:5076/api/client/get/1
    //[Authorize]
    [HttpGet]
    [Route ("get/{id}")]
    public async Task<Client> Get(int id)
    {
        Client client = await _service.Get(id);
        return client;
    }


    // httpPost :  http://localhost:5076/api/client/client
    //[Authorize]
    [HttpPost]
    [Route ("Client")]
    public async Task<bool> Insert(Client client)
    {
        bool status = await _service.Insert(client);
        return status;
    }


    // httpPut :  http://localhost:5076/api/client/1
    //[Authorize]
    [HttpPut]
    [Route ("{id}")]
    public async Task<bool> Update(Client role)
    {
        bool status = await _service.Update(role);
        return status;
    }

    // httpDelete :  http://localhost:5076/api/client/1
    //[Authorize]
    [HttpDelete]
    [Route ("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);

        return status;
    }



}



