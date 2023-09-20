import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  constructor(
    private router: Router

  ) {}

  addEmployee() {
    this.router.navigate(['teammanager/addemployee']);
  
}
}
