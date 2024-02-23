import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/hrmanager/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/hrmanager/Services/leave.service';

@Component({
  selector: 'employee-leaves-by-date',
  templateUrl: './employee-leaves-by-date.html',
})

export class EmployeeLeavesByDate {

  date:string="";
  leaveDetails:LeaveApplication[]=[];
  
  constructor(private leaveService:LeaveService){}

  onSearch(date:string){
    this.leaveService.getLeaveApplicationsOfDate(date).subscribe((res)=>{
      this.leaveDetails=res;
    });
  }
}
