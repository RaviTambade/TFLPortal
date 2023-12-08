import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectAllocation } from '../../Models/projectallocation';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assign-employee-to-project',
  templateUrl: './assign-employee-to-project.component.html',
  styleUrls: ['./assign-employee-to-project.component.css']
})
export class AssignEmployeeToProjectComponent {

 constructor(private service:ProjectsService){}
  projectAllocations:ProjectAllocation={
    Id: 0,
    employeeId: 0,
    projectId: 0,
    membership: '',
    assignDate: '',
    status: ''
  }
 assignemployeeform=new FormGroup({
  employeeId:new FormControl(),
  projectId:new FormControl(),
  membership :new FormControl(),
  assignDate:new FormControl(),
  status:new FormControl(),
});

onSubmit(){

  this.projectAllocations.employeeId=this.assignemployeeform.get("employeeId")?.value;
  this.projectAllocations.projectId=this.assignemployeeform.get("projectId")?.value;
  this.projectAllocations.membership=this.assignemployeeform.get("membership")?.value;
  this.projectAllocations.assignDate=this.assignemployeeform.get("assignDate")?.value;
  this.projectAllocations.status=this.assignemployeeform.get("status")?.value;
  
  this.projectAllocations.employeeId=28;
  this.projectAllocations.projectId=2;
  this.projectAllocations.status="yes";
  this.projectAllocations.assignDate=new Date().toISOString();

  console.log(this.projectAllocations);
 this.service.assignedEmployeeToProject(this.projectAllocations.projectId,this.projectAllocations.employeeId,this.projectAllocations).subscribe((res)=>{
  console.log(res);
 });
 console.log(this.assignemployeeform.value)
}
}
