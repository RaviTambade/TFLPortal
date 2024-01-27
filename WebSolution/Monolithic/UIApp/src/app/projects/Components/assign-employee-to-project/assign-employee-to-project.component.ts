import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectMembership } from '../../Models/projectmembership';
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
  projectRole :new FormControl()
});



onSubmit(){
    let projectMembership:ProjectMembership={
      Id: 0,
      employeeId :this.employeeId,
      projectId :this.assignemployeeform.get("projectId")?.value,
      projectRole :this.assignemployeeform.get("projectRole")?.value || " ",
      projectAssignDate: new Date().toISOString().slice(0,10),
      currentProjectWorkingStatus:"yes"
  }
  console.log(projectMembership);
  this.service.assignedEmployeeToProject(projectMembership.projectId,projectMembership.employeeId,projectMembership).subscribe((res)=>{
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
