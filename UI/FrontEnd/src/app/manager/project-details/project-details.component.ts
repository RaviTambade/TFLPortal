import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/project';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: any;
  project: Project | undefined;
  status : boolean|undefined;

  constructor(private svc: EmployeeService, private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);
    this.svc.getProjectById(this.projectId).subscribe((response) => {
    this.project = response;
    console.log(response);
    })
  }

  onUpdateClick(id: number) {
    console.log(id);
    this.router.navigate(['./project-edit', id]); //update/project-edit
  };

  delete(){
    console.log(this.projectId);
    this.svc.deleteProject(this.projectId).subscribe((response) => {
      this.status = response;
      if (response) 
      { alert("Project Deleted Successfully") 
      this.router.navigate(['/projectlist']);}
      else {
        { alert("Error") }
      }
      console.log(response);
    })
  }
}
