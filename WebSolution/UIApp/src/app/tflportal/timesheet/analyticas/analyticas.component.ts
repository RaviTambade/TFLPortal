import { Component } from '@angular/core';

@Component({
  selector: 'app-analyticas',
  templateUrl: './analyticas.component.html',
  styleUrls: ['./analyticas.component.css']
})
export class AnalyticasComponent {
  timesheetId:number|undefined;

  onReceiveTimeSheetId(timesheetId:number){
    this.timesheetId=timesheetId;
  }
}
