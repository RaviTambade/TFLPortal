import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/draft/leaves/Models/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-todays-employee-leave',
  templateUrl: './todays-employee-leave.component.html',
  styleUrls: ['./todays-employee-leave.component.css']
})
export class TodaysEmployeeLeaveComponent {

  date:string=new Date().toISOString().slice(0,10);
  leaves:LeaveApplication[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void { 
    console.log(this.date);
    this.leaveService.getLeaveDetailsByDate(this.date).subscribe((res)=>{
      this.leaves=res;
      console.log(this.leaves);
    }); 
  }
}
