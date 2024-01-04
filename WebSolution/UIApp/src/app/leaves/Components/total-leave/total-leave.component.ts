import { Component } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { PendingLeave } from '../../Models/PendingLeave';

@Component({
  selector: 'app-total-leave',
  templateUrl: './total-leave.component.html',
  styleUrls: ['./total-leave.component.css']
})
export class TotalLeaveComponent {

  employeeId:number=12;
  pendingLeave:PendingLeave |undefined;
  year:number=2023;


  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getTotalLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
