import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/employee/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/employee/Services/leave.service';


@Component({
  selector: 'leave-update',
  templateUrl: './leave-update.html',
})
export class LeaveUpdate {

  leaveId:number=1;
  leaveTypes:string[]=["casual","sick","paid","unpaid"];
  leave:LeaveApplication ={
    id: 0,
    employeeId: 0,
    createdOn: '',
    fromDate: '',
    toDate: '',
    status: '',
    leaveType: ''
  }; 
  dateDifference: number|string=''; 


  constructor(private leaveSvc:LeaveService){}
  ngOnInit(): void {

    this.leaveSvc.getLeaveApplication(this.leaveId).subscribe((res)=>{
      this.leave=res;
      this.leave.fromDate=this.leave.fromDate.slice(0,10);
      this.leave.toDate=this.leave.toDate.slice(0,10);
      this.calculateDays();
      console.log(this.leave);
    })  
  }


  onSubmit(){
    console.log(this.leave);
    this.leaveSvc.updateLeaveApplication(this.leave).subscribe((res)=>{
    console.log(res);    
  });
 }

  calculateDays() {     
   this.dateDifference= this.leaveSvc.calculateDays(this.leave.fromDate,this.leave.toDate);
  }
}
