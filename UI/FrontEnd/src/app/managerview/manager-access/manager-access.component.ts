import { Component } from '@angular/core';
import { ManagerviewService } from '../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Project } from '../project';

@Component({
  selector: 'app-manager-access',
  templateUrl: './manager-access.component.html',
  styleUrls: ['./manager-access.component.css']
})
export class ManagerAccessComponent {

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
  }


  employeeList(){
    this.router.navigate(['./employeelist']); 
  };

  projectList(){
    this.router.navigate(['./projectlist']);
  }
  
  tasksList(){
    this.router.navigate(['./taskslist']);
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
