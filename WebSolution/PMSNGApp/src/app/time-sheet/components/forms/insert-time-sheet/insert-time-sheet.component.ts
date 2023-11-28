import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetEntry';
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



  // onReceiveTimeSheetEntries(event:TimeSheetEntry){
  // this.timeSheetEntries.push(event);
  // }

}
