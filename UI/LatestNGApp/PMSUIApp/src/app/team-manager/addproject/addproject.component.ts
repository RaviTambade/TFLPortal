import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Addproject } from 'src/app/Models/addproject';
import { AuthenticationService } from 'src/app/Services/authentication.service';
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
    private router:Router, private authservice:AuthenticationService
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
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.managerId = res;
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
