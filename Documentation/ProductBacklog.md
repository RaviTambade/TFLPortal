## Product Backlog - TFL Portal
### Agile Product Backlog

This backlog presents the core functional requirements of the TFL Portal in a structured Agile format. It is organized by epics, features, user roles, priorities, and acceptance criteria to support development, review, and presentation.

### Product Goals
- Provide a centralized platform for project tracking and task coordination.
- Support daily employee time reporting and manager review.
- Enable efficient leave request and approval workflows.
- Provide payroll visibility for employees and HR administration.

### Epic 1: Project and Task Management

#### Feature 1.1: Project Visibility
| ID | Priority | Role | User Story | Acceptance Criteria |
|---|---|---|---|---|
| PM-01 | High | Project Member | As a project member, I want to view the list of projects I am currently working on so that I can quickly access project-related information. | The user can see all assigned projects with project name, status, and basic details. |
| PM-02 | High | Project Member | As a project member, I want to view the details of a specific project so that I can review the sprints and tasks assigned to me. | Selecting a project displays the project overview, relevant sprints, and assigned tasks. |
| PM-03 | Medium | Project Member | As a project member, I want to view the list of sprints associated with the current project so that I can track team activities and sprint schedules. | The project page shows all sprints with dates, current status, and related work items. |

#### Feature 1.2: Task Tracking and Assignment
| ID | Priority | Role | User Story | Acceptance Criteria |
|---|---|---|---|---|
| PM-04 | High | Project Member | As a project member, I want to update the status of my activities so that other team members can see the latest progress of assigned tasks. | The user can update task status and the change is visible to other relevant users. |
| PM-05 | High | Project Member | As a project member, I want to view the tasks assigned to me in a sprint so that I can update the status of my work. | The sprint view displays only the current user's assigned tasks. |
| PM-06 | Medium | Project Member | As a project member, I want to view the tasks assigned to other team members in a sprint so that I can stay informed about ongoing project activities. | The sprint view shows teammate tasks and their current status. |
| PM-07 | High | Project Manager | As a project manager, I want to view a list of all ongoing projects with relevant details so that I can access overall project information quickly. | The manager can view all active projects with status and key metadata. |
| PM-08 | High | Project Manager | As a project manager, I want to view detailed information about a specific project so that I can monitor project progress. | The project detail view shows milestones, progress, and current work status. |
| PM-09 | High | Project Manager | As a project manager, I want to view the list of work assigned to employees so that I can manage workload effectively. | The manager can see employee-wise assignments grouped by project or sprint. |
| PM-10 | High | Project Manager | As a project manager, I want to view detailed task information for a specific employee so that I can track progress and identify challenges. | Selecting an employee shows all assigned tasks, statuses, and pending issues. |
| PM-11 | High | Project Manager | As a project manager, I want to view all sprints for a project so that I can monitor project progress. | The system displays all sprints belonging to the selected project. |
| PM-12 | Medium | Project Manager | As a project manager, I want to assign specific work to employees so that I can distribute project work effectively. | The manager can assign new work items to team members and save the assignment. |
| PM-13 | Medium | Project Manager | As a project manager, I want to modify assigned work so that I can adapt to changing project requirements. | Existing work items can be edited with updated details and deadlines. |
| PM-14 | Medium | Project Manager | As a project manager, I want to remove assigned work from an employee so that I can reassign tasks as needed. | The manager can remove or reassign a work item without affecting unrelated tasks. |
| PM-15 | Medium | Project Manager | As a project manager, I want to add new work items to a project so that I can introduce new tasks easily. | New work items can be created with title, description, and assignment details. |

### Epic 2: Timesheet Management

| ID | Priority | Role | User Story | Acceptance Criteria |
|---|---|---|---|---|
| TS-01 | High | Employee | As an employee, I want to create a timesheet so that I can record my daily work details. | The employee can create a timesheet and add task entries for a selected day. |
| TS-02 | Medium | Employee | As an employee, I want to update my timesheet so that I can modify incorrect or changed information. | Existing timesheet entries can be edited and saved successfully. |
| TS-03 | Medium | Employee | As an employee, I want to delete timesheet details so that I can maintain accurate records. | The employee can remove incorrect entries from the timesheet. |
| TS-04 | Medium | Employee | As an employee, I want to view a list of my timesheets so that I can review my past work records. | The employee can view a history of submitted timesheets. |
| TS-05 | Medium | Employee | As an employee, I want to view the details of a timesheet so that I can see the tasks I completed on a specific day. | Opening a timesheet shows the task list and hours worked for that day. |
| TS-06 | High | HR Manager | As an HR manager, I want to view the timesheet details of all employees so that I can track daily activities. | HR can view submitted timesheets for all employees. |
| TS-07 | High | HR Manager | As an HR manager, I want to approve or reject timesheets so that I can ensure employees have entered correct data. | HR can approve or reject a timesheet and record the decision. |

### Epic 3: Leave Management

| ID | Priority | Role | User Story | Acceptance Criteria |
|---|---|---|---|---|
| LM-01 | High | Employee | As an employee, I want to apply for leave so that I can take time off for personal or professional reasons. | The employee can submit a leave request with dates, type, and reason. |
| LM-02 | Medium | Employee | As an employee, I want to check the status of my leave application so that I can plan accordingly. | The employee can view the current status of each submitted leave request. |
| LM-03 | Medium | Employee | As an employee, I want to cancel a submitted leave application so that I can withdraw my leave request if needed. | The employee can cancel a pending request and the status updates. |
| LM-04 | Medium | Employee | As an employee, I want to update an existing leave application so that I can correct or change the details. | The employee can edit an existing leave request before it is finalized. |
| LM-05 | Medium | Employee | As an employee, I want to view my available leave balance so that I can plan for future leave. | The employee can see current available leave days. |
| LM-06 | Medium | Employee | As an employee, I want to view my consumed leave so that I can track the leave I have already used. | The employee can view the total leave already consumed. |
| LM-07 | Medium | Employee | As an employee, I want to view my total leave entitlement so that I can understand my overall leave allocation. | The employee can view the full annual leave entitlement assigned to them. |
| LM-08 | High | HR Manager | As an HR manager, I want to approve or reject leave applications so that I can manage leave requests effectively. | HR can approve or reject leave requests and record the outcome. |
| LM-09 | High | HR Manager | As an HR manager, I want to view a list of leave applications submitted by employees so that I can review pending and approved requests. | HR can view all leave requests with status and employee details. |
| LM-10 | Medium | HR Manager | As an HR manager, I want to view detailed information about a specific leave application so that I can make informed decisions. | Opening a leave request shows detailed employee and request information. |
| LM-11 | Medium | HR Manager | As an HR manager, I want to update leave allocation for a specific role so that I can adjust leave policies. | HR can update leave allocation for a selected role and save the change. |
| LM-12 | Medium | HR Manager | As an HR manager, I want to add role-based leave rules so that I can manage leave policies effectively. | HR can create new leave policies for specific roles. |

### Epic 4: Payroll Management

| ID | Priority | Role | User Story | Acceptance Criteria |
|---|---|---|---|---|
| PY-01 | High | Employee | As an employee, I want to view a list of my payments so that I can track my salary transactions. | The employee can see all payment records associated with their account. |
| PY-02 | Medium | Employee | As an employee, I want to view detailed information about each payment so that I can review salary details. | Selecting a payment displays salary details, date, and transaction information. |
| PY-03 | Medium | Employee | As an employee, I want to download my salary slip so that I can review my financial history. | The employee can download a salary slip in a supported format. |
| PY-04 | Medium | HR Manager | As an HR manager, I want to manage payroll-related information so that salary processing is accurate and well organized. | HR can review and manage payroll data for employees efficiently. |
