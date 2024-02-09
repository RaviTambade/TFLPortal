import { Component, Input } from '@angular/core';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeavesCount } from 'src/app/shared/Entities/Leavemgmt/LeavesCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-employee-consumed-leaves',
  templateUrl: './employee-consumed-leaves.html',
})
export class EmployeeConsumedLeaves {

  @Input() employeeId:number=0;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;
  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
      this.service.getAnnualConsumedLeaves(this.employeeId,this.year).subscribe((res)=>{
        this.consumedLeave=res;
        console.log(res);
    }) 
  }
}
