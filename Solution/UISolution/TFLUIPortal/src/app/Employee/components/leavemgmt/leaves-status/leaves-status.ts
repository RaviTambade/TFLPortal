import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'leaves-status',
  templateUrl: './leaves-status.html',
})
export class LeaveApplicationListByStatus implements OnInit{

  status: string = "applied";
   
  leaves:LeaveApplication[]=[];
  constructor(private svc:LeaveService){}
  
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
