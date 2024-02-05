import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LeaveApplication } from 'src/app/Entities/LeaveApplication';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-update-employee-leave',
  templateUrl: './update-employee-leave.component.html',
  styleUrls: ['./update-employee-leave.component.css']
})
export class UpdateEmployeeLeaveComponent {

  employeeId:any;
  id:number=0;
  totalDays:number |undefined;
  DifferenceInDays:number |undefined;

  fromDate: Date|any; 
  toDate: Date |any;  
  dateDifference: number|any; 
  dateInMilliseconds: number|any; 
  constructor(private service:LeavesService,private route:ActivatedRoute){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.id=Number(params.get('id'));
        console.log(this.id);
    });
  }

  selectedLeaveType:string='';
  leaveType:string[]=["casual","sick","paid","unpaid"];

  leaveForm=new FormGroup({
    fromDate :new FormControl(),
    toDate :new FormControl(),
    leaveType :new FormControl()
  });

  onSubmit(){
    let leaves:LeaveApplication={
      id: this.id,
      employeeId: this.employeeId,
      createdOn:new Date().toISOString(),
      fromDate: this.leaveForm.get("fromDate")?.value,
      toDate: this.leaveForm.get("toDate")?.value,
      leaveType: this.leaveForm.get("leaveType")?.value,
      status:" "
    }
    console.log(leaves);
    this.service.updateEmployeeLeave(leaves).subscribe((res)=>{
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
