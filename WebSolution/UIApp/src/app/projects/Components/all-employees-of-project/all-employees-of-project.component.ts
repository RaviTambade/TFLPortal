import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/project';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-all-employees-of-project',
  templateUrl: './all-employees-of-project.component.html',
  styleUrls: ['./all-employees-of-project.component.css']
})
export class AllEmployeesOfProjectComponent implements OnInit{
  
  assignedEmployees:any[]=[];
  projects:Project[]=[];
  selectedProject:boolean=false;
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
      this.selectedProject=true;
      this.svc.getAssignedEmployeesOfProject(projectId).subscribe((res)=>{
      this.assignedEmployees=res;
      console.log(res);
    })
  }
}




