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
=======
  taskAdd(){
    this.router.navigate(['./taskadd']);
  }
>>>>>>> 20e68eae4057613e301362bd4d19c5b2309fdb3d
  tasksList(){
    this.router.navigate(['./taskslist']);
  }


}
