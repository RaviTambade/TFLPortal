import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveManagementService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'leaves-status',
  templateUrl: './leaves-status.html',
})
export class LeaveApplicationListByStatus implements OnInit{

  status: string = "applied";
   
  leaves:LeaveApplication[]=[];
  constructor(private svc:LeaveManagementService){}
  
  ngOnInit(): void {
    this.svc.getLeaveApplications(this.status).subscribe((res)=>{
      this.leaves=res;
    })
  }

  filterLeaves(){
      this.svc.getLeaveApplications(this.status).subscribe((res)=>{
      this.leaves=res
    })
  }
}
