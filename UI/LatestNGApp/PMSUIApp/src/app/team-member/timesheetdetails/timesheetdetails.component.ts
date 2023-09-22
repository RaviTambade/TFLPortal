import { Component, Input, SimpleChanges } from '@angular/core';
import { Timesheetdetail } from 'src/app/Models/timesheetdetail';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheetdetails',
  templateUrl: './timesheetdetails.component.html',
  styleUrls: ['./timesheetdetails.component.css']
})
export class TimesheetdetailsComponent {
  @Input() selectedTimeSheetId: any;
  selectedTimeSheet:Timesheetdetail={
    timeSheetId: 0,
    date: '',
    fromTime: '',
    toTime: '',
    description: '',
    status: '',
    taskTitle: ''
  }
constructor(private timeSheetService:TimeSheetService){}
ngOnChanges(changes:SimpleChanges){
  if(changes['selectedTimeSheetId'] && this.selectedTimeSheetId !== undefined){
    this.timeSheetService.getTimeSheetDetail(this.selectedTimeSheetId).subscribe((res)=>{
      this.selectedTimeSheet=res
      console.log(this.selectedTimeSheet)
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
