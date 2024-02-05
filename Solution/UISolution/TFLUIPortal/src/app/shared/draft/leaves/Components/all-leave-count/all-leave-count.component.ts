import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeaveApplication } from '../../Models/LeaveApplication';

@Component({
  selector: 'app-all-leave-count',
  templateUrl: './all-leave-count.component.html',
  styleUrls: ['./all-leave-count.component.css']
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
