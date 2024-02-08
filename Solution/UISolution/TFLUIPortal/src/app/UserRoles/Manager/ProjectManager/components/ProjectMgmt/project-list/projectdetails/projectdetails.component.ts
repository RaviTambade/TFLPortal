import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/Entities/Project';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
})
export class ProjectdetailsComponent{
  constructor(private projectSvc:ProjectService,private router:ActivatedRoute){}
  @Input() project:Project|undefined;
  //project:Project|undefined;
  // status:string='yes';
  // employees:any[]=[];
  // ngOnInit(): void {
  
  //   this.projectSvc.getProject(this.projectId).subscribe((res)=>{
  //     this.project=res;
  //   })
  //   }




}
