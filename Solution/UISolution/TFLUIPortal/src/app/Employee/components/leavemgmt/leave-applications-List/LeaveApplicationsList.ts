import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/employee/Services/leave.service';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';


@Component({
  selector: 'leave-applications',
  templateUrl: './LeaveApplicationsList.html',
})
export class LeaveApplicationList implements OnInit{

  leaveApplns:LeaveApplication[]=[];

  constructor(private leaveSvc:LeaveService){}

  leaveStatus:string="applied";

  ngOnInit(): void {
  
    this.leaveSvc.getAllLeaveApplications(12).subscribe((res)=>{
    this.leaveApplns=res;
   });
  }
}
