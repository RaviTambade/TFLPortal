import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addproject } from 'src/app/Models/addproject';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  addProjectForm: FormGroup;
  managerId: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
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
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.managerId = res;
      console.log(this.managerId);
    });
  }
  onSubmit() {
    if (this.addProjectForm.valid) {
      let project: Addproject = {
        id:0,
        title: this.addProjectForm.get('title')?.value,
        startDate: this.addProjectForm.get('startDate')?.value,
        endDate: this.addProjectForm.get('endDate')?.value,
        description: this.addProjectForm.get('description')?.value,
        status: this.addProjectForm.get('status')?.value,
        teamManagerId: this.addProjectForm.get('teamManagerId')?.value,
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
