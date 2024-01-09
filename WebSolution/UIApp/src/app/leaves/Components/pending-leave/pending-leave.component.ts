import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { PendingLeave } from '../../Models/PendingLeave';

@Component({
  selector: 'app-pending-leave',
  templateUrl: './pending-leave.component.html',
  styleUrls: ['./pending-leave.component.css']
})
export class PendingLeaveComponent implements OnInit {

  employeeId:number=12;
  pendingLeave:PendingLeave |undefined;
  year:number=2023;

  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
    this.service.getPendingLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
