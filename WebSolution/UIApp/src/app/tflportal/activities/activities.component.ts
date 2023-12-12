import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  timeSheetId:number|undefined;

  onReceiveTimeSheetId(timesheetId:number){
    this.timeSheetId=timesheetId;
  }
}
