import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';
import { LeaveStatus } from 'src/app/shared/Entities/Leavemgmt/LeaveStatus';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';


@Component({
  selector: 'leave-details',
  templateUrl: './leave-details.html',
})
export class LeaveDetails {
@Input() appliedLeaves:LeaveApplication | undefined;

  updateStatus:LeaveStatus={
    id: 0,
    status: ''
  }

  leaveDetails:LeaveApplication|undefined;

  constructor() {}

  

  onApproved(id:number){
    // this.updateStatus.status="sanctioned";
    // this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
    //   console.log(res);
    // });
  }

  onReject(id:number){
    // this.updateStatus.status="notsanctioned";
    // this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
    //   console.log(res);
    // });
  }
}
