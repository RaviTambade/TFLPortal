import { Component } from '@angular/core';
import { LeavesCount } from 'src/app/hrmanager/LeaveMgmt/models/LeavesCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-consumed-leave',
  templateUrl: './consumed-leave.component.html',
  styleUrls: ['./consumed-leave.component.css']
})
export class ConsumedLeaveComponent {

  employeeId:number=12;
  consumedLeave:LeavesCount |undefined;
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
