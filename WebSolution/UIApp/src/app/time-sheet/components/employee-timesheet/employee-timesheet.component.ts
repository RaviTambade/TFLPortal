import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent {
date= new Date().toISOString().slice(0, 10);
  onDateClick(date:string){
    this.date=date
    console.log(date)
  }
}
