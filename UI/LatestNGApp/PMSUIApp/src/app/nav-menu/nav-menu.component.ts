import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  name: string | undefined
  constructor(private router: Router, private userService: UserService,private authService:AuthenticationService) { }
  ngOnInit(): void {
     let contactNumber =  this.authService.getContactNumberFromToken()
    if (contactNumber != null) {
      this.userService.getUserByContact(contactNumber).subscribe((response) => {
        console.log(response);
        this.name = response.name;
      })    
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  isLoggedIn(): boolean {
    let jwt = localStorage.getItem("jwt")
    return jwt != null;
  }

  getUserName() {
    let contactNumber =  this.authService.getContactNumberFromToken()
    if (contactNumber != null) {
      this.userService.getUserByContact(contactNumber).subscribe((response) => {
        console.log(response);
        this.name = response.name;
      })    
    }

  }

  loggedOut() {
    const result = window.confirm('Are you sure you want to log out?');
    if (result) {
      this.router.navigate(['login']);
      localStorage.clear();
    } else {
      console.log('logout canceled');
    }
  }

}
