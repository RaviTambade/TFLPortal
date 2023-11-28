import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetEntry';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css']
})
export class InsertTimeSheetComponent implements OnInit {
  
  constructor(private timeSheetSvc:TimeSheetService){}
  


  timeSheetEntries:TimeSheetEntry[]=[];

  subscription:Subscription |undefined;

 
  ngOnInit(): void {
    this.subscription=this.timeSheetSvc.ReceiveTimeSheetEntries().subscribe((res)=>{
      this.timeSheetEntries=res;
      console.log(this.timeSheetEntries);
    })
    
  }

  onSubmit(){
    let obj={
    id: 0,
    date: new Date().toISOString().slice(0,10),
    status: '',
    employeeId: 10,
    timeSheetEntries:this.timeSheetEntries
    }

    console.log(obj);
      this.timeSheetSvc.addTimeSheet(obj).subscribe((res)=>{
      console.log(res);
      alert("timesheet added")
    });

  }




  // onReceiveTimeSheetEntries(event:TimeSheetEntry){
  // this.timeSheetEntries.push(event);
  // }

}
