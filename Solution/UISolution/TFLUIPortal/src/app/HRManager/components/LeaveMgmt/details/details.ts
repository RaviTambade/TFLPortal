import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'details',
  templateUrl: './details.html',
})

export class Details implements OnInit {

  leaveId:number=2;
  leave:LeaveApplication |undefined;
  constructor(private service:LeaveService){}
  ngOnInit(): void {
      this.service.getLeaveApplication(this.leaveId).subscribe((res)=>{
        this.leave=res;
      })
    }
}
