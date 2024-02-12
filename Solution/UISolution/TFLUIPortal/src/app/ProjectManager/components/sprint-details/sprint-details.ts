import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from 'src/app/shared/Entities/Projectmgmt/sprint';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { SprintService } from 'src/app/shared/services/ProjectMgmt/sprint.service';
@Component({
  selector: 'sprint-details',
  templateUrl: './sprint-details.html',
})
export class SprintDetails implements OnInit{

  todaysDate=new Date().toISOString().slice(0,10);
  projectId:number=4;
  sprint:Sprint|undefined;

  constructor(private svc:SprintService){}

  ngOnInit(): void {
  this.router.paramMap.subscribe((param)=>{
   // this.projectId=Number(param.get('id'));
    this.svc.getCurrentSprint(this.projectId,this.todaysDate).subscribe((theSprint)=>{
    this.sprint=theSprint;
    console.log(theSprint);
  })
})
}

}
