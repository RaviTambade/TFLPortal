import { Component, Input, SimpleChanges } from '@angular/core';
import { MonthLeave } from 'src/app/shared/Entities/Leavemgmt/MonthLeave';

import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.html',
})
export class EmployeeLeaves{

  @Input() employeeId:number|undefined;
  monthLeaves:MonthLeave[]=[];
  month:number=1;
  year:number=2024;

  constructor(private leaveService:LeavesService){
  }
  
  ngOnChanges(changes:SimpleChanges): void {
    this.leaveService.getAnnualLeaveCount(changes["employeeId"].currentValue,this.month,this.year).subscribe((res)=>{
    this.monthLeaves=res;
    console.log(res);
    })
  }
}
