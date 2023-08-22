import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'routercontainer',
  templateUrl: './router-container.component.html',
  styleUrls: ['./router-container.component.css']
})
export class RouterContainerComponent {

  constructor(private router: Router) { }
    isroleDeveloper(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Developer';
  }

  isroleConsultant(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Consultant';
  }

  isroleTester(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Tester';
  }
  isroleManager(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Manager';
  }

}


