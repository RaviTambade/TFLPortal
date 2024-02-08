import { Component, Input } from '@angular/core';
import { LeavesCount } from 'src/app/shared/Entities/Leavemgmt/LeavesCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-employee-consumed-leaves',
  templateUrl: './employee-consumed-leaves.component.html',
})
export class EmployeeConsumedLeavesComponent {

  @Input() employeeId:number=0;
  consumedLeave:LeavesCount |undefined;
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