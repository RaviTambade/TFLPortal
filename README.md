# Transflower Portal

1. Transflower Portal is a intranet application  built as learning project to apply technology learning. This project work helps to understand complete end to end Software Development process using Agile Methodolgy. The main purpose of this activity is to learn technologies by doing hands on. We could learn and apply skills of Software Development to build FullStack .NET Developer Skill.

Intern participate in each and every process of Application Development and apply technical concepts to solve business problem. TFL Portal is being developed by TAP (Transflower Acceleration Program) interns using .NET 8.0, Angular , MySql and React.
 Tranflower Portal is now  just a software solution but it is a journey of a learner from zero knowledge of Software Development to Project Ready Resource for an IT (Information Technology) company.

 TFL Portal is a Software Crafting expereince along with Mentor and team .

<a href=""> System Requirements Specification</a>
<a href=""> User Stories</a>

  System Web Application is intended to provide a suitable solution for Project Managers and Project team members to create, assign, complete, update, and find daily Time Sheets of team members' working process.
2. The ability for managers is to create daily tasks, assign tasks to team members, check time sheets of employees, check updates of tasks from employees, also have the ability to update tasks, delete tasks, delete team members from projects, etc.
3. The ability for team members is to complete tasks which will be assigned by the project manager and update task status and also have the ability to update their daily time sheet.
4. Time sheet management is also provided for recording the amount of team members' time spent on allocated jobs. Time sheet management is a conventional method of calculating team members' performance and is done by tabular format using an Excel sheet, etc.
5. Initially, the time sheet was used in fields of payroll calculation and account management.
6. From the time sheet, the start date and end date of the project can be recorded, and these statistics can be later used for accounting, payroll, billing of clients, tracking, estimation, and calculating hours of team members.




**Purpose:**
1. This documentation specifies the System Requirements Specification (SRS) for the Project Management System (PMS). It describes the scope of the system, both functional and non-functional requirements for the software, design constraints, and system interfaces.
2. The main purpose of the Project Management system is to manage overall things that will be done during project development.
3. In this process, we can control the team managers, team members of the project, and also we can manage or follow the time sheet of team members.
4. From this Project Management System, the manager can define daily tasks for team members on these running projects and get updates from members about the project, and know their time period working on these projects.

**Scope:**
1. The Project Management System addresses the management of software projects. It provides a framework for organizing and managing resources in such a way that these resources deliver all the work required to complete software projects within defined scope, time, and cost constraints.
2. The system applies only to the management of software projects and is a tool that facilitates decision-making; the PMS does not make decisions.
3. The SRS describes only the required functionality of PMS, not the functionality of external systems like data storage, change management, or version control systems.
4. The Project Management System provides an interface for both Managers and team members in the industry to use to track the daily status of projects and time sheets of members working on these projects.
5. The system will allow for the management of team members' time sheets working in any IT firms. Team members will be able to log in and look at their own time sheets, while administrators will be able to override worked hours values.
6. Each User, Manager, Team member has different user interfaces.
7. The Project manager interface will allow for entering/creating new tasks, providing a time period for tasks, editing previous tasks, deleting tasks, searching tasks, finding time sheets of team members, and finding the status of tasks and project status. Also, have the authority to assign and delete team members from the project.
8. The team member interface will allow searching tasks assigned by the project manager and also has action methods to upload the status of the project and update their own time sheets of project working.

**Product Perspective:**
1. PMS is a standalone system that provides functionality described in the Product functions section. It includes all subsystems needed to fulfill these software requirements. In addition, the PMS has interfaces to the external systems, such as Version Control System, Change Management and Bug Tracking System, and Payroll System. These interfaces shall be implemented according to available industry standards and shall be independent of a specific external system.


**User Characteristics:**
There are two kinds of users: Admin/Project Manager as a user and Employee/Team Member is also a user.

**Admin User/Project Manager:**
- Override timesheet value
- View timesheet values
- Add/Remove employees
- Update the database with values

**Employee User/Team Member:**
- View timesheet value
- Finalize time worked
- Clock-in and clock-out

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

