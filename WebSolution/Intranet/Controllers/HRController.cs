using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.Notifications.Mail;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class HRController : ControllerBase
{
    private readonly IHRService _service;
    private readonly ExternalApiService _apiService;

    public HRController(
        IHRService service,
        ExternalApiService apiService
    )
    {
        _service = service;
        _apiService = apiService;
    }



    [HttpGet("employee/{employeeId}")]
    public async Task<EmployeeResponse> GetEmployeeDetails(int employeeId)
    {
        Employee employee = await _service.GetEmployeeById(employeeId);
        var user = await _apiService.GetUser(employee.UserId);
        EmployeeResponse emp = new EmployeeResponse()
        {
            HireDate = employee.HireDate,
            Salary = employee.Salary,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            ContactNumber = user.ContactNumber
        };
        return emp;
    }

    [HttpPost("employee/salary/{employeeId}")]
    public async Task<bool> PaySalary(int employeeId)
    {
        Employee employee = await _service.GetEmployeeById(employeeId);
        var userAccount = await _apiService.GetUserBankAccount(
            userId: employee.UserId,
            userType: "I"
        );
        FundTransferRequestDTO request = new FundTransferRequestDTO()
        {
            FromAcct = "39025546601",
            FromIfsc = "MAHB0000286",
            ToAcct = userAccount.AccountNumber,
            ToIfsc = userAccount.IFSCCode,
            Amount = employee.Salary,
            TransactionType = "Transfer"
        };
        int transactionId = await _apiService.FundTransfer(request);

    
        return transactionId > 0;
    }



    [HttpGet("users/{userId}")]
    public async Task<Employee> GetEmployee(int userId)
    {
        Employee employee = await _service.GetEmployeeByUserId(userId);
        return employee;
    }

}
