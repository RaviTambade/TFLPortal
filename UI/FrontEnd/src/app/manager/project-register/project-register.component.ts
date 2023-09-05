import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-project-register',
  templateUrl: './project-register.component.html',
  styleUrls: ['./project-register.component.css']
})
export class ProjectRegisterComponent implements OnInit {

  project: Project | any;
  Id: number | any;
  status : boolean |undefined;

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.project = {
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('id')
    })

  }

  addProject(form:any): void {
    console.log(form);
    console.log(this.project);
    this.svc.addProject(this.project).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Project added successfully")
        this.router.navigate(['/project-list']);
        window.location.reload();
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}
 