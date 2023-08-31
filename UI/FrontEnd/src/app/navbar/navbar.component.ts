import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';
import { Project } from '../models/project';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
  }


  employeeList(){
    this.router.navigate(['./employee-list']); 
  };

  projectList(){
    this.router.navigate(['./project-list']);
  }
  
  tasksList(){
    this.router.navigate(['./tasks-list']);
  }

  projects:Project[] |undefined;
 
  
  ngOnInit(): void {
    this.svc.getAllProjects().subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
      })
      };

      onDetails(id: number){
        this.router.navigate(['./totaldetails', id]);
      }

}



