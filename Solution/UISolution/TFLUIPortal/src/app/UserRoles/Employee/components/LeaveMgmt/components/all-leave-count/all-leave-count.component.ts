import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/Entities/LeaveApplication';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-all-leave-count',
  templateUrl: './all-leave-count.component.html',
})
export class AllLeaveCountComponent implements OnInit{
  
  status="applied";
  employeeId:number |any;
  appliedLeaves:LeaveApplication[]=[];

  constructor(private leaveService:LeavesService){
   this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {
   this.leaveService.getLeaveDetailsOfEmployee(this.employeeId,this.status).subscribe((res)=>{
   this.appliedLeaves=res;
   })
  }
}
