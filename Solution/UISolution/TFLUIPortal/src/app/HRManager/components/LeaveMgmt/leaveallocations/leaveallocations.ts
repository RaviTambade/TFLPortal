import { Component } from '@angular/core';
import { LeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';
import { LeaveAllocationService } from 'src/app/shared/services/Leave/leaveallocation.service';

@Component({
  selector: 'leaveallocations',
  templateUrl: './leaveallocations.html',
})
export class Leaveallocations {

  roleBasedLeaves:LeaveAllocation[]=[];

  constructor(private leaveAllocationSvc:LeaveAllocationService){}

  ngOnInit(): void {
    this.leaveAllocationSvc.getAllLeaveAllocations().subscribe((res)=>{
      this.roleBasedLeaves=res;
    })
  }
}
