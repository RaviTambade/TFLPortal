import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/Entities/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-employee-leaves-by-date',
  templateUrl: './employee-leaves-by-date.component.html',
})
export class EmployeeLeavesByDateComponent implements OnInit {

  date:string="";
  leaveDetails:LeaveApplication[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void {  
  }

  onSearch(date:string){
    console.log(date);
    this.leaveService.getLeaveDetailsByDate(date).subscribe((res)=>{
      this.leaveDetails=res;
    });
  }
}
