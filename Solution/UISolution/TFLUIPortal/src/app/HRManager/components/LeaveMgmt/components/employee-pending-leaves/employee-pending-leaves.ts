import { Component, Input } from '@angular/core';
import { LeavesCount } from 'src/app/shared/Entities/Leavemgmt/LeavesCount';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'app-employee-pending-leaves',
  templateUrl: './employee-pending-leaves.html',
})
export class EmployeePendingLeaves {

  @Input() employeeId:number=0;
  pendingLeave:LeavesCount |undefined;
  year:number=2024;
  roleId:number=2;
 
  constructor(private service:LeaveAnalyticsService){
  }

  ngOnInit(): void {
    this.service.getAnnualAvailableLeavesOfEmployee(this.employeeId,this.roleId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
 }
}