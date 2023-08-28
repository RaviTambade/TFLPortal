import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { TimesheetInfo } from 'src/app/models/timesheet-info';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-timesheet-registration',
  templateUrl: './timesheet-registration.component.html',
  styleUrls: ['./timesheet-registration.component.css']
})
export class TimesheetRegistrationComponent implements OnInit {

  timesheetInfo: TimesheetInfo | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  employees: Employee[] | any;
  timesheetId: any | undefined;
  status: boolean | undefined
  empId:number=2

  constructor(private svc: EmployeeService, private router: Router,private route: ActivatedRoute) {
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
    this.route.paramMap.subscribe((params)=>{
      this.timesheetId=params.get('timesheetId')
    })

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

  addTimesheet(form:any): void {
    console.log(form);
    console.log(this.timesheetInfo);
    this.timesheetInfo.employeeId=this.empId;
    this.svc.addTimesheet(this.timesheetInfo).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Timesheet added successfully")
        this.router.navigate(['/timesheet-list']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };




}



