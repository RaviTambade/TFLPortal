import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';

import { LeavesService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'app-todays-employee-leave',
  templateUrl: './todays-employee-leave.html',
})
export class TodaysEmployeeLeave {

  date:string=new Date().toISOString().slice(0,10);
  leaves:LeaveApplication[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void { 
    console.log(this.date);
    this.leaveService.getLeaveApplicationsByDate(this.date).subscribe((res)=>{
      this.leaves=res;
      console.log(this.leaves);
    }); 
  }
}
