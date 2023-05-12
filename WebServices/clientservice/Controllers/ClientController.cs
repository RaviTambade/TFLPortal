
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

    [HttpGet]
    [Route("getbyid/{id}")]
    public Client GetById(int id)
    {
        Client client = _service.GetById(id);


        return client;
    }

    [HttpPost]
    [Route("InsertClient")]
    public bool InsertClient(Client client)
    {
        bool status = _service.InsertClient(client);


        return status;
    }

    [HttpPut]
    [Route("updateClient/{id}")]

    public bool UpdateClient(Client role)
    {
        bool status = _service.UpdateClient(role);

        return status;
    }


    [HttpDelete]
    [Route("DeleteClient/{id}")]
    public bool DeleteClient(int id)
    {
        bool status = _service.DeleteClient(id);

        return status;
    }



}



