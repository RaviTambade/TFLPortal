import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from 'src/app/shared/Entities/Projectmgmt/sprint';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.html',
})
export class SprintDetails implements OnInit{

  todaysDate=new Date().toISOString().slice(0,10);
  projectId:number=0;
  sprints:Sprint|undefined;
  constructor(private workMgmt:ProjectService,private router:ActivatedRoute){}
ngOnInit(): void {
 this.router.paramMap.subscribe((param)=>{
  this.projectId=Number(param.get('id'));
 this.workMgmt.getCurrentSprint(this.projectId,this.todaysDate).subscribe((res)=>{
  this.sprints=res;
  console.log(res);
 })
})
}

}
