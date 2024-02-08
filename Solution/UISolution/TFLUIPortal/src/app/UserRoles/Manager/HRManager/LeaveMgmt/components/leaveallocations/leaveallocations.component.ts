import { Component } from '@angular/core';
import { LeaveAllocation } from 'src/app/Entities/LeaveAllocation';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-leaveallocations',
  templateUrl: './leaveallocations.component.html',
})
export class LeaveallocationsComponent {

  roleBasedLeaves:LeaveAllocation[]=[];

  constructor(private service:LeavesService){}

  ngOnInit(): void {
    this.service.getAllRoleBasedLeaves().subscribe((res)=>{
      this.roleBasedLeaves=res;
    })
  }
}
