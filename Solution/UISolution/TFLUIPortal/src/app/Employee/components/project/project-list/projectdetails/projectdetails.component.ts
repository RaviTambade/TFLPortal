import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/Entities/Project';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent  {
 
  @Input() project: Project | undefined;
 
}
