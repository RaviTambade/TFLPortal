import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'leave-applications',
  templateUrl: './LeaveApplicationsList.html',
})
export class LeaveApplicationsList implements OnInit{

  leaveApplns:LeaveApplication[]=[];

  constructor(private leaveSvc:LeaveService){}

  leaveStatus:string="applied";

  ngOnInit(): void {
  
    this.leaveSvc.getAllLeaveApplicationOfStatus(this.leaveStatus).subscribe((res)=>{
    this.leaveApplns=res;
   });
  }
}
