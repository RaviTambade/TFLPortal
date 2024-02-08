import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from 'src/app/shared/models/sprint';
import { SprintService } from 'src/app/shared/services/ProjectMgmt/sprint.service';
@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
})
export class SprintDetailsComponent implements OnInit{

  todaysDate=new Date().toISOString().slice(0,10);
  projectId:number=0;
  sprints:Sprint|undefined;
  constructor(private workMgmt:SprintService,private router:ActivatedRoute){}
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
