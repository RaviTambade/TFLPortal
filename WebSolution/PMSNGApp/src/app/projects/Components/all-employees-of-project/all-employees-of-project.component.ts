import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ActivityService } from 'src/app/activity/Services/activity.service';
import { Project } from '../../Models/project';

@Component({
  selector: 'app-all-employees-of-project',
  templateUrl: './all-employees-of-project.component.html',
  styleUrls: ['./all-employees-of-project.component.css']
})
export class AllEmployeesOfProjectComponent implements OnInit{
  
  assignedEmployees:any[]=[];
  projects:Project[]=[];
  selectedProject:boolean=false;
  constructor(private service:ProjectsService){}

    ngOnInit(): void {
      this.service.getAllProjects().subscribe((res)=>{
      this.projects=res;
      console.log(res);
      })
    }
    

    onChange(event:any){
      console.log(event.target.value);
      const projectId=event.target.value;
      this.selectedProject=true;
      this.service.getAssignedEmployeesOfProject(projectId).subscribe((res)=>{
      this.assignedEmployees=res;
      console.log(res);
    })
  }
}




