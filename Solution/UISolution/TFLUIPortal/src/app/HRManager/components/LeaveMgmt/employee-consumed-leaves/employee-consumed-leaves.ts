import { Component, Input } from '@angular/core';
import { AnnualLeaves } from 'src/app/hrmanager/Models/LeaveMgmt/AnnualLeaves';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';


@Component({
  selector: 'employee-consumed-leaves',
  templateUrl: './employee-consumed-leaves.html',
})
export class EmployeeConsumedLeaves {

  @Input() employeeId:number=0;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;
  roleId:number=2;
  constructor(private service:LeaveService){
  }

  ngOnInit(): void {
      this.service.getAnnualConsumedLeavesOfEmployee(this.roleId,this.year).subscribe((res)=>{
        this.consumedLeave=res;
        console.log(res);
    }) 
  }
}
