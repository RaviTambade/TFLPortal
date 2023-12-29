import { Component } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateemployeework',
  templateUrl: './updateemployeework.component.html',
  styleUrls: ['./updateemployeework.component.css']
})
export class UpdateemployeeworkComponent {
  constructor(private workMgmtSvc:WorkmgmtService){}
  activity:EmployeeWork={
    id: 0,
    title: '',
    description: '',
    projectWorkType: '',
    projectId: 0,
    projectName: 0,
    assignedBy: 0,
    assignedTo: 0,
    assignDate: '',
    startDate: '',
    dueDate: '',
    status: ''
  };
  activityform=new FormGroup({
    title:new FormControl(),
    activitytype:new FormControl(),
    description:new FormControl(),
    assigndate:new FormControl(),
    startdate:new FormControl(),
    duedate:new FormControl(),
    projectid:new FormControl(),
    assignedby:new FormControl(),
    assignedto:new FormControl(),
    createddate:new FormControl(),
    status:new FormControl(),
  
  
  });
  status:string="" ;
  employeeworks:EmployeeWork[]=[];
  empworkId:number|any;
  
  update(){
    this.status=this.activityform.get("status")?.value;
    this.workMgmtSvc.updateEmployeeWork(this.empworkId,this.status,).subscribe((res)=>{
     if(res){
     //this.employeeworks= this.employeeworks.filter((activity)=>activity.id!=this.activity)
     }
     })
  }
}
