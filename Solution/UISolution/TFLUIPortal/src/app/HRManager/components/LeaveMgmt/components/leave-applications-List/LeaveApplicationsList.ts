import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveManagementService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'leave-applications',
  templateUrl: './LeaveApplicationsList.html',
})
export class LeaveApplicationsList implements OnInit{

  leaveApplns:LeaveApplication[]=[];

  constructor(private leaveSvc:LeaveManagementService){}

  leaveStatus:string="applied";

  ngOnInit(): void {
  
    this.leaveSvc.getLeaveApplications(this.leaveStatus).subscribe((res)=>{
    this.leaveApplns=res;
   });
  }
}
