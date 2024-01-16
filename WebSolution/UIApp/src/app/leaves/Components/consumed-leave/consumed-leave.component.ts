import { Component } from '@angular/core';
import { PendingLeave } from '../../Models/PendingLeave';
import { LeavesService } from '../../Services/leaves.service';

@Component({
  selector: 'app-consumed-leave',
  templateUrl: './consumed-leave.component.html',
  styleUrls: ['./consumed-leave.component.css']
})
export class ConsumedLeaveComponent {

  employeeId:number=12;
  consumedLeave:PendingLeave |undefined;
  year:number=2023;


  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getConsumedLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.consumedLeave=res;
      console.log(res);
    }) 
  }
}
