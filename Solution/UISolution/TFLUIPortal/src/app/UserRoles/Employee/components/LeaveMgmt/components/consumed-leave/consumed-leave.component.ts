import { Component } from '@angular/core';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeavesCount } from 'src/app/shared/Entities/Leavemgmt/LeavesCount';
 
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-consumed-leave',
  templateUrl: './consumed-leave.component.html'
})
export class ConsumedLeaveComponent {

  employeeId:number=12;
  consumedLeave:AnnualLeaves |undefined;
  year:number=2023;


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
