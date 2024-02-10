import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'app-all-employee-leaves',
  templateUrl: './all-employee-leaves.html',
})
export class AllEmployeeLeaves implements OnInit{

  leaveApplications:LeaveApplication[]=[];
  appliedLeaves:LeaveApplication[]=[];
  employeeIds:any;

  constructor(private leaveService:LeavesService,private svc:MembershipService){}

  leaveStatus:string="applied"
  ngOnInit(): void {
   this.leaveService.getLeaveApplications(this.leaveStatus).subscribe((res)=>{
    this.leaveApplications=res;
      console.log(res);
   });
  }
}
