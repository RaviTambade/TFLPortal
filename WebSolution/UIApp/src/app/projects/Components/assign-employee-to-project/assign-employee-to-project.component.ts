import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectAllocation } from '../../Models/projectallocation';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from '../../Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ProjectallocationService } from 'src/app/shared/services/projectallocation.service';

@Component({
  selector: 'app-assign-employee-to-project',
  templateUrl: './assign-employee-to-project.component.html',
  styleUrls: ['./assign-employee-to-project.component.css']
})
export class AssignEmployeeToProjectComponent implements OnInit{

  projects:Project[]=[];
  projectId:number |undefined;

  @Input() employeeId :number=0;
  @Input() Name :string='';

 constructor(private svc:ProjectService,private service:ProjectallocationService){}
 ngOnInit(): void {
  this.svc.fetchAllProject().subscribe((res)=>{
  this.projects=res;
  console.log(res);
  })
 }
 
 assignemployeeform=new FormGroup({
  projectId:new FormControl(),
  membership :new FormControl()
});

onSubmit(){
  let projectAllocations:ProjectAllocation={
    Id: 0,
    employeeId: this.employeeId,
    projectId: this.assignemployeeform.get("projectId")?.value,
    membership: this.assignemployeeform.get("membership")?.value,
    assignDate: new Date().toISOString().slice(0,10),
    status: "yes"
  }

  console.log(projectAllocations);
  this.service.assignedEmployeeToProject(projectAllocations.projectId,projectAllocations.employeeId,projectAllocations).subscribe((res)=>{
  console.log(res);
 });
 console.log(this.assignemployeeform.value)
}

onChange(event:any){
  console.log(event.target.value);
      this.projectId=event.target.value;
      console.log(this.projectId);
 }
}
