import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/employee/Models/ProjectMgmt/sprint';
import { SprintService } from 'src/app/employee/Services/sprint.service';

@Component({
  selector: 'sprint-list',
  templateUrl: './sprint-list.html',
})
export class SprintList implements OnInit{

  projectId:number=4;
  sprints:Sprint[]=[];

  constructor(private sprintSvc:SprintService){}

  ngOnInit(): void {
  
    this.sprintSvc.getSprints(this.projectId).subscribe((res)=>{
    this.sprints=res;
  })
  }

}
