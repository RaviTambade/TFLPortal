import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/projects/Models/project';
import { ProjectsService } from 'src/app/projects/Services/projects.service';
import { ResourceManagementService } from 'src/app/resource-management/Services/resource-management.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  addProjectForm: FormGroup;
  managerId: number = 4;
  userId:number =1;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: ResourceManagementService,
    private projectService: ProjectsService,
    private router:Router
  ) {
    this.addProjectForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      teamManagerId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    // let userId = localStorage.getItem('userId');
    // this.employeeService.getEmployeeId(this.userId).subscribe((res) => {
    //   this.managerId = res;
    //   });
  }
  onSubmit() {
    if (this.addProjectForm.valid) {
      let project: Project = {
        id: 0,
        title: this.addProjectForm.get('title')?.value,
        startDate: this.addProjectForm.get('startDate')?.value,
        // endDate: this.addProjectForm.get('endDate')?.value,
        // description: this.addProjectForm.get('description')?.value,
        status: this.addProjectForm.get('status')?.value,
        teamManagerId: this.addProjectForm.get('teamManagerId')?.value,
        teamManagerUserId: 0
      };
      this.projectService.addProject(project).subscribe((res) => {
        if (res) {
          alert('project added Sucessfully');
          this.router.navigate(["teammanager/projects"])
          this.addProjectForm.reset();
        }
      });
    }
  }
}
