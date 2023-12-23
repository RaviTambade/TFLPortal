import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  timesheetId:number|undefined;

  onReceiveTimeSheetId(timesheetId:number){
    this.timesheetId=timesheetId;
  }
}
