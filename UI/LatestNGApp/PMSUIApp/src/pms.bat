@REM REMOVE /B if you want to run  api in different console window 
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\AssignedTasks & title AssignedTasks & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\BIService & title BIService & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\Director & title Director & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\HRService & title HRService & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\PaymentGateWay & title PaymentGateWay & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\payrollCycle & title payrollCycle & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\Projects & title Projects & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\Tasks & title Tasks & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\TimeSheets & title TimeSheets & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\PMSApp\API\UserRolesManagement & title UserRolesManagement & dotnet run"

@REM commomservices     
start  /B cmd.exe /C "cd C:\Transflower\CommonServices\API\Authentication & title Authentication & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\CommonServices\API\UsersManagement & title UsersManagement & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\CommonServices\API\Banking & title Banking & dotnet run"
@REM start  /B cmd.exe /C "cd C:\Transflower\CommonServices\API\Corporate & title Corporate & dotnet run"
start  /B cmd.exe /C "cd C:\Transflower\CommonServices\API\PaymentGateway & title PaymentGateway & dotnet run"



@REM start  /B cmd.exe /C "cd AdminAPI & title AdminAPI & dotnet run"
@REM start  /B cmd.exe /C "cd MerchantsAPI & title MerchantsAPI & dotnet run"
@REM start  /B cmd.exe /C "cd FarmersAPI & title FarmersAPI & dotnet run"
