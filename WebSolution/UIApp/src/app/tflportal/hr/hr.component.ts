import { Component } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent {
  timesheetId:number|undefined;

  onReceiveTimeSheetId(timesheetId:number){
    this.timesheetId=timesheetId;
  }
}
