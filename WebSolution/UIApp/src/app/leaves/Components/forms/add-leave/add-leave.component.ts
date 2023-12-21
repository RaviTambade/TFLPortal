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
  dateInMilliseconds: number|any; 
  constructor(private service:LeavesService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {
    // this.calculateDays();
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
    this.service.addLeave(leaves).subscribe((res)=>{
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