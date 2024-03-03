import { Component } from '@angular/core';
import { LeaveCount } from 'src/app/employee/Models/LeaveMgmt/LeaveCount';
import { LeaveService } from 'src/app/employee/Services/leave.service';

@Component({
  selector: 'total-leave',
  templateUrl: './total-leave.html',
})
export class TotalLeave{

  annualLeaves:LeaveCount[]=[];
  year:number=2023;
  roleId:number=4;

  constructor(private service:LeaveService){
  }

  ngOnInit(): void {
    this.service.getAnnualLeavesOfRole(this.roleId,this.year).subscribe((res)=>{
      this.annualLeaves=res;
    }) 
  }
}
