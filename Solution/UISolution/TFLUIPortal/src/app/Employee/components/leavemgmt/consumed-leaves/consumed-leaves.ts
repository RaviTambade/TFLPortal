import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/employee/Models/LeaveMgmt/AnnualLeaves';
import { LeaveService } from 'src/app/employee/Services/leave.service';

@Component({
  selector: 'consumed-leaves',
  templateUrl: './consumed-leaves.html',
})

export class ConsumedLeaves {

  employeeId:number=12;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;

  constructor(private svc:LeaveService){ }

  ngOnInit(): void {
    this.svc.getAnnualConsumedLeavesOfEmployee(this.employeeId,this.year).subscribe((res)=>{
      this.consumedLeave=res;
      console.log(res);
    }) 
  }
}
