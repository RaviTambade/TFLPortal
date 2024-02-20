import { Component, OnInit } from '@angular/core';
import { SprintService } from '../../Services/sprint.service';
import { Sprint } from '../../Models/sprint';

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
  console.log(res);
  this.sprints=res;
   })
  }

}
