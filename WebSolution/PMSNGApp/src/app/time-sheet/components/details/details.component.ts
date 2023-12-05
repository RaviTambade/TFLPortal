import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheetEntry } from '../../models/timesheetentry';
;

@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  @Input() timeSheetId!:number ;
  timeSheetEntries:TimeSheetEntry[]=[];
  

  constructor(private timeSheetSvc:TimeSheetService){}
  ngOnChanges(changes:SimpleChanges): void {
    this.timeSheetSvc.getTimeSheetEntries(changes['timeSheetId'].currentValue).subscribe((res)=>{
      this.timeSheetEntries=res;
    })
  }

  
}
