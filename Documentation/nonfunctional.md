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
