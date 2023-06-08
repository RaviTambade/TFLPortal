
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace clients.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ClientController : ControllerBase
{

    private readonly IClientServices _service;

    public ClientController(IClientServices service)
    {
        _service = service;
    }

    [HttpGet]
    [Route("getall")]
    public IEnumerable<Client> GetAll()
    {

        List<Client> client = _service.GetAll();

        return client;

    }

    [HttpGet("get/{id}")]
    public Client Get(int id)
    {
        Client client = _service.Get(id);


        return client;
    }

    [HttpPost("Client")]
    public bool Insert(Client client)
    {
        bool status = _service.Insert(client);


        return status;
    }

    [HttpPut("/{id}")]

    public bool Update(Client role)
    {
        bool status = _service.Update(role);

        return status;
    }


    [HttpDelete ("/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }



}



