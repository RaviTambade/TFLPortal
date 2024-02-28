import { Component, Input, OnInit } from '@angular/core' 
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'leave-details',
  templateUrl: './leave-details.html',
})
export class LeaveApplicationDetails implements OnInit{
  
@Input() leaveApplication:LeaveApplication | undefined;

leaveDay:number |undefined;
employeeId:number=0;
employees:any;
name:string='';

constructor(private leaveSvc:LeaveService,private membershipSvc:MembershipService ){}
  ngOnInit(): void {
    if(this.leaveApplication){
    this.leaveDay=this.leaveSvc.calculateDays(this.leaveApplication.fromDate,this.leaveApplication.toDate);
    this.employeeId=this.leaveApplication.employeeId;
    this.membershipSvc.getUserDetails(this.employeeId.toString()).subscribe((res)=>{
    this.employees=res;
    this.name=this.employees[0].fullName;
  })
  }
 }
}
