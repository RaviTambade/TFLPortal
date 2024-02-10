import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'leaves-status',
  templateUrl: './leaves-status.html',
})
export class LeaveApplicationListByStatus implements OnInit{

  status: string = "applied";
   
  leaves:LeaveApplication[]=[];
  constructor(private svc:LeaveAnalyticsService){}
  
  ngOnInit(): void {
    this.svc.getAllLeaveApplicationOfStatus(this.status).subscribe((res)=>{
      this.leaves=res;
    })
  }

  filterLeaves(){
      this.svc.getAllLeaveApplicationOfStatus(this.status).subscribe((res)=>{
      this.leaves=res
    })
  }
}
