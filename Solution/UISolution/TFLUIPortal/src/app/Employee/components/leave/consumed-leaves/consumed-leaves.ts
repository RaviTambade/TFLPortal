import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeaveCount } from 'src/app/shared/Entities/Leavemgmt/LeaveCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'consumed-leaves',
  templateUrl: './consumed-leaves.html',
})

export class ConsumedLeaves {

  employeeId:number=12;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2024;

  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getAnnualConsumedLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.consumedLeave=res;
      console.log(res);
    }) 
  }
}
