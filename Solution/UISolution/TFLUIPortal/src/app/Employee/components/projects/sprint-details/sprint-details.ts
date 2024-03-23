import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/employee/Models/ProjectMgmt/sprint';
import { SprintService } from 'src/app/projectmanager/Services/sprint.service';

@Component({
  selector: 'sprint-details',
  templateUrl: './sprint-details.html',
})
export class SprintDetails implements OnInit{
sprint:Sprint|undefined;
  constructor(private sprintSvc:SprintService){}
  ngOnInit(): void {
    this.sprintSvc.getSprint(1).subscribe(res=>{
       this.sprint=res;
    })
  }

}
