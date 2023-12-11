import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeSheet } from '../models/TimeSheet';
import { WorkmgmtService } from '../workmgmt.service';


@Component({
  selector: 'timesheet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  employeeId:number=10;
  timeSheets:TimeSheet[]=[];

  @Output() selectedTimeSheetId= new EventEmitter<number>();

  constructor(private workmgmtSvc: WorkmgmtService) {}

  ngOnInit(): void {
  this.workmgmtSvc.getAllTimeSheets(this.employeeId).subscribe((res)=>{
  this.timeSheets=res;
  console.log(res);
  this.selectedTimeSheetId.emit(this.timeSheets[0].id);
    })   
  }

  onSelectedTimeSheetId(timeSheetId:number){
    this.selectedTimeSheetId.emit(timeSheetId);
  }
}


