import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LeaveApplication } from 'src/app/employee/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/employee/Services/leave.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';


@Component({
  selector: 'leave-update',
  templateUrl: './leave-update.html',
})
export class LeaveUpdate {

  employeeId:any=12;
  leaveId:number=20;
  totalDays:number |undefined;
  DifferenceInDays:number |undefined;

  fromDate: Date|any; 
  toDate: Date |any;  
  dateDifference: number|any; 
  dateInMilliseconds: number|any; 
  constructor(private service:LeaveService,private route:ActivatedRoute){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {

   /* this.route.paramMap.subscribe((params)=>{
      this.leaveId=Number(params.get('id'));
        console.log(this.leaveId);

    });*/
    //get leave details of leave id =20
    //bind with existing update compoent.
    
  }

  selectedLeaveType:string='';
  leaveType:string[]=["casual","sick","paid","unpaid"];

  leaveForm=new FormGroup({
    fromDate :new FormControl(),
    toDate :new FormControl(),
    leaveType :new FormControl()
  });

  onSubmit(){
    let leave:LeaveApplication={
      id: this.leaveId,
      employeeId: this.employeeId,
      createdOn:new Date().toISOString(),
      fromDate: this.leaveForm.get("fromDate")?.value,
      toDate: this.leaveForm.get("toDate")?.value,
      leaveType: this.leaveForm.get("leaveType")?.value,
      status:"applied"
    }
    console.log(leave);
    this.service.updateLeaveApplication(leave).subscribe((res)=>{
    console.log(res);    
  });
 console.log(this.leaveForm.value)
 }

  calculateDays() {     
    if (this.fromDate && this.toDate) {     
        const diffInMilliseconds = (new Date(this.toDate)).getTime() - (new Date(this.fromDate)).getTime(); 
        console.log(diffInMilliseconds);  
        this.dateInMilliseconds=diffInMilliseconds+86400000;
            this.dateDifference = this.dateInMilliseconds / (1000 * 60 * 60 * 24); 
          } 
          else {       
          this.dateDifference = null; 
    }
  }
}
