import { Component } from '@angular/core';
import { LeavesCount } from 'src/app/shared/Entities/Leavemgmt/LeavesCount';

import { LeavesService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'app-total-leave',
  templateUrl: './total-leave.html',
})
export class TotalLeave{

  employeeId:number=12;
  pendingLeave:LeavesCount |undefined;
  year:number=2023;
  roleId:number=2;


  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getAnnualLeaves(this.employeeId,this.roleId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
