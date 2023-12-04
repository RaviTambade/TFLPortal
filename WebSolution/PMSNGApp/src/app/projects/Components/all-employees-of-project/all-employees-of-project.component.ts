import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-all-employees-of-project',
  templateUrl: './all-employees-of-project.component.html',
  styleUrls: ['./all-employees-of-project.component.css']
})
export class AllEmployeesOfProjectComponent implements OnInit{
  
  projectId:number=5;
  assignedEmployees:any[]=[];

  constructor(private service:ProjectsService){}
  ngOnInit(): void {
    this.service.getAssignedEmployeesOfProject(this.projectId).subscribe((res)=>{
      this.assignedEmployees=res;
      console.log(res);
    })
    
  }



}
