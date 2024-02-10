import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'total-leave',
  templateUrl: './total-leave.html',
})
export class TotalLeave{

  employeeId:number=12;
  pendingLeave:AnnualLeaves |undefined;
  year:number=2023;
  roleId:number=2;

  constructor(private service:LeaveAnalyticsService){
  }

  ngOnInit(): void {
    this.service.getAnnualConsumedLeavesOfEmployee(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
