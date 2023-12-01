import { Component, Input } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheetEntry } from '../../models/TimeSheetEntry';
;

@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  timeSheetId:number |undefined;
  timeSheetEntries:TimeSheetEntry[]=[];
  

  constructor(private timeSheetSvc:TimeSheetService){}

  onReceiveTimeSheetId(event:any){
    this.timeSheetId=event;
    console.log(this.timeSheetId);
    if(this.timeSheetId)
    this.timeSheetSvc.getTimeSheetDetails(this.timeSheetId).subscribe((res)=>{
      this.timeSheetEntries=res;
      console.log("🚀 ~ this.timeSheetSvc.getTimeSheetDetails ~ res:", res);
    })
  }
}
