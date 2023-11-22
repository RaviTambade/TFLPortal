import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthenticationService } from '../Services/authentication.service';
import { TokenClaims } from '../Models/Enums/tokenClaims';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  name: string | undefined
  roles:string[]=[]
  role:string=''
  constructor(private router: Router, private userService: UserService,private authservice:AuthenticationService) { }
  ngOnInit(): void {
     this.roles=this.authservice.getRolesFromToken(); 
    this.getUserName();
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
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    console.log("hii",userId);
    if(userId)
    this.userService.getUserNamesWithId(userId).subscribe((response) => {
      this.name = response[0].fullName;
    });

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
