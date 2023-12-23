import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  timesheetId:number|undefined;

  onReceiveTimeSheetId(timesheetId:number){
    this.timesheetId=timesheetId;
  }
}
