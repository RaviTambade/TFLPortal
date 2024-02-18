import { Component } from '@angular/core';
import { LeaveCount } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveCount';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'total-leave',
  templateUrl: './total-leave.html',
})
export class TotalLeave{

  annualLeaves:LeaveCount[]=[];
  year:number=2023;
  roleId:number=2;

  constructor(private service:LeaveService){
  }

  ngOnInit(): void {
    this.service.getAnnualLeavesOfRole(this.roleId,this.year).subscribe((res)=>{
      this.annualLeaves=res;
      console.log(res);
    }) 
  }
}
