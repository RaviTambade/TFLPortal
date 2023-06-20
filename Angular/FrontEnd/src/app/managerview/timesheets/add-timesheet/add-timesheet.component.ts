import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { TimesheetInfo } from '../timesheetInfo';
import { Project } from 'src/app/project';
import { Task } from '../../Task';
import { Employee } from 'src/app/employee';
import { ActivatedRoute, Router } from '@angular/router';

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
<<<<<<< HEAD

  status: boolean | undefined

  constructor(private svc: ManagerviewService, private router: Router) {
=======
  timesheetId: any | undefined;
  status: boolean | undefined

  constructor(private svc: ManagerviewService, private router: Router,private route: ActivatedRoute) {
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
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
<<<<<<< HEAD
  addTimesheet(form: any): void {
=======

  addTimesheet(form:any): void {
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
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
<<<<<<< HEAD
  }
=======
  };




>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
}



