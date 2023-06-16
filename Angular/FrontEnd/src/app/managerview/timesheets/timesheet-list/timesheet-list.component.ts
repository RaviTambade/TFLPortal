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
  date:string;
  timesheetId: any;
  employee:any;

  isSubmitted = false;
  projects = ['PMSAPP', 'OTBMAPP', 'IMSAPP'];

  subscription: Subscription | undefined;
  message: string | undefined;

  project: any | undefined;
  name: string | undefined;

  

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute,public fb: FormBuilder) { 
    this.date='';
  }
  ngOnInit(): void {
    this.timesheetId = this.route.snapshot.paramMap.get('timesheetId');
    console.log(this.timesheetId);
    this.svc.getAllTimesheets(this.id,this.date).subscribe(
      (response) => {
        this.timesheets = response;
        console.log(this.timesheets);
      })

     this.svc.getEmployee(this.id).subscribe(
      (response)=>{
        this.employee=response;
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

  onSubmit(){
       this.svc.getAllTimesheets(this.id,this.date).subscribe(
       (response) => {
        this.timesheets = response;
        console.log(this.timesheets);
      })
  }

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
  goToAddTimesheet(id:any): void {
    this.router.navigate(['./detailtimesheet', id]);
  }

  

/////////////////////////////////////////////////////////////////////

registrationForm = this.fb.group({
  selectedProject: [' ', [Validators.required]],
});

changeProject(e: any) {
  this.selectedProject?.setValue(e.target.value, {
    onlySelf: true,
  });
}

//Access formcontrols getter

get selectedProject() {
  return this.registrationForm.get('selectedProject');
}

onSubmitt(): void {
  console.log(this.registrationForm);
  this.isSubmitted = true;
  if (!this.registrationForm.valid) {
    false;
  }
  else {
    console.log(JSON.stringify(this.registrationForm.value));
    this.svc.sendProject(this.registrationForm.value);
  }
}

ngOnDestroy() {
  if (this.subscription != undefined)
    this.subscription.unsubscribe();
}





}
