import { Component, Input } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../Task';
import { Project } from '../../project';
import { TimesheetInfo } from '../timesheetInfo';
import { Timesheet } from '../timesheet';
import { Employee } from '../../employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  timesheetId: any | undefined;
  timesheetInfo: TimesheetInfo | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  employees: Employee[] | any;

 task : any |undefined;

  status: boolean | undefined

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
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
        this.router.navigate(['/timesheetlist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };



}

