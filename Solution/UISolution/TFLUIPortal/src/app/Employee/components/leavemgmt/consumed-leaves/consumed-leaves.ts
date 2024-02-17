import { Component } from '@angular/core';
import { LeaveService } from 'src/app/employee/Services/leave.service';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'consumed-leaves',
  templateUrl: './consumed-leaves.html',
})

export class ConsumedLeaves {

  employeeId:number=12;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;

  constructor(private leaveSvc:LeaveService){ }

  ngOnInit(): void {
    this.leaveSvc.getAnnualConsumedLeavesOfEmployee(this.employeeId,this.year).subscribe((res)=>{
      this.consumedLeave=res;
      console.log(res);
    }) 
  }
}
