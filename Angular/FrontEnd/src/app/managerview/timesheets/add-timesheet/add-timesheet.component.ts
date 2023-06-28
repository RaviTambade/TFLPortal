import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { TimesheetInfo } from '../timesheetInfo';
import { Project } from 'src/app/project';
import { Task } from '../../Task';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';

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
  timesheetId: any | undefined;
  status: boolean | undefined
  empId:number=2

  constructor(private svc: ManagerviewService, private router: Router,private route: ActivatedRoute) {
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
        this.router.navigate(['/timesheetlist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };




}



