import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-update-employee-work',
  templateUrl: './update-employee-work.component.html',
  styleUrls: ['./update-employee-work.component.css']
})
export class UpdateEmployeeWorkComponent implements OnInit{

  @Input() activityId:number=0;
  employeeworks:EmployeeWork|undefined;
  
  // activityform:any=new FormGroup({});
  activityform=new FormGroup({
    status:new FormControl(),
  });
  
  constructor(private workMgmtSvc:WorkmgmtService){}


// status:string='';

  // update(){
  //   // this.status=this.activityform.get("status")?.value;
  //   this.workMgmtSvc.updateEmployeeWork(this.activityId,this.status,).subscribe((res)=>{
  //    console.log(res);
  //    })
  // }


  
 
   ngOnInit(): void {

   
       this.workMgmtSvc.fetchEmployeeWorkDetailsById(this.activityId).subscribe((res)=>{
       this.employeeworks=res;
       this.activityform.patchValue({status:res.status});
       console.log(res);
       })

       
   }
}
