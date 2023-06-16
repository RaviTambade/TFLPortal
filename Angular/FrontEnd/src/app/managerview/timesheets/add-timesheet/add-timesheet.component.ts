import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { TimesheetInfo } from '../timesheetInfo';
import { Project } from 'src/app/project';
import { Task } from '../../Task';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'addtimesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {

  timesheetInfo: TimesheetInfo | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  employees: Employee[] | any;



  status: boolean | undefined





  constructor(private svc: ManagerviewService, private router: Router) {
    this.timesheetInfo = {
      projectId: 0,
      taskId: 0,
      employeeId: 0,
      date: '',
      fromtime: '',
      totime: '',
      timesheetId: 0
    }

  }
  ngOnInit(): void {

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
    this.svc.addTimesheet(form).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Timesheet added successfully")
        this.router.navigate(['/timesheetlist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  }




}



