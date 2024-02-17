import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../Services/project.service';
import { Project } from '../../Models/Project';
@Component({
  selector: 'project-item',
  templateUrl: './mgr-project-item.html',
})
export class MgrProjectItem {
  constructor(private projectSvc:ProjectService,private router:ActivatedRoute){}
  @Input() project:Project|undefined;
}
