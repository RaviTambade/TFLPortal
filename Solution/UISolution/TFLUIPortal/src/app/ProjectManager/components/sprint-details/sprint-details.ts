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
  sprint:Sprint=new Sprint(23, "feb sprint","2-3-2024","20-3-2024","Shoppingcart complete",7);

  constructor(private svc:SprintService){}

  ngOnInit(): void {
   

}
}


