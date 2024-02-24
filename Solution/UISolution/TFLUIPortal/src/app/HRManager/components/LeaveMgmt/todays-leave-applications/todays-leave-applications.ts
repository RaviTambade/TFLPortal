import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'todays-leave-applications',
  templateUrl: './todays-leave-applications.html',
})
export class TodaysLeaveApplications {

  date:string=new Date().toISOString().slice(0,10);
  leaves:LeaveApplication[]=[];
  
  constructor(private leaveService:LeaveService){}
  
  ngOnInit(): void { 
    this.leaveService.getLeaveApplicationsOfDate(this.date).subscribe((res)=>{
      this.leaves=res;
    }); 
  }
}
