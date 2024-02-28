import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/employee/Services/project.service';
import { Project } from 'src/app/projectmanager/Models/Project';
@Component({
  selector: 'project-item',
  templateUrl: './projectitem.html',
})
export class ProjectItem  {
 
  @Input() project: Project |any;
  projectId: number = 0;
  
  constructor(private projectSvc: ProjectService,private router:Router) {
  }
  
  ngOnInit(): void {
    this.projectId=this.project.id;
    this.projectSvc.getProject(this.projectId).subscribe((res) => {
      this.project = res;
      console.log(res);
    });
  }

  onClick(id:number){
    console.log(id);
    this.router.navigate(['employees/projects/details/',id]);
  }
}
