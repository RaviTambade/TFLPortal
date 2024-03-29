import { Component } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateemployeework',
  templateUrl: './updateemployeework.component.html',
  styleUrls: ['./updateemployeework.component.css']
})
export class UpdateemployeeworkComponent {
  constructor(private workMgmtSvc:WorkmgmtService,private route :ActivatedRoute){}
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
    status: '',
    sprintId: 0,
    createdDate: ''
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
    this.route.paramMap.subscribe((param)=>{
      this.empworkId=param.get("id");
      console.log(this.empworkId);
      this.workMgmtSvc.updateEmployeeWork(this.empworkId,this.status,).subscribe((res)=>{
     if(res){
    // this.employeeworks= this.employeeworks.filter((activity)=>activity.id!=this.activity)
     }
     })
    })
  }
}
