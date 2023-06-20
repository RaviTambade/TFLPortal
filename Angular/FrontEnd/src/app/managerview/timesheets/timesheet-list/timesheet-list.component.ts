import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'timesheetlist',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[] | undefined;
  id: number = 2;
  date: string;
<<<<<<< HEAD
  timesheetId: any;
  employee: any;

  isSubmitted = false;
  projects = ['PMSAPP', 'OTBMAPP', 'IMSAPP'];

  subscription: Subscription | undefined;
  message: string | undefined;
=======
  timesheetId: any | undefined;
  employee: any;
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf

  project: any | undefined;
  name: string | undefined;

<<<<<<< HEAD


=======
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    this.date = '';
  }

  ngOnInit(): void {
    this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    console.log(this.timesheetId);
<<<<<<< HEAD
    this.svc.getAllTimesheets(this.id, this.date).subscribe(
      (response) => {
=======
    this.svc.getAllTimesheets(this.id, this.date).subscribe((response) => {
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
        this.timesheets = response;
        console.log(this.timesheets);
      });

<<<<<<< HEAD
    this.svc.getEmployee(this.id).subscribe(
      (response) => {
        this.employee = response;
        console.log(this.employee);
      }
    )

    ///////////
    this.subscription = this.svc.getData().subscribe((response) => {
      this.name = response.name;
      this.project = response.data;
      localStorage.setItem('id', response.id);
      console.log(this.name);
      console.log(response);
    })
  }

  onSubmit() {
    this.svc.getAllTimesheets(this.id, this.date).subscribe(
      (response) => {
=======
    this.svc.getEmployee(this.id).subscribe((response) =>{
        this.employee = response;
        console.log(this.employee)
      });

  };

  onSubmit() {
    this.svc.getAllTimesheets(this.id, this.date).subscribe((response) => {
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
        this.timesheets = response;
        console.log(this.timesheets)
      });
  };
  onDetails(timesheetId: any) {
    this.router.navigate(['./detailstimesheet', timesheetId]);
  };

<<<<<<< HEAD
  OnEdit(id: any) {
    this.router.navigate(['./edittimesheet', id]);
  }

  OnDelete(timesheetId: any) {
    this.svc.deleteTimesheet(this.timesheetId).subscribe(
      (response) => {
        this.timesheetId = response;
        console.log(response);
      }
    )
  }

  goToTimesheet(): void {
    this.router.navigate(['./addtimesheet']);
  }

  onDetails(timesheetId: any) {
    this.router.navigate(['./detailstimesheet', timesheetId]);
  }
=======
>>>>>>> c4e131afcf8772fd53b71ed3dd07ac993cc3afdf
}

