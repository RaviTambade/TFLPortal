import { Component } from '@angular/core';
import {  RoleLeaveAllocation } from 'src/app/employee/Models/LeaveMgmt/LeaveAllocation';
import { LeaveService } from 'src/app/employee/Services/leave.service';

@Component({
  selector: 'leave-allocation',
  templateUrl: './leave-allocation.html',
})
export class LeaveAllocation {

  leave:RoleLeaveAllocation=new RoleLeaveAllocation(1,2,2,2,2,2,2);

  constructor(private leaveAllocationSvc:LeaveService){


  }

  ngOnInit(): void {
    this.leaveAllocationSvc.getLeaveAllocationByRole(1).subscribe((res)=>{
      this.leave=res;
    })
  }
}
