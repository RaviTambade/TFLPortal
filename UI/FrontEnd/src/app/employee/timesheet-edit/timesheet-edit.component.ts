import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Task } from 'src/app/models/task';
import { TimesheetInfo } from 'src/app/models/timesheet-info';
import { Project } from 'src/app/project';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-timesheet-edit',
  templateUrl: './timesheet-edit.component.html',
  styleUrls: ['./timesheet-edit.component.css']
})
export class TimesheetEditComponent implements OnInit{
  timesheetId: any | undefined;
  timesheetInfo: TimesheetInfo | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  employees: Employee[] | any;

 task : any |undefined;

  status: boolean | undefined

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.timesheetInfo = {
      projectId: 0,
      taskId: 0,
      employeeId: 0,
      date: '',
      fromtime: '',
      totime: '',
      timesheetId: 0
    };
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.timesheetId = params.get('timesheetId');
      console.log(this.timesheetId);
    });
    this.svc.getTimesheet(this.timesheetId).subscribe(
      (res) => {
        this.timesheetInfo = res;
        console.log(this.timesheetInfo);
      });

    this.svc.getAllProjects().subscribe((response) => {
      this.projects = response;
      console.log(response);
    });

    this.svc.getAllTasks().subscribe((response) => {
      this.tasks = response;
      console.log(response);
    });

    this.svc.getAllEmployees().subscribe((response) => {
      this.employees = response;
      console.log(response);
    });

  };

  updateTimesheet(form: any): void {
    this.svc.updateTimesheet(form).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Timesheet updated successfully")
        this.router.navigate(['/timesheet-list']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };
}
