import { Component, OnInit } from '@angular/core';
import { LeavesCount } from 'src/app/hrmanager/LeaveMgmt/models/LeavesCount';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-pending-leave',
  templateUrl: './pending-leave.component.html',
})
export class PendingLeaveComponent implements OnInit {

  employeeId:number=12;
  pendingLeave:LeavesCount |undefined;
  year:number=2023;

  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
    this.service.getAnnualAvailableLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
