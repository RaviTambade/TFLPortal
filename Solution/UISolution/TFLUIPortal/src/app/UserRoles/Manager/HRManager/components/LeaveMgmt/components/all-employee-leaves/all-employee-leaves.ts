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

  ngOnInit(): void {
   this.leaveService.getAllLeaveApplications().subscribe((res)=>{
    this.leaveApplications=res;
    this.appliedLeaves=this.leaveApplications.filter(u=>u.status=="applied");
    console.log(this.appliedLeaves);
        // this.employeeIds = this.appliedLeaves.map(item => item.employeeId).filter((value, index, self) => self.indexOf(value) === index); // Filter duplicates
        // let Ids = this.employeeIds.join(","); 
        //                   this.svc.getUserDetails(Ids).subscribe(data => {
        //                                                                   for (const responseItem of data) {
        //                                                                     const users = this.data.filter(u => u.employeeId === responseItem.id);
        //                                                                     console.log(users);
        //                                                                     for (const user of users) {
        //                                                                       user.name = responseItem.name;
        //                                                                     }
        //                                                                   }
        // });
   });
  }
}
