import { Component, Input } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { Task } from '../../Task';
import { Project } from '../../project';
import { TimesheetInfo } from '../timesheetInfo';
import { Timesheet } from '../timesheet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
<<<<<<< HEAD
  @Input() timesheet: Timesheet | any;
=======

>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
  timesheetId: any | undefined;
  timesheetInfo: TimesheetInfo | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  employees: Employee[] | any;

<<<<<<< HEAD

=======
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
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
<<<<<<< HEAD

=======
    this.route.paramMap.subscribe((params) => {
      this.timesheetId = params.get('timesheetId');
      console.log(this.timesheetId);
    });

    this.svc.getTimesheet(this.timesheetId).subscribe(
      (res) => {
        this.timesheetInfo = res;
        console.log(this.timesheetInfo);
      });
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf

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
  reciveTimesheet($event: any) {
    this.timesheet = $event.timesheet;
  }
  updateTimesheet(form: any): void {
    console.log(form);
=======

  updateTimesheet(form: any): void {
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
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

