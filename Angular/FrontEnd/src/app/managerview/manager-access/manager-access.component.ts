import { Component } from '@angular/core';
import { ManagerviewService } from '../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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

<<<<<<< HEAD
  taskAdd(){
    this.router.navigate(['./taskadd']);
  }
=======
  tasksList(){
    this.router.navigate(['./taskslist']);
  }


>>>>>>> 3d8b0ac77ca15d31f4b43f4c337ed76b1e41f6a8
}
