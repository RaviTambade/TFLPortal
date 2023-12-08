import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheet } from '../../models/timesheet';

@Component({
  selector: 'timesheet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  employeeId:number=10;
  timeSheets:TimeSheet[]=[];

  @Output() selectedTimeSheetId= new EventEmitter<number>();

  constructor(private timeSheetSvc:TimeSheetService){}

  ngOnInit(): void {
  this.timeSheetSvc.getAllTimeSheets(this.employeeId).subscribe((res)=>{
  this.timeSheets=res;
  console.log(res);
  this.selectedTimeSheetId.emit(this.timeSheets[0].id);
    })   
  }

  onSelectedTimeSheetId(timeSheetId:number){
    this.selectedTimeSheetId.emit(timeSheetId);
  }
}


