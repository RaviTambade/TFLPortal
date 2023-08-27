import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'routing',
  templateUrl: './application-routing.component.html',
  styleUrls: ['./application-routing.component.css']
})
export class ApplicationRoutingComponent {

  constructor(private router: Router) { }
    isroleEmployee(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Developer';
  }

  isroleManager(): boolean {
    const role = localStorage.getItem("rolename")
    return role == 'Consultant';
  }

}

