import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheet } from '../../models/timesheet';

@Component({
  selector: 'timesheet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  employeeId:number=1;
  timeSheets:TimeSheet[]=[];

  @Output() selectedTimeSheetId= new EventEmitter<TimeSheet>();

  constructor(private timeSheetSvc:TimeSheetService){}

  ngOnInit(): void {
  this.timeSheetSvc.getTimeSheetsOfEmployee(this.employeeId).subscribe((res)=>{
  this.timeSheets=res;
  this.selectedTimeSheetId.emit(this.timeSheets[0]);
  })   
  }
}


