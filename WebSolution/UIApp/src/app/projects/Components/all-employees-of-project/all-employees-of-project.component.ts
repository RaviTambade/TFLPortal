import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ReleaseEmployee } from '../../Models/ReleaseEmployee';

@Component({
  selector: 'app-all-employees-of-project',
  templateUrl: './all-employees-of-project.component.html',
  styleUrls: ['./all-employees-of-project.component.css']
})
export class AllEmployeesOfProjectComponent implements OnInit{
  
  assignedEmployees:any[]=[];
  projects:Project[]=[];
  EmployeeId:number |undefined;
  ProjectId:number |undefined;
  selectedProject:boolean=false;
  status:string="yes";
  updateProject:ReleaseEmployee={
    employeeId: 0,
    projectId: 0,
    releaseDate: new Date().toISOString(),
    status: 'no'
  };

  constructor(private service:ProjectService,private svc:ProjectsService){}

    ngOnInit(): void {
      this.service.fetchAllProject().subscribe((res)=>{
      this.projects=res;
      console.log(res);
      })
    }  

    onChange(event:any){
      console.log(event.target.value);
      const projectId=event.target.value;
      this.svc.getEmployeesOfProject(projectId,this.status).subscribe((res)=>{
      this.assignedEmployees=res;
      console.log(res);      
    })
  }


  onSubmit(projectId:number,employeeId:number){
    this.updateProject.employeeId= employeeId;
    this.updateProject.projectId=projectId;
    console.log(this.updateProject);
    console.log(this.updateProject.employeeId);
    console.log(this.updateProject.projectId);
    this.svc.releaseEmployeeFromProject(this.updateProject.projectId,this.updateProject.employeeId,this.updateProject).subscribe((res)=>{
    console.log(res);
    })
  }
}




