import { Component, Input, OnInit } from '@angular/core';
 
import { LeaveManagementService } from 'src/app/shared/services/Leave/leavemgmt.service';
 
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';


@Component({
  selector: 'leave-details',
  templateUrl: './leave-details.html',
})
export class LeaveDetails implements OnInit{
@Input() leaveApplication:LeaveApplication | undefined;

leaveDay:number |undefined;
employeeId:number=0;
employees:any;
name:string='';

constructor(private leaveSvc:LeaveManagementService,private userSvc:MembershipService ){}
  ngOnInit(): void {
    if(this.leaveApplication){
    this.leaveDay=this.leaveSvc.calculateDays(this.leaveApplication.fromDate,this.leaveApplication.toDate);
    this.employeeId=this.leaveApplication.employeeId;
    this.userSvc.getDetails(this.employeeId).subscribe((res)=>{
      this.employees=res;
      this.name=this.employees[0].fullName;
    })
    }
 }
}
