
<a href=""> Project Tracker</a>
<a href=""> Timesheet Managment </a>
<a href=""> Payroll </a>
<a href=""> Resource Management </a>








Adapts to your leave policies
Define leave entitlement, set accruals, specify leave applicability, and introduce new leave types to customize the system and ensure your organization stays compliant

Facilitates easy approvals
Enable your employees to raise leave requests in just a few steps. Managers and department heads can approve or reject these requests instantly.


Keeps employees informed
Our employee dashboard lets employees track their leave requests, check their leave balances, and view upcoming holidays, all from Transflower People.

Mitigates employee absenteeism
Minimize unplanned absences as Bradford Score in Transflower People helps you stay on top of employee absenteeism trends by calculating the absence score for each employee.


Supports special leave requests
Accommodate special leave requests from your employees that fall outside of the usual leave entitlements with the Leave Grant feature in Transflower People.

Instant leave approvals
Location-based leave management
Easy-to-use leave calendars
Customized leave policies

Email & Mobile Notifications
Alerts & Reminders in real-time for employees, supervisors and management to their mobile and email.

Wide range of Reports
Easily generate and download a wide range of reports within seconds.

Automate Payroll Management with the Easiest-to-use HROne
Error-free payroll every time, on-time!
Auto- statutory compliant, always.
Insightful payroll data in the hand

A payroll management system describes the specialist software that can empower companies by streamlining and automatically carrying out the processes involved in payroll such as working out take home pay and taxes – saving time for the employer and reducing the number of errors.

Working out wages
Employers need to ensure hours worked by employees are correctly recorded, and this function is built into payroll management software. After gross wages are figured out, deductions need to be calculated. These include taxes, deductions that are voluntary such as life insurance, and deductions that are compulsory, such as child support or student loans. Once deductions are removed, the amount remaining is an employee’s net pay, also known as take home pay.

Calculating Taxes
Business owners are responsible for making sure they take out government taxes and national insurance payments from their employees’ wages, and payroll management systems can automate this process. In the UK, HMRC approved software is important to ensure compliance with the country’s employment and tax legislation and therefore avoid expensive fines. Her Majesty’s Revenue and Customs is the full name for the UK government body that’s in charge of the nation’s taxes and benefits, and their system for collecting national insurance and income tax is known as PAYE – or Pay as you earn.

Pay Statement for employees
Another important feature of a payroll management system is providing pay statements for employees alongside the payment of their wages. These statements should accurately reflect their net pay, including pay rates, deductions, gross pay and the take home amount.



Simplify Salary Structure Creation 
Effortlessly assign pay groups at different levels and auto-calculate your employees' salaries. 

Convenient Auto-Schedule Payroll 
Empower HR with in-house payroll system and ensure timely payroll processing every time.
Quick Payroll Error Verification 
Automatically receive an elaborated salary variance reports for instant resolution of errors.

Reliable Statutory Compliances 
Updated system as per latest payroll guidelines of respective states for statutory calculations.

Responsive Employee Self Service 
Unload payroll admin & empower your employees to do more than download salary slips with ESS.



Let HR or admins access employees’ attendance data anytime for actual paid days calculation 
Let your HR approve or reject loan and reimbursement requests in a click
Let your payroll related data be password protected to ensure utmost security
Let your people access their CTC structure, download payroll slips, etc. from anywhere

In-depth Payout Insights and Dashboards 
40+ comprehensive tabular reports to discover CTC trends, actual liabilities, and more.


**User Registration and Login (UI01):**
- The system will allow registering a new Employee.
- The system will allow existing employees or managers to log in to their accounts.
- The system will provide general help information.
- Log In
  - Input: The user inputs their username and password and selects to log in.
  - Action: The system will verify the user information with the database.
  - Output: The system will redirect the user to the appropriate menu page.

**Manager Interface (UI02):**
- The system will allow creating new tasks.
- The system will allow managing tasks.
- The system will allow editing tasks.
- The system will allow deleting tasks.
- The system will allow deleting employees.
- The system will allow checking Timesheets of employees.
- Override timesheet values
  - Input: The admin selects an employee that they want to override the timesheet value for, then the admin selects a specific shift they wish to edit.
  - Action: The system will prompt the admin for new time values for this shift and will update the database to reflect these new values.
  - Output: The system will return to the screen that shows the list of shifts worked by the selected employee.
- Add Employees
  - Input: The administrator is on the add user screen and inputs the employee's basic user information (name, email, employee ID, etc.) and selects the add option.
  - Action: The system will add the user to the user listing, adding the inputted values into the database.
  - Output: The system will return to the add user screen.
- Remove Employees
  - Input: The administrator will be on the remove employee's screen and selects an employee to remove and selects the remove option.
  - Action: The system will remove the user from the database and all related shift information to that user.
  - Output: The system will return to the remove user screen.
- Update Database Values
  - Input: The admin selects to update the timesheet database.
  - Action: The system will access a file generated by the Optima System to populate the database with the most recent clock in/out information.
  - Output: The system will display a confirmation message upon successful update or an error message upon a failed update.
  - This function will be specifically tailored to interface with the Optima System.
- Disable Clock In/Out Features
  - Input: The admin selects to disable the clock in/out features.
  - Action: The system will no longer allow employees to use the web interface to Clock in and out.
  - Output: The system will display a confirmation message upon a successful update or an error message upon a failed update.
- Enable Clock In/Out Features
  - Input: The admin selects to enable the clock in/out features.
  - Action: The system will allow employees to use the web interface to clock in and out.
  - Output: The system will display a confirmation message upon a successful update or an error message upon a failed update.



**Create Task Interface (UI02.1):**
- This create task contains one form that has parameters like select employee, description of the task, starting date, end date, and create button.
- This field creates a task and assigns it to an existing employee.

**Manage Task Interface (UI02.2):**
- Manage task contains one form that has parameters like select employee, description of the task, starting date, and end date, and also there are two action methods available, 1st is edit and 2nd is delete.
- The process of the delete function is to delete the task.
- Edit action contains another form to edit an existing task.

**Edit Interface (UI02.2.1):**
- Edit interface contains another form.
- This form has all the parameters of the create task form, but in this interface, we can edit previous/existing tasks.

**Employee Interface (UI03):**
- The system gives information and defines some rules for the employee on the dashboard field.
- The system contains an Update task Option.
- The system will allow Logout Employee.
- Finalize Timesheet
  - Input: The employee selects to finalize their time worked for the pay period.
  - Action: The system will prevent any additional working time from being added to the employee's timesheet.
  - Output: The system will display the time worked in timesheet format.
  - Notes: The user will then be able to print it off from the web browser.

- Clock In/Out
  - Input: The employee selects to clock in/out.
  - Action: The system adds a database entry indicating the current user id and time.
  - Output: The system will display a confirmation message upon successful clocking in/out or an error message upon a failed clocking in/out.

**Dashboard Information (UI03.1):**
- Dashboard contains Information and rules for employees.

**Update Task Interface (UI03.2):**
- Update task interface contains one form where the employee can update their task working process, which will be starting, not working, or completed, etc.
- There will one update option available, from this update option, the employee updates their task status.

**Employee Update Interface (UI03.2.1):**
- In the update interface, an update form is available.
- There are 3 options available like starting, in progress, completed.
- Also, there are 2 buttons available, one is update and the other is back.
- From the update button, the employee can update their task status.

**Both Project Manager and Employee:**
- View Timesheet
  - Input: The user selects to view a timesheet.
  - Action: The system will retrieve database values for the selected timesheet and will create a table representing the time worked.
  - Output: The system will display a table of time worked.
  - Notes: Administrators will be able to select from all employees' timesheets.
  - Employees will only be able to view their own timesheet.

**System Behaviour:**

**Security:**
- Only Higher Manager will be able to see all employee records.
- One employee should not be able to modify other employee details.
- Employee will be able to modify their own personal details.
- Each employee will be able to access the system through their username and password process.

**Reliability:**
- The system will backup task data, employee data, manager data on a regular basis and keep the system operational; continuous updates are maintained.

**Availability:**
- Uptime: 24*7 available.

**Maintainability:**
- A Commercial database software will be used to maintain System data Persistence.
- A readymade Web Server will be installed to host Test Management System (Web Site) to management server capabilities.
- IT operations team will easily monitor and configure System using Administrative tools provided by Servers.

**Portability:**
- PDA: Portable Device Application.
- System will provide a portable User Interface (HTML, CSS, JS) through which users will be able to access the Task Management System.
- System can be deployed to a server to any OS, Cloud (Azure or AWS or GCP).

**Accessibility:**
- Only PMS Employee and Manager will be able to access the portal after authentication.
- Manager Representatives will be able to view daily, weekly, monthly, annual task data through a customized dashboard.

**Modularity:**
- The system will be designed and developed using reusable, independent or dependent on scenarios in the form of modules.
- These modules will be loosely coupled and highly cohesive. The system will contain all the Details of Employee, Tasks, and Managers.

**Scalability:**
- The system assesses the highest workloads under which the system will still meet the performance requirements.
- There are two ways to enable your system to scale as the workloads get higher: horizontal and vertical scaling. Horizontal scaling is provided by adding more machines to the pool of servers. Vertical scaling is achieved by adding more CPU and RAM to the existing machines.

**Safety:**
- Task Management System portal will be secure from malicious attacks and phishing.
- Employee Management System functionalities are protected from the outside with proper firewall configuration.
- Employee Management System will always be kept updated with the latest antivirus software.
- Employee data will be backed up periodically to ensure the safety of data using an incremental backup strategy.

## Design

- The system must be programmed in an Object-Oriented language; in this case, we will be using C# (.NET).
- The SQL database must be attached to the system.

## Process

**Start up:**
- Three Options Manager / Employee / New Register.
- Employee & Manager is for login using id, password.
- New Registration Required All fields of Employee & Manager Table

**Manager:**
- First enter into the manager page using the login option.
- Manager allows to create tasks and assigns them to existing employees.
- Manager also allows generating deadlines for task completions using the starting date and end date.
- Manager Interface allows finding any team members' timesheets working on a certain project and finding how much time they utilize on the project working by a team member/employee.
- Project Manager has their own Timesheet for their working.
- Manager also allows editing previous tasks.
- Manager also allows deleting certain tasks

**Employee:**
- Employee first enters the Employee page using the login option.
- Employee has a Dashboard as the first option, in the dashboard, there is a description about the task management system and also gives some Rules for completing certain tasks.
- Again, the Employee has one more option, like Update task.
- In this Update tasks, there is some data present which would be the task given by the manager to this employee.
- In this page, the employee has one option "update" to set the status of the task.
- From this update option, the employee updates the status of the task like Not start/in progress/completed.
- Then, the Employee has a Time Sheet where employees can fill their time working on the project for counting their working hours by the manager for their salary amount counting.
- And the last Employee has one more option Logout.

**Benefits of Project:**
- From this task management project, communication between the employee and the manager will be reduced.
- So the purpose of employees and managers is to save their time for other work.
- Managers can create many working tasks and assign them directly to any employee while sitting in their own office.
- Employees can get their task in their process, which will be assigned by the manager.
- Employee can start working on this and update their task working status simultaneously
- Employees can fill their timesheet, and then the manager can get information directly on project status.
- Also, from the timesheet, managers can easily count working hours of employees for the payment process.
- Managers can get feedback directly on their port.
- From this above project, the working process will get more connection between employees and managers.
- It also increases efficiency in working.


**Specific Requirements:**

**External Interfaces:**
- The interface for the Timesheet System will be split among the user groups. Administrator will be able to log in and have a screen that allows them to:
  - Override timesheet values
  - View timesheet values
  - Add/Remove Employees
  - Update the database with values.
- Employees will be able to log in and view a screen that allows them to:
  - View projects and tasks assigned to them.
  - View timesheet values
  - Finalize time worked
  - Clock in and clock out.

**Requirements User Interfaces:**
- Admin/Project manager
- Employee

**Hardware Interfaces:**
- Processor: Intel Core i5
- RAM: Min 4 GB
- Hard Disk: 1TB

**Software Interfaces:**
- Operating system: Windows 10
- Technology Used: Asp.Net Core, HTTP server, IIS Server
- Database: My SQL
- Tools used: Vs Code

**Communications Interfaces:**
- Postman tool
- Web browser



**Purpose of Project:**
- Increasing communication between employees & managers.
- Increasing Productivity.
- Reducing complications between communications.
- Reducing meetings between employees & managers and meetings time.
- Reducing the calculation of working time of every employee from timesheet.
