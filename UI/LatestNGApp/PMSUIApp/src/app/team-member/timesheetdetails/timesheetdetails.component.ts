import { Component, Input, SimpleChanges } from '@angular/core';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheetdetails',
  templateUrl: './timesheetdetails.component.html',
  styleUrls: ['./timesheetdetails.component.css']
})
export class TimesheetdetailsComponent {
  @Input() selectedTimeSheetId: any;
  selectedTimeSheet:any={}
constructor(private timeSheetService:TimeSheetService){}
ngOnChanges(changes:SimpleChanges){
  if(changes['selectedTimeSheetId'] && this.selectedTimeSheetId !== undefined){
    this.timeSheetService.getTimeSheetById(this.selectedTimeSheetId).subscribe((res)=>{
      this.selectedTimeSheet=res
      this.selectTimeSheet(this.selectedTimeSheetId)
    })
  }
}
selectTimeSheet(id :number){
  if(this.selectedTimeSheetId === id){
    this.selectedTimeSheetId = null;
  }
  else{
    this.selectedTimeSheetId= id
  }
  this.timeSheetService.setTimeSheetId(id);
    }
}
