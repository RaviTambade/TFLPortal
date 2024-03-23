import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/hrmanager/Models/LeaveMgmt/AnnualLeaves';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'available-leaves',
  templateUrl: './available-leaves.html',
})

export class AvailableLeaves {

  // @Input() employeeId:number=0;
  employeeId:number=16;
  availableLeave:AnnualLeaves |undefined;
  year:number=2023;
  roleId:number=2;
 
  constructor(private service:LeaveService){
  }

  ngOnInit(): void {
    this.service.getAnnualAvailableLeavesOfEmployee(this.employeeId,this.roleId,this.year).subscribe((res)=>{
      this.availableLeave=res;
      console.log(res);
    }) 
  }
}