import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'project-item',
  templateUrl: './project-item.html',
})
export class Projectdetails{
  constructor(private projectSvc:ProjectService,private router:ActivatedRoute){}
  @Input() project:Project|undefined;
}
