import { Component } from '@angular/core';
import { LeaveAllocation } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveAllocation';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'leaveallocations',
  templateUrl: './leaveallocations.html',
})
export class Leaveallocations {

  roleBasedLeaves:LeaveAllocation[]=[];

  constructor(private leaveAllocationSvc:LeaveService){}

  ngOnInit(): void {
    this.leaveAllocationSvc.getAllLeaveAllocations().subscribe((res)=>{
      this.roleBasedLeaves=res;
    })
  }
}
