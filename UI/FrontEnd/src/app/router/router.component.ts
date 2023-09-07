import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent {

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


