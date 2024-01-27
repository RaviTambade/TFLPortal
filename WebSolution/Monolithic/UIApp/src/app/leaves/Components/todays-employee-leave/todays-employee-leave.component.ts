import { Component } from '@angular/core';
import { LeaveDetails } from '../../Models/LeaveDetails';
import { LeavesService } from '../../Services/leaves.service';

@Component({
  selector: 'app-todays-employee-leave',
  templateUrl: './todays-employee-leave.component.html',
  styleUrls: ['./todays-employee-leave.component.css']
})
export class TodaysEmployeeLeaveComponent {

  date:string=new Date().toISOString().slice(0,10);
  leaves:LeaveDetails[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void { 
    console.log(this.date);
    this.leaveService.getLeaveDetailsByDate(this.date).subscribe((res)=>{
      this.leaves=res;
      console.log(this.leaves);
    }); 
  }
}
