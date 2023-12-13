import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Leave } from 'src/app/leaves/Models/Leave';
import { LeavesService } from 'src/app/leaves/Services/leaves.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent  {

   employeeId:any;
   
  constructor(private service:LeavesService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
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
}


