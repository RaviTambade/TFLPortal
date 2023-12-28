import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Timesheet } from '../../models/timesheet';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'timesheet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  employeeId:number=10;
  timeSheets:Timesheet[]=[];

  @Output() selectedTimeSheetId= new EventEmitter<number>();

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
  this.workmgmtSvc.getAllTimeSheets(this.employeeId).subscribe((res)=>{
  this.timeSheets=res;
  console.log(res);
  this.selectedTimeSheetId.emit(this.timeSheets[0].id);
    })   
  }

// onSelectedTimeSheetId(timesheetId:number){
//     this.selectedTimeSheetId.emit(timesheetId);
//   }
}


