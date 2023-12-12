import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Leave } from 'src/app/leaves/Models/Leave';
import { LeavesService } from 'src/app/leaves/Services/leaves.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent {

  constructor(private service:LeavesService){}
  selectedLeaveType:string='';

  leaveType:string[]=["casual","privileged","sick","maternity","marriage","paternity","bereavement","comp off","loss of pay","study","religious festival","sabbatical"];

  leaveForm=new FormGroup({
    employeeId:new FormControl(),
    fromDate :new FormControl(),
    toDate :new FormControl(),
    status :new FormControl(),
    leaveType :new FormControl()
  });

  onSubmit(){
    let leaves:Leave={
      id: 0,
      employeeId: this.leaveForm.get("employeeId")?.value,
      fromDate: this.leaveForm.get("fromDate")?.value,
      toDate: this.leaveForm.get("toDate")?.value,
      status: this.leaveForm.get("status")?.value,
      leaveType: this.leaveForm.get("leaveType")?.value
    }
    console.log(leaves);
    this.service.addLeave(leaves).subscribe((res)=>{
    console.log(res);
  });
 console.log(this.leaveForm.value)
 }
}


