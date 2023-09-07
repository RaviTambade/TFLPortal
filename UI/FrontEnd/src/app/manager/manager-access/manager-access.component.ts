import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-manager-access',
  templateUrl: './manager-access.component.html',
  styleUrls: ['./manager-access.component.css']
})
export class ManagerAccessComponent {

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
  }


  employeeList(){
    this.router.navigate(['./employee-list']); 
  };

  projectList(){
    this.router.navigate(['./project-list']);
  }
  
  tasksList(){
    this.router.navigate(['./task-list']);
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
