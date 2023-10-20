# Title: Project Management System
**Document: System Requirement Specification Document**

## Title: Online Project Management System

### Objective:
1. The Online Project Management System Web Application is intended to provide a suitable solution for Project Manager and Project team members to create, assign, complete, update, and find daily Time Sheet of team members' working process.
2. The ability for the manager is to create daily tasks, assign tasks to team members, check the timesheet of employees, check updates of tasks from employees, also have the ability to update tasks, delete tasks, delete team members from projects, etc.
3. The ability for team members is to complete tasks assigned by the project manager and update task status and also have the ability to update their daily timesheet.
4. Timesheet management is also provided for recording the amount of team members' time spent on allocated jobs. Timesheet management is a conventional method of calculating team members' performance done by tabular format using an Excel sheet, etc.
5. At the beginning, the timesheet was used in fields of payroll calculation and account management.
6. From the timesheet, the start date and end date of the project can be recorded, and these statistics can be later used for accounting, payroll, billing of clients, tracking, estimation, and calculating hours of team members.

### Purpose:
1. This documentation specifies the System Requirements Specification (SRS) for the Project Management System (PMS). It describes the scope of the system, both functional and non-functional requirements for the software, design constraints, and system interfaces.
2. The main purpose of the Project Management system is to manage overall activities during project development.
3. In this process, we can control the team managers, team members of the project, and also we can manage or follow the timesheet of team members.
4. From this Project Management System, managers can define daily tasks for team members on running projects and get updates from members about the project, and know their time period spent on these projects.

### Scope:
1. The Project Management System addresses the management of software projects. It provides a framework for organizing and managing resources in such a way that these resources deliver all the work required to complete software projects within defined scope, time, and cost constraints.
2. The system applies only to the management of software projects and is a tool that facilitates decision-making; the PMS does not make decisions.
3. The SRS describes only the required functionality of PMS, not the functionality of external systems like data storage, change management, or version control systems.
4. The Project Management System provides an interface for both Managers and team members in the industry to track the daily status of projects and timesheets of members working on these projects.
5. The system will allow for the management of team members' timesheets working in any IT firms. Team members will be able to log in and look at their own timesheets, while administrators will be able to override worked hours values.
6. Each User, Manager, Team members have different user interfaces.
7. The Project manager interface will allow for entering/creating new tasks, providing time periods for tasks, editing previous tasks, deleting tasks, searching tasks, finding timesheets of team members, and finding the status of tasks and project status. Also, they have the authority to assign and delete team members from the project.

## Overall Description

### Current Solution:
As of now, every team leader is using a specific software product or no software at all for maintaining the project schedule, organizing project tasks, and storing all project data.

### Product Perspective:
1. PMS is a standalone system that provides functionality described in the Product functions section. It includes all subsystems needed to fulfill these software requirements.
2. PMS has interfaces to external systems, such as Version Control System, Change Management, Bug Tracking System, and Payroll System, implemented according to available industry standards and independent from a specific external system.

### User Characteristics:
There are two kinds of users: Admin/Project Manager as users and Employee/Team Member as users.
**Admin User/Project Manager:**
- Override timesheet values.
- View timesheet values.
- Add/Remove employees.
- Update the database with values.
**Employee User/Team Member:**
- View timesheet values.
- Finalize time worked.
- Clock-in and clock-out

### Specific Requirements:

**External Interfaces:**
The interface for the Timesheet System will be split among the user group. Administrator will be able to log in and have a screen that allows them to:
- Override timesheet values.
- View timesheet values.
- Add/Remove employees.
- Update database with values.
Employees will be able to log in and view a screen that allows them to:
- View projects and tasks assigned them.
- View timesheet values.
- Finalize time worked.
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

### Functional Requirements:

**User Registration and Login (UI01):**
- The system will allow to register a new Employee.
- The system will allow existing employee or manager to log-on their account.
- The system will provide general help information.
- Log In
  - Input: The user inputs his/her username and password and selects to log in.
  - Action: The system will verify the user information with the database.
  - Output: The system will redirect the user to the appropriate menu page
  - Notes: The user login information may or may not conform to Trinity Authentication System.

**Manager Interface (UI02):**
- The system will allow to create new tasks.
- The system will allow to manage tasks.
- The system will allow to edit task.
- The system will allow to delete task.
- The system will allow to delete employee.
- The system will allow to check timesheets of employees.
- Override timesheet values
  - Input: The admin selects an employee that they want to override the timesheet value for, then the admin selects a specific shift they wish to edit.
  - Action: The system will prompt the admin for new time values for this shift, and will update the database to reflect these new values.
  - Output: The system will return to the screen that shows the list of shifts worked by the selected employee.

- Add Employees
  - Input: The administrator is on the add user screen and inputs the employee's basic user information (name, email employee id, etc.) and selects the add option.
  - Action: The system will add the user to the user listing, adding the inputted values into the database.
  - Output: The system will return to the add user screen.

- Remove Employees
  - Input: The administrator will be on the remove employee's screen and selects an employee to remove, and selects the remove option.
  - Action: The system will remove the user from the database and all related shift information to that user.
  - Output: The system will return to the remove user screen.

- Update Database Values
  - Input: The admin selects to update the timesheet database.
  - Action: The system will access a file generated by the Optima System to populate the database with the most recent clock in/out information.
  - Output: The system will display a confirmation message upon successful update or an error message upon failed update. This function will be specifically tailored to interface with the Optima System

- Disable Clock In/Out Features
  - Input: The admin selects to disable the clock in/out features
  - Action: The system will no longer allow employees to use the web interface to Clock in and out.
  - Output: The system will display a confirmation message upon successful update or an error message upon failed update.

- Enable Clock In/Out Features
  - Input: The admin selects to enable the clock in/out features
  - Action: The system will allow employees to use the web interface to clock in and out.
  - Output: The system will display a confirmation message upon successful update or an error message upon failed update.

**Create Task Interface (UI02.1):**
- This create task contains one form which has parameters like select employee, description of the task, starting date, end date, and create button.
- This field creates a task and assigns it to an existing employee.

**Manage Task Interface (UI02.2):**
- Manage task contains one form with parameters like select employee, description of the task, starting date, and end date, and also two action methods available: edit and delete.
- The process of the delete function is to delete the task.
- Edit action contains again one form to edit an existing task.

**Edit Interface (UI02.2.1):**
- Edit interface contains again one form.
- This form has all parameters of the create task form, but in this interface, we can edit previous/existing tasks.

**Employee Interface (UI03):**
- The system gives information and defines some rules for employees in the dashboard field.
- The system contains again Update task Option.
- The system will allow Logout Employee.
- Finalize Timesheet
  - Input: The employee selects to finalize their time worked for the pay period.
  - Action: The system will prevent any additional working time from being added to the employee's timesheet.
  - Output: The system will display the time worked in timesheet format.
  - Notes: The user will then be able to print it off from the web browser.

- Clock In/Out
  - Input: The employee selects to clock in/out.
  - Action: The system adds a database entry indicating the current user id and time.
  - Output: The system will display a confirmation message upon successful clocking in/out or an error message upon failed clocking in/out.

**Dashboard Information (UI03.1):**
- Dashboard contains information and rules for employees.

**Update Task Interface (UI03.2):**
- Update task interface contains one form where the employee can update their task working process, whether it's starting, in progress, or completed, etc.
- There will be one update option available, from this update option, employees can update their task status.

**Employee Update Interface (UI03.2.1):**
- In the update interface, an update form is available.
- There are 3 options available like starting, in progress, completed.
- Also, there are 2 buttons available: one is update and the other is back.
- From the update button, the employee can update their task status.

**Both Project Manager and Employee:**
- View Timesheet
  - Input: The user selects to view a timesheet.
  - Action: The system will retrieve database values for the selected timesheet and will create a table representing the time worked.
  - Output: The system will display a table of time worked.
  - Notes: Administrators will be able to select from all employees' timesheets. Employees will only be able to view their own timesheet.

### Non-Functional Requirements:

**Security:**
- Only Higher Manager will be able to see all employee records.
- One employee should not be able to modify other employee details.
- Employees will be able to modify their own personal details.
- Each employee will be able to access the system through his username and password process.

**Reliability:**
- The system will backup task data, employee data, manager data on a regular basis and keep the system operational, continuous updates are maintained.

**Availability:**
- Uptime: 24*7 available

**Maintainability:**
- A Commercial database software will be used to maintain System data Persistence.
- A ready-made Web Server will be installed to host Test Management System (Web Site) to management server capabilities.
- IT operations team will easily monitor and configure System using Administrative tools provided by Servers.

**Portability:**
- PDA: Portable Device Application.
- System will provide a portable User Interface (HTML, CSS, JS) through users will be able to access the Task Management System.
- System can be deployed to server to any OS, Cloud (Azure or AWS or GCP)

**Accessibility:**
- Only PMS Employee and Manager will be able to access the portal after authentication.
- Manager Representatives will be able to view daily, weekly, monthly, annual task data through customized dashboard.

**Modularity:**
- System will be designed and developed using reusable, independent or dependent on scenarios in the form of modules.
- These modules will be loosely coupled and highly cohesive. The system will contain all the Details of Employee, Tasks, and Managers.

**Scalability:**
- System assesses the highest workloads under which the system will still meet the performance requirements.
- There are two ways to enable your system scale as the workloads get higher:
  - Horizontal and vertical scaling. Horizontal scaling is provided by adding more machines to the pool of servers.
  - Vertical scaling is achieved by adding more CPU and RAM to the existing machines.

**Safety:**
- Task Management System portal will be secure from malicious attacks, phishing.
- Employee Management System functionalities are protected from outside with proper firewall configuration.
- Employee Management System will be always kept updated with the latest antivirus software.
- Employee data will be backed up periodically to ensure the safety of data using incremental backup strategy.

### Design:
- The system must be programmed in Object-Oriented language, in this case, we will use C# (.NET).
- The SQL database must be attached to the system.

### Process:
- **Start up:**
  - Three Options: Manager / Employee / New Registration.
  - Employee & Manager for login using ID and password.
  - New Registration requires all fields of Employee & Manager Table

- **Manager:**
  - First enter into the manager page using login option.
  - Manager allows creating tasks and assigning them to existing employees.
  - Manager also allows generating a deadline for task completion using starting date and end date.
  - Manager Interface allows checking the timesheets of employees working on a certain project and finding how much time is utilized on project work by team members/employees.
  - Project Manager also has their own Timesheet for their working.
  - Manager allows editing previous tasks.
  - Manager allows deleting certain tasks

- **Employee:**
  - Employee first enters the Employee page using the login option.
  - The Employee has Dashboard as the first option; in the dashboard, there is a description about the task management system and also gives some Rules for completing certain tasks.
  - Again, Employee has one more option like Update task.
  - In this Update tasks, there is some data present that would be tasks given by the manager to this employee.
  - In this page, the Employee has one option "update" to set the status of the task.
  - From this update option, the employee updates the status of the task like Not started/in progress/completed.
  - Then, the Employee has a Timesheet where employees can fill their time working on the project for counting their working hours by the manager for their salary amount counting.
  - and the last Employee has one more option: Logout.

### Benefits of Project:
- From this task management project, communication between employee and manager will be reduced.
- So that purpose, employees and managers save time for other work.
- Managers can create many working tasks and assign them directly to any employee from their own office.
- Employees can get their task in their process, which is assigned by the manager to them.
- Employees start working on this and update their task working status simultaneously.
- Employees can fill their timesheet, and managers can get information directly about project status.
- Also, from the timesheet, managers can easily count the working hours of employees for the payment process.
- Managers can get feedback directly on their portal.
- From this project, the working process will have more connection between employees and managers.
- and it also increases the efficiency of working.

### Purpose of Project:
- Increasing communication between employees & managers.
- Increasing Productivity.
- Reducing complications between communications.
- Reducing meetings between employees & managers and meetings time.
- Reducing calculation of working time of every employee from timesheet.
