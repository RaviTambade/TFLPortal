import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'leave-applications',
  templateUrl: './LeaveApplicationsList.html',
})
export class LeaveApplicationsList implements OnInit{

  leaveApplns:LeaveApplication[]=[];

  constructor(private leaveSvc:LeaveAnalyticsService){}

  leaveStatus:string="applied";

  ngOnInit(): void {
  
    this.leaveSvc.getAllLeaveApplicationOfStatus(this.leaveStatus).subscribe((res)=>{
    this.leaveApplns=res;
   });
  }
}
