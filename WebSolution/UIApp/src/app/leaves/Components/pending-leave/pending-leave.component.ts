import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { PendingLeave } from '../../Models/PendingLeave';

@Component({
  selector: 'app-pending-leave',
  templateUrl: './pending-leave.component.html',
  styleUrls: ['./pending-leave.component.css']
})
export class PendingLeaveComponent implements OnInit {

  employeeId:number=12;
  pendingLeave:PendingLeave |undefined;
  totalLeaves:any;
  roleId:number=4;
  year:number=2023;


  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getPendingLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
      this.totalLeaves=res.paidLeaves+res.sickLeaves+res.casualLeaves+res.unpaidLeaves;
    }) 
  }
}
