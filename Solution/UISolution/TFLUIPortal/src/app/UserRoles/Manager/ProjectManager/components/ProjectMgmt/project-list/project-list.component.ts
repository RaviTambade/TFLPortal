import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/Entities/Project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit{
  projects:Project[]|undefined;
  @Output() projectDetails: EventEmitter<Project> = new EventEmitter();
  employeeId:number=0;
  @Input() projectId:number=0;
  constructor(private projectSvc:ProjectService,private router:Router,private route:ActivatedRoute){
   this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
  }
  ngOnInit(): void {
   
    this.projectSvc.getProjects(this.employeeId).subscribe((res)=>
    {this.projects=res;
    this.projectDetails.emit(this.projects[0]);
    });
  
  }


}
