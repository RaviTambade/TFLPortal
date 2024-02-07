import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Entities/Project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  projects:Project[]|undefined;
  employeeId:number=0;
  @Input() projectId:number=0;
  constructor(private projectSvc:ProjectService,private router:Router,private route:ActivatedRoute){
   this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
  }
  ngOnInit(): void {
   
    this.projectSvc.getProjects(this.employeeId).subscribe((res)=>
    {this.projects=res;
      console.log(res);
    });
  
  }


}
