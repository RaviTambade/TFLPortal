import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/hrmanager/Models/LeaveMgmt/AnnualLeaves';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';


@Component({
  selector: 'employee-consumed-leaves',
  templateUrl: './employee-consumed-leaves.html',
})
export class EmployeeConsumedLeaves {

  employeeId:number=12;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;

  constructor(private svc:LeaveService){ }

  ngOnInit(): void {
    this.svc.getAnnualConsumedLeavesOfEmployee(this.employeeId,this.year).subscribe((res)=>{
      this.consumedLeave=res;
    }) 
  }
}
