import { Component, Input, SimpleChanges } from '@angular/core';
import { MonthLeave } from 'src/app/shared/Entities/Leavemgmt/MonthLeave';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'employee-leaves',
  templateUrl: './employee-leaves.html',
})
export class EmployeeLeaves{

  @Input() employeeId:number|undefined;
  monthLeaves:MonthLeave[]=[];
  month:number=1;
  year:number=2024;

  constructor(private leaveSvc:LeaveAnalyticsService){
  }
  
  ngOnChanges(changes:SimpleChanges): void {
    this.leaveSvc.getAnnualLeaveCountOfEmployee(changes["employeeId"].currentValue,this.month,this.year).subscribe((res)=>{
    this.monthLeaves=res;
    })
  }
}
