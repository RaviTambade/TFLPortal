import { Component } from '@angular/core';
import { RoleLeaveAllocation } from 'src/app/shared/Entities/Leavemgmt/LeaveAllocation';
import { LeavesService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'app-leaveallocations',
  templateUrl: './leaveallocations.html',
})
export class Leaveallocations {

  roleBasedLeaves:RoleLeaveAllocation[]=[];

  constructor(private service:LeavesService){}

  ngOnInit(): void {
    this.service.getAllRoleLeaveAllocations().subscribe((res)=>{
      this.roleBasedLeaves=res;
    })
  }
}
