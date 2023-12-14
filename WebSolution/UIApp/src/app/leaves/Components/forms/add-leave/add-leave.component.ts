import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Leave } from 'src/app/leaves/Models/Leave';
import { LeavesService } from 'src/app/leaves/Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  employeeId:any;
  totalDays:number |undefined;
  DifferenceInDays:number |undefined;

  fromDate: Date|any; 
  toDate: Date |any;  
  dateDifference: number|any; 
   
  constructor(private service:LeavesService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {
    this.calculateDateDifference();
  }
  selectedLeaveType:string='';

  leaveType:string[]=["casual","sick","paid","unpaid"];

  leaveForm=new FormGroup({
    fromDate :new FormControl(),
    toDate :new FormControl(),
    leaveType :new FormControl()
  });

  onSubmit(){
    let leaves:Leave={
      id: 0,
      employeeId: this.employeeId,
      fromDate: this.leaveForm.get("fromDate")?.value,
      toDate: this.leaveForm.get("toDate")?.value,
      status: "notstarted",
      leaveType: this.leaveForm.get("leaveType")?.value
    }
    console.log(leaves);
    // this.fromDate=leaves.fromDate;
    // this.toDate=leaves.toDate;
    // console.log(this.fromDate);
    // console.log(this.toDate);
    // const firtDateMs = (new Date(this.fromDate)).getTime();
    // console.log(firtDateMs);
    // const secondDateMs = (new Date(this.toDate)).getTime();
    // console.log(secondDateMs);
    // this.DifferenceInDays = Math.ceil(Math.abs(firtDateMs - secondDateMs) / (1000 * 60 * 60 * 24));
    // console.log("Difference_In_Days: ", this.DifferenceInDays);
    this.service.addLeave(leaves).subscribe((res)=>{
    console.log(res);    
  });
 console.log(this.leaveForm.value)
 }


  
  calculateDateDifference() {     
    // const firtDateMs = (new Date(this.fromDate)).getTime();
    // console.log(firtDateMs);
    // const secondDateMs = (new Date(this.toDate)).getTime();
    // console.log(secondDateMs);
    // this.dateDifference = Math.ceil(Math.abs(firtDateMs - secondDateMs) / (1000 * 60 * 60 * 24));
    // console.log("Difference_In_Days: ", this.dateDifference);
    if (this.fromDate && this.toDate) {     
        const diffInMilliseconds = (new Date(this.fromDate)).getTime() - (new Date(this.toDate)).getTime(); 
        console.log(diffInMilliseconds);  
            this.dateDifference = diffInMilliseconds / (1000 * 60 * 60 * 24); 
          } 
          else {       
          this.dateDifference = null; 
    }
  }
}


// calculateDateDifference() {     
//   if (this.startDate && this.endDate) {  
//          const diffInMilliseconds = this.endDate.getTime() - this.startDate.getTime(); 
//                this.dateDifference = diffInMilliseconds / (1000 * 60 * 60 * 24); // Convert milliseconds to days   
//                } else {       this.dateDifference = null;     }   }
