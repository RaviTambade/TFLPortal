import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leavemgmt.service';

@Component({
  selector: 'app-employee-leaves-by-date',
  templateUrl: './employee-leaves-by-date.html',
})
export class EmployeeLeavesByDate implements OnInit {

  date:string="";
  leaveDetails:LeaveApplication[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void {  
  }

  onSearch(date:string){
    console.log(date);
    this.leaveService.getLeaveApplicationsByDate(date).subscribe((res)=>{
      this.leaveDetails=res;
    });
  }
}
