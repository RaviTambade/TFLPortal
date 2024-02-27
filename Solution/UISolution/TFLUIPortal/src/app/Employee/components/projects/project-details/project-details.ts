import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/employee/Models/ProjectMgmt/Project';
import { ProjectService } from 'src/app/employee/Services/project.service';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.html',
})
export class ProjectDetails implements OnInit{

  constructor(private projectSvc:ProjectService,private router:Router,private route:ActivatedRoute){}
  projectId:number=0;
  project:Project|undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.projectId=Number(res.get('id'));
      console.log("project Id:",this.projectId);
      this.projectSvc.getProject(this.projectId).subscribe((res)=>{
        this.project=res;
        console.log(res);
      })
    });
  }
}
