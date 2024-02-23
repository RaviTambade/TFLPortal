import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/employee/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/employee/Services/leave.service';

@Component({
  selector: 'add-leave',
  templateUrl: './add-leave.html',
})
export class AddLeave implements OnInit {

  employeeId:number=10;
  totalDays:number |undefined;
  dateDifference: number=0; 
  leaveType:string[]=["casual","sick","paid","unpaid"];

  leave:LeaveApplication={
    id: 0,
    employeeId: this.employeeId,
    createdOn: new Date().toISOString(),
    fromDate: '',
    toDate: '',
    status: 'applied',
    leaveType: ''
  }

  constructor(private service:LeaveService){
  }

  ngOnInit(): void { 
    this.calculateDays();
  }
  
  onSubmit(){
    console.log(this.leave);
    this.service.addNewLeaveApplication(this.leave).subscribe((res)=>{
      
      // this.leave.fromDate=this.leave.fromDate.slice(0,10);
      // this.leave.toDate=this.leave.toDate.slice(0,10);
       this.leave.leaveType=this.leave.leaveType
      console.log(this.leave.leaveType);
  });
 }

 calculateDays() {     
  this.dateDifference= this.service.calculateDays(this.leave.fromDate,this.leave.toDate);
 }
}