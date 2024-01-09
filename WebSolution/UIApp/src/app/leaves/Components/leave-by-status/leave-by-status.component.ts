import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';
import { LeaveApplication } from '../../Models/LeaveApplication';

@Component({
  selector: 'app-leave-by-status',
  templateUrl: './leave-by-status.component.html',
  styleUrls: ['./leave-by-status.component.css']
})
export class LeaveByStatusComponent implements OnInit{

  // leaveStatus:string="sanctioned";
  // checkStatusSanctioned: boolean = true;
  // checkStatusNotSanctioned: boolean = false;
  checkStatus: string = "applied";
  leaves:LeaveApplication[]=[];
  leaveDetails:LeaveApplication[]=[];
  constructor(private service:LeavesService){}
  
  ngOnInit(): void {
    this.service.getAllEmployeeLeaves().subscribe((res)=>{
      console.log(res);
      this.leaves=res;
      this.filterLeaves();
    })
  }

  // filterActivities(): void {

  //   if(this.checkStatusApplied && this.checkStatusSanctioned && this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves;
  //   }

  //   else if(this.checkStatusApplied && this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied' || item.status==='notsanctioned');
  //   }
  //   else if(this.checkStatusNotSanctioned && this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'notsanctioned' || item.status==='sanctioned');
  //   }

  //   else if(this.checkStatusApplied && this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied' || item.status==='sanctioned');
  //   }
  //   else if(this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'sanctioned');
  //   }
  //   else if(this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'notsanctioned');
  //   }
  //   else if(this.checkStatusApplied){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied');
  //   }
  //   else{
  //     this.leaveDetails=[];
  //   }
  // }

  filterLeaves(){
    console.log(this.checkStatus);
    this.service.getLeaveDetails(this.checkStatus).subscribe((res)=>{
      this.leaveDetails=res
    })
  }
}
