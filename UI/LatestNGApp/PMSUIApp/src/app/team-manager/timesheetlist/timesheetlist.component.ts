import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheetlist',
  templateUrl: './timesheetlist.component.html',
  styleUrls: ['./timesheetlist.component.css']
})
export class TimesheetlistComponent {
  constructor(
    private router:Router
  ) {}

  selectTimesheet() {
    this.router.navigate(["teammanager/timesheetdetails"])
   
  }

}
