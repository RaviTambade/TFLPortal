import { Component } from '@angular/core';
import { LeaveCount } from 'src/app/shared/Entities/Leavemgmt/LeaveCount';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'total-leave',
  templateUrl: './total-leave.html',
})
export class TotalLeave{

  annualLeaves:LeaveCount[]=[];
  year:number=2023;
  roleId:number=2;

  constructor(private service:LeaveAnalyticsService){
  }

  ngOnInit(): void {
    this.service.getAnnualLeavesOfRole(this.roleId,this.year).subscribe((res)=>{
      this.annualLeaves=res;
      console.log(res);
    }) 
  }
}
