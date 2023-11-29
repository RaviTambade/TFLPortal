import { Component, Input } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheet } from '../../models/timesheet';
import { TimeSheetEntry } from '../../models/TimeSheetEntry';

@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() timeSheetId:number |undefined;
  timeSheet:TimeSheetEntry |undefined;
  selectedTimeSheetId:TimeSheet |undefined;

  constructor(private timeSheetSvc:TimeSheetService){}

  onReceiveTimeSheetId(event:any){
    this.timeSheetId=this.selectedTimeSheetId;
    this.timeSheetSvc.getTaskDetails(this.timeSheetId).subscribe((res)=>{
      this.timeSheet=res;
    })
  }
}